document.querySelectorAll('.question').forEach(item => {
    item.addEventListener('click', () => {
        const answer = item.nextElementSibling;
        const isVisible = answer.style.display === 'block';
        document.querySelectorAll('.answer').forEach(a => a.style.display = 'none');
        answer.style.display = isVisible ? 'none' : 'block';
    });
});
