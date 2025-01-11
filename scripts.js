// JavaScript to handle FAQ toggle functionality
document.querySelectorAll(".faq-question").forEach((question) => {
    question.addEventListener("click", () => {
        const answer = question.nextElementSibling;

        // Toggle visibility and apply smooth animations
        if (answer.style.display === "block") {
            answer.style.display = "none";
        } else {
            // First, ensure all other answers are collapsed (optional)
            document.querySelectorAll(".faq-answer").forEach((otherAnswer) => {
                otherAnswer.style.display = "none";
            });

            // Then, display the clicked answer
            answer.style.display = "block";
        }
    });
});
