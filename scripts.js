document.addEventListener("DOMContentLoaded", function () {
  const questions = document.querySelectorAll(".question");

  questions.forEach((question) => {
    question.addEventListener("click", function () {
      const answer = this.nextElementSibling;

      // Toggle visibility of the answer with a smooth animation
      if (answer.style.maxHeight) {
        answer.style.maxHeight = null;
        answer.style.paddingTop = null;
        answer.style.paddingBottom = null;
      } else {
        answer.style.maxHeight = answer.scrollHeight + "px";
        answer.style.paddingTop = "10px";
        answer.style.paddingBottom = "10px";
      }
    });
  });
});
