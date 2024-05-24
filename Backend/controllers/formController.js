const submissions = require('../models/submissionModel'); // Assuming you have a submission model

const formController = {
  submitForm: (req, res) => {
    const { name, number, email, message, options } = req.body;
    console.log('Received form submission:', { name, number, email, message, options });
    const submissionTime = new Date().toLocaleString();

    // Store the submission using the submission model
    submissions.addSubmission({ name, number, email, message, options, submissionTime });

    res.status(201).json({ message: 'Submission received successfully!' });
  },

  getAllSubmissions: (req, res) => {
    // Retrieve all submissions using the submission model
    const allSubmissions = submissions.getAllSubmissions().reverse();
    res.status(200).json({ submissions: allSubmissions });
  },
};

module.exports = formController;
