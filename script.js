function toggleAnswer(event) {
    const answer = event.target.nextElementSibling; // Get the next sibling (the answer)
    if (answer.style.display === "none" || answer.style.display === "") {
        answer.style.display = "block"; // Show the answer
    } else {
        answer.style.display = "none"; // Hide the answer
    }
}
