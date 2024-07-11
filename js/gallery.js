window.addEventListener('DOMContentLoaded', () => {
    const gallery = document.querySelector('.gallery');
    const galleryItems = gallery.querySelectorAll('.gallery-item');
    const modal = document.getElementById('galleryModal');
    const modalImg = document.getElementById("modalImage");
    const span = document.getElementsByClassName("close")[0];
    const prevBtn = document.getElementsByClassName("prev")[0];
    const nextBtn = document.getElementsByClassName("next")[0];

    let currentImageIndex = 0;

    // Open modal with clicked image
    galleryItems.forEach((item, index) => {
        item.addEventListener('click', () => {
            modal.style.display = "block";
            modalImg.src = item.querySelector('img').src;
            modalImg.alt = item.querySelector('img').alt;
            currentImageIndex = index;
        });
    });

    // Close modal
    span.addEventListener('click', () => {
        modal.style.display = "none";
    });

    // Navigate through images
    prevBtn.addEventListener('click', () => {
        currentImageIndex--;
        if (currentImageIndex < 0) {
            currentImageIndex = galleryItems.length - 1;
        }
        modalImg.src = galleryItems[currentImageIndex].querySelector('img').src;
        modalImg.alt = galleryItems[currentImageIndex].querySelector('img').alt;
    });

    nextBtn.addEventListener('click', () => {
        currentImageIndex++;
        if (currentImageIndex >= galleryItems.length) {
            currentImageIndex = 0;
        }
        modalImg.src = galleryItems[currentImageIndex].querySelector('img').src;
        modalImg.alt = galleryItems[currentImageIndex].querySelector('img').alt;
    });

    // Close modal by clicking outside the modal content
    window.addEventListener('click', (event) => {
        if (event.target === modal) {
            modal.style.display = "none";
        }
    });
});
