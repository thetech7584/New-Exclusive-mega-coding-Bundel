const slider = document.querySelector('.testimonial-slider');
const prevBtn = document.getElementById('prevBtn');
const nextBtn = document.getElementById('nextBtn');

let currentIndex = 0;
const totalReviews = document.querySelectorAll('.testimonial-card').length;

function nextReview() {
    if (currentIndex < totalReviews - 1) {
        currentIndex++;
    } else {
        currentIndex = 0;
    }
    updateSlider();
}

function prevReview() {
    if (currentIndex > 0) {
        currentIndex--;
    } else {
        currentIndex = totalReviews - 1;
    }
    updateSlider();
}

function updateSlider() {
    const newPosition = -currentIndex * 100 + "%";
    slider.style.transform = `translateX(${newPosition})`;
}

// Auto Slide Every 5 Seconds
setInterval(nextReview, 5000);

// Manual Controls
nextBtn.addEventListener('click', nextReview);
prevBtn.addEventListener('click', prevReview);
