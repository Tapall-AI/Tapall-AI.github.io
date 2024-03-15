new Swiper ('.portfolio-swiper', {
    loop: true,
    // 同步更新 active 状态
    observer: true,
    observeParents: true,
    // 使得鼠标滚轮可以操控
    mousewheel: true,
    navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
    },
    pagination: {
        el: '.swiper-pagination',
        clickable: true,
    },

})