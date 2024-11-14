const gallery = document.querySelector('.gallery');
const images = document.querySelectorAll('.gallery img');
let index = 0;

function showImage() {
    gallery.style.transform = `translateX(${-index * 100}%)`;
}

function nextImage() {
    index = (index + 1) % images.length;
    showImage();
}

function prevImage() {
    index = (index - 1 + images.length) % images.length;
    showImage();
}

// Open Modal on Image Click
images.forEach((img, i) => {
    img.addEventListener('click', () => {
        openModal(img.src);
    });
});

function openModal(src) {
    const modal = document.getElementById('modal');
    const modalImage = document.getElementById('modalImage');
    modal.style.display = 'flex';
    modalImage.src = src;
}

// Close Modal
function closeModal() {
    const modal = document.getElementById('modal');
    modal.style.display = 'none';
}
