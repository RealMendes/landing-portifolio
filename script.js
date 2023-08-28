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

const btn = document.querySelector('button');
const modal = document.querySelector('dialog');
const closeBtn = document.querySelector('.close');
const confirmationMessage = document.getElementById('confirmation-message');

btn.onclick = function() {
    modal.showModal();
    confirmationMessage.style.display = "none"; // Oculta a mensagem ao abrir o modal
}

closeBtn.onclick = function() {
    modal.close();
    confirmationMessage.style.display = "none"; // Oculta a mensagem ao fechar o modal
}

document.getElementById('contact-form').addEventListener('submit', function(event) {
    event.preventDefault();

    const formData = new FormData(this);

    fetch("https://formsubmit.co/ajax/leehhoor@gmail.com", {
        method: "POST",
        headers: {
            'Accept': 'application/json',
        },
        body: formData
    })
    .then(response => response.json())
    .then(data => {
        console.log(data);
        if (data.success === "true") {
            confirmationMessage.style.display = "block";
        }
    })
    .catch(error => console.error(error));
});
