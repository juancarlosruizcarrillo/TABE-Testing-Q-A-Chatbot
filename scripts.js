document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll('.question');
  
  questions.forEach((question) => {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;

      // Check if the answer is already visible
      if (answer.style.display === "block") {
        // If it's open, close it
        answer.style.display = "none";
        answer.style.maxHeight = "0"; // Collapse it
        answer.style.padding = "0px"; // Remove padding
      } else {
        // If it's closed, open it
        answer.style.display = "block"; // Show the answer
        answer.style.maxHeight = answer.scrollHeight + "px"; // Set height to content height
        answer.style.padding = "10px"; // Add padding when open
      }
    });
  });
});
