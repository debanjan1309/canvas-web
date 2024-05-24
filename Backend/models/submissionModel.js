const submissions = [];

const submissionModel = {
  addSubmission: (submission) => {
    submission.id = submissions.length + 1; // Add a unique identifier
    submission.submissionTime = submission.submissionTime || new Date().toLocaleString(); // Add submission time if not provided
    submission.options = Array.isArray(submission.options) ? submission.options : []; // Ensure options is always an array
    submissions.push(submission);
  },

  getAllSubmissions: () => {
    return submissions.slice().reverse();
  },
};

module.exports = submissionModel;
