/*PUBLICATIONS*/
document.querySelectorAll('.slider').forEach(slider => {
    const slides = slider.querySelector('.slides');
    const totalSlides = slides.children.length;
    let index = 0;
    let startX = 0;

    // Свайп
    slides.addEventListener('touchstart', e => {
      startX = e.touches[0].clientX;
    });

    slides.addEventListener('touchend', e => {
      const endX = e.changedTouches[0].clientX;
      if (endX < startX - 50) nextSlide();
      if (endX > startX + 50) prevSlide();
    });

    // Клик
    slider.addEventListener('click', e => {
      const clickX = e.clientX;
      const sliderWidth = slider.offsetWidth;
      if (clickX < sliderWidth / 2) {
        prevSlide();
      } else {
        nextSlide();
      }
    });

    function updateSlider() {
      slides.style.transform = `translateX(-${index * 100}%)`;
    }

    function nextSlide() {
      if (index < totalSlides - 1) {
        index++;
        updateSlider();
      }
    }

    function prevSlide() {
      if (index > 0) {
        index--;
        updateSlider();
      }
    }
  });
