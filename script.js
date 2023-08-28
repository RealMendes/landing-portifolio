const slider = document.querySelector('.slider');
let count = 0;

function nextSlide() {
    count++;
    if (count >= slider.children.length) {
        count = 0;
    }
    updateSliderPosition();
}

function updateSliderPosition() {
    slider.style.transform = `translateX(-${count * 100}%)`;
}

setInterval(nextSlide, 5000); // Auto slide every 5 seconds
