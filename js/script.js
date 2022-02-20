// burger menu
const burger = document.querySelector('.burger');
const navigation = document.querySelector('.navigation');
const navigationClose = document.querySelector('.navigation__close');

burger.addEventListener('click', () => {
    navigation.classList.add('navigation_active');
});

navigationClose.addEventListener('click', () => {
    navigation.classList.remove('navigation_active');
});

// background music
try {
    const mute = document.querySelector('.mute__checkbox');
    const audio = new Audio('audio/waterTower.mp3');

    const checkMute = () => {
        if (mute.checked) {
            audio.play().catch(() => {
                mute.checked = false;
            });
        } else {
            audio.pause();
        }
    }

    if (mute) {
        checkMute();
        mute.addEventListener('change', checkMute);
    }

} catch {
    console.log('There is no mute in this page');
}


try {
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
    const videos = document.querySelectorAll('video');
    sliderMain.on('slideChange', () => {
        for (let i = 0; i < videos.length; i++) {
            videos[i].pause();
        }
    });

    const pagination = document.querySelector('.pagination');
    const paginationArrow =  document.querySelector('.pagination__arrow');

    paginationArrow.addEventListener('click', () => {
        console.log(123);
        pagination.classList.toggle('pagination_active');
    });
} catch {
    console.log('There is no slider in this page');
}
