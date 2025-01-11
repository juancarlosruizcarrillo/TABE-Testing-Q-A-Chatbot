// Toggle FAQ answers
function toggleAnswer(element) {
    const answer = element.nextElementSibling;

    // Hide or show the answer
    if (answer.style.display === "block") {
        answer.style.display = "none";
    } else {
        answer.style.display = "block";
    }
}
