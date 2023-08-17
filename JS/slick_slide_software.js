document.addEventListener('DOMContentLoaded', function () {
    var sliderContainer = document.querySelector('.slider-container');

    // 이미지 슬라이더 생성
    if (sliderContainer) {
        var slider = new SlickSlider(sliderContainer);
    }
});

// 슬라이더 클래스 정의
function SlickSlider(container) {
    this.container = container;
    this.init();
}

SlickSlider.prototype.init = function () {
    this.container.classList.add('slick-initialized');
    this.container.classList.add('slick-slider');
    this.configureSlider();
};

SlickSlider.prototype.configureSlider = function () {
    var self = this;
    this.slider = new SlickCarousel(self.container, {
        autoplay: true,
        autoplaySpeed: 2000,
        rtl: true
    });
};