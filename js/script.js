const sliderThumbs = new Swiper('.slider-thumbs', {
    loop: true,
    // loopedSlides: 4,
    spaceBetween: 20,
    slidesPerView: 3,
    centeredSlides: true,
});

sliderThumbs.on('click', (swiper) => {
    swiper.slideTo(swiper.clickedIndex);
})

const sliderMain = new Swiper('.slider-main', {
    loop: true,
    // loopedSlides: 4,
    thumbs: {
        swiper: sliderThumbs,
    },
});

// sliderThumbs.controller.control = sliderMain;
// sliderMain.controller.control = sliderThumbs;