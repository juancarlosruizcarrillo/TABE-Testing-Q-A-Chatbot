document.addEventListener('DOMContentLoaded', function() {
    const faqItems = document.querySelectorAll('.faq-item');
    
    faqItems.forEach(function(faqItem) {
        const question = faqItem.querySelector('.question');
        const answer = faqItem.querySelector('.answer');

        // Initially hide the answer
        answer.style.display = 'none';

        // Add click event listener to the question
        question.addEventListener('click', function() {
            // Toggle the answer display
            if (answer.style.display === 'none') {
                answer.style.display = 'block';  // Show answer
            } else {
                answer.style.display = 'none';  // Hide answer
            }
        });
    });
});
