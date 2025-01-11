// JavaScript to handle toggle visibility of answers with smooth transition
document.querySelectorAll('.question').forEach(function(question) {
    question.addEventListener('click', function() {
        const answer = question.nextElementSibling;
        
        // Hide all other answers
        document.querySelectorAll('.answer').forEach(function(otherAnswer) {
            if (otherAnswer !== answer) {
                otherAnswer.classList.remove('show');
            }
        });

        // Toggle the selected answer visibility
        if (answer.classList.contains('show')) {
            answer.classList.remove('show');
        } else {
            answer.classList.add('show');
        }
    });
});
