document.addEventListener("DOMContentLoaded", function() {
    const progressBar = document.querySelector('.progress-bar .progress-fill');
    if (progressBar) {
        progressBar.style.animation = 'progress 2s ease-in-out infinite';
    }
});
