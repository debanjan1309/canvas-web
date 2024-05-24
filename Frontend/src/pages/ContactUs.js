import React, { useState } from 'react';
import axios from 'axios';
import '../style/ContactUs.css';
import logo1 from "../components/image/logo1.jpg";

const ContactUs = () => {
  const initialFormData = {
    name: '',
    email: '',
    number: '',
    message: '',
    options: [],
  };

  const [formData, setFormData] = useState(initialFormData);
  const [showSuccessPopup, setShowSuccessPopup] = useState(false);

  const handleChange = (e) => {
    const { name, value, type, options } = e.target;

    setFormData((prevData) => ({
      ...prevData,
      [name]: type === 'checkbox' ? getUpdatedCheckboxOptions(prevData.options, value) : type === 'select-multiple' ? Array.from(options).filter(option => option.selected).map(option => option.value) : value,
    }));
  };

  const getUpdatedCheckboxOptions = (options, value) => {
    if (options.includes(value)) {
      return options.filter((option) => option !== value);
    } else {
      return [...options, value];
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const optionsArray = Array.isArray(formData.options) ? formData.options : [formData.options];
      await axios.post('http://localhost:4000/api/submit', {
        name: formData.name,
        email: formData.email,
        number: formData.number,
        message: formData.message,
        options: optionsArray,
      });

      // Show success popup
      setShowSuccessPopup(true);

      // Clear form after successful submission
      setFormData(initialFormData);

      // Hide success popup after 3 seconds
      setTimeout(() => {
        setShowSuccessPopup(false);
      }, 1500);
    } catch (error) {
      console.error('Error submitting form:', error.message);
    }
  };

  return (
    <div className="contact__container">
      <div className="contact__image">
        <img id='logo' src={logo1} alt='Contact Us' />
      </div>
      <div className="contact__form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
        <div>
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="number">Number:</label>
            <input
              type="tel"
              id="number"
              name="number"
              value={formData.number}
              onChange={handleChange}
              required
            />
          </div>
          <div>
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <div className="options-dropdown">
            <label htmlFor="options">Options:</label>
            <select
              id="options"
              name="options"
              multiple
              value={formData.options}
              onChange={handleChange}
            >
              <option value="False Ceiling">False Ceiling</option>
              <option value="Home Painting">Home Painting</option>
              <option value="Furniture">Furniture</option>
            </select>
          </div>
          <button type="submit">Submit</button>
        </form>

        {showSuccessPopup && (
          <div className="success-popup">
            <p>Form submitted successfully!</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default ContactUs;
