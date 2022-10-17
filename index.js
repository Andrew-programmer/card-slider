const slides = document.querySelectorAll(".slide");

slides.forEach(slide => {
    slide.onclick = (event) => {
        const target = event.currentTarget;
        const classList = target.classList;
        if (!classList.contains('active')){
            clearActiveSlides(slides);
            event.currentTarget.classList.add('active');
            return;
        }
        clearActiveSlides(slides);
    }
})

function clearActiveSlides(slides) {
    slides.forEach(slide => {
        slide.classList.remove('active')
    })
}
