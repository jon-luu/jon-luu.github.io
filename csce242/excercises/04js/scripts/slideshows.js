//when the right arrow is clicked switch which image is showing
document.getElementById("hero-arrow-right").onclick = () => {
    e.preventDefault();
    const currentImage = document.querySelector(".hero-image.show");
    const nextImage = currentImage.nextElementSibling || document.querySelector(".hero-image:first-child");
    currentImage.classList.remove("show");
    nextImage.classList.add("show");
}