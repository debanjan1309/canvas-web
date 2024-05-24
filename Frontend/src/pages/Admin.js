import React, { useState, useEffect } from 'react';
import axios from 'axios';
import '../style/Admin.css';

const Admin = () => {
  const [submissions, setSubmissions] = useState([]);

  useEffect(() => {
    const fetchSubmissions = async () => {
      try {
        const response = await axios.get('http://localhost:4000/api/submissions');
        setSubmissions(response.data.submissions);
      } catch (error) {
        console.error('Error fetching submissions:', error.message);
      }
    };

    fetchSubmissions();
  }, []);

  return (
    <div>
      <h1>Admin Dashboard</h1>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone</th>
            <th>Message</th>
            <th>Options</th>
            <th>Submission Time</th>
          </tr>
        </thead>
        <tbody>
          {submissions.map((submission) => (
            <tr key={submission.id}>
              <td>{submission.id}</td>
              <td>{submission.name}</td>
              <td>{submission.email}</td>
              <td>{submission.number}</td>
              <td>{submission.message}</td>
              <td>{submission.options.join(', ')}</td>
              <td>{submission.submissionTime}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default Admin;
