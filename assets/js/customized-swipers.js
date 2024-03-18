function initSwiper(selector) {
    return new Swiper(selector, {
        // loop: true,
        // 同步更新 active 状态
        observer: true,
        observeParents: true,
        // Enable mousewheel operation
        mousewheel: true,
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
                            if(video && index === 0) {
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
            }
        },
    })
}

document.querySelectorAll('.portfolio-swiper').forEach(
    function (swiperContainer) {
        initSwiper(swiperContainer);
    }
);

document.querySelectorAll('.nav-link').forEach(function(tab) {
    tab.addEventListener('click', function() {
        // 延迟一段时间以确保标签页切换完成
        setTimeout(function() {
            // 初始化当前激活的 Swiper 并播放视频
            let activeSwiper = document.querySelector(tab.getAttribute('href')).querySelector('.portfolio-swiper');
            if (activeSwiper) {
                initSwiper(activeSwiper);
            }
        }, 100);
    });
});