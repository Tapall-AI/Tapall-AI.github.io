function initSwiper(selector) {
    return new Swiper(selector, {
        // loop: true,
        // 同步更新 active 状态
        observer: true,
        observeParents: true,
        // Enable mousewheel operation? NO
        mousewheel: false,
        // Set number of slides per view according to their width
        slidesPerView: 'auto',
        navigation: {
            nextEl: '.swiper-button-next',
            prevEl: '.swiper-button-prev',
        },
        pagination: {
            el: '.swiper-pagination',
            clickable: true,
        },
        on: {
            afterInit: function () {
                if (this.slides) {
                    this.slides.forEach(
                        function (slide, index) {
                            let video = slide.querySelector('.portfolio-video');
                            if (video && (index === 0 || index === 1)) {
                                video.play();
                            }
                        }
                    )
                }
            },
            slideChange: function () {
                // pause all videos
                this.slides.forEach(
                    function (slide) {
                        let video = slide.querySelector('.portfolio-video');
                        if (video) {
                            video.pause();
                        }
                    }
                );
                let currentVideo = this.slides[this.activeIndex].querySelector('.portfolio-video');
                currentVideo.currentTime = 0;
                currentVideo.play();
                let nextVideo = this.slides[this.activeIndex + 1].querySelector('.portfolio-video');
                if(nextVideo) {
                    nextVideo.currentTime = 0;
                    nextVideo.play();
                }
            }
        },
    })
}

document.querySelectorAll('.portfolio-swiper').forEach(
    function (swiperContainer) {
        initSwiper(swiperContainer);
    }
);

// document.querySelectorAll('.nav-link').forEach(function (tab) {
//     tab.addEventListener('click', function () {
//         // 延迟一段时间以确保标签页切换完成
//         setTimeout(function () {
//             let activeSwiperEle = document.querySelector(tab.getAttribute('href')).querySelector('.portfolio-swiper');
//             if (activeSwiperEle && activeSwiperEle.swiper) {
//                 let currentSwiper = activeSwiperEle.swiper;
//                 let video = currentSwiper.slides[currentSwiper.activeIndex].querySelector('.portfolio-video');
//                 if (video) {
//                     video.currentTime = 0;
//                     video.play();
//                 }
//             }
//         }, 50);
//     });
// });