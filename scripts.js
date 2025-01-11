document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll('.question');
  
  questions.forEach((question) => {
    question.addEventListener('click', function () {
      const answer = this.nextElementSibling;
      
      // Toggle the display of the answer
      if (answer.style.maxHeight) {
        // If it's open, close it
        answer.style.maxHeight = null;
        answer.style.padding = "0px";
      } else {
        // If it's closed, open it
        answer.style.maxHeight = answer.scrollHeight + "px"; // Set to content height
        answer.style.padding = "10px"; // Add padding when open
      }
    });
  });
});
