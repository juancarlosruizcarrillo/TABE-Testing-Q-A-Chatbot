// JavaScript to handle toggle visibility of answers with smooth animation
document.querySelectorAll('.question').forEach(function(question) {
    question.addEventListener('click', function() {
        const answer = question.nextElementSibling;
        
        // Toggle the answer visibility
        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
        } else {
            answer.classList.add('show');
        }
    });
});
