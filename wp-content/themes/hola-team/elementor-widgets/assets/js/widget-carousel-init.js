(function($){
    'use strict';

    function initSwiper($el){
        if ( ! window.Swiper ) return;

        // avoid double init
        if ( $el.data('swiper-initialized') ) return;

        var slidesCount = $el.data('items-count') || $el.find('.swiper-slide').length;

        var config = {
            slidesPerView: 3,
            spaceBetween: 24,
            centeredSlides: true,
            loop: true,
            navigation: {
                nextEl: $el.find('.swiper-button-next')[0] || null,
                prevEl: $el.find('.swiper-button-prev')[0] || null,
            },
            breakpoints: {
                0: {
                    slidesPerView: 1,
                    centeredSlides: false,
                    loop: false,
                    spaceBetween: 20,
                },
                769: {
                    slidesPerView: 3,
                    centeredSlides: true,
                    loop: true,
                    spaceBetween: 24,
                }
            },
            on: {
                slideChangeTransitionStart: function() {
                    // Update center slide classes when slide changes
                    updateCenterSlide($el, this);
                },
                init: function() {
                    // Update center slide classes when initialized
                    updateCenterSlide($el, this);
                }
            }
        };

        // Ensure element exists before initializing Swiper
        if ($el.length && $el[0]) {
            try {
                var swiper = new Swiper($el[0], config);
                $el.data('swiper-instance', swiper);
                $el.data('swiper-initialized', true);
            } catch (e) {
                console.error('Swiper init failed', e);
            }
        } else {
            console.error('Swiper container element not found');
        }
    }
    
    function updateCenterSlide($el, swiper) {
        // Remove center classes from all slides
        $el.find('.swiper-slide').removeClass('is-center is-prev is-next');
        
        // Get active slide and add appropriate classes
        var activeIndex = swiper.activeIndex;
        var $slides = $el.find('.swiper-slide');
        
        // Add center class to active slide
        $($slides[activeIndex]).addClass('is-center');
        
        // Add prev/next classes to adjacent slides
        var prevIndex = (activeIndex - 1 + $slides.length) % $slides.length;
        var nextIndex = (activeIndex + 1) % $slides.length;
        
        if ($slides[prevIndex]) {
            $($slides[prevIndex]).addClass('is-prev');
        }
        if ($slides[nextIndex]) {
            $($slides[nextIndex]).addClass('is-next');
        }
    }

    $(document).ready(function(){
        $('.hola-carousel.swiper-container').each(function(){
            var $el = $(this);
            initSwiper($el);
        });

        // Re-init on window resize to ensure correct breakpoints
        var resizeTimer;
        $(window).on('resize', function(){
            clearTimeout(resizeTimer);
            resizeTimer = setTimeout(function(){
                $('.hola-carousel.swiper-container').each(function(){
                    var $el = $(this);
                    var inst = $el.data('swiper-instance');
                    if ( inst && typeof inst.destroy === 'function' ) {
                        inst.destroy(true, true);
                        $el.removeData('swiper-instance');
                        $el.removeData('swiper-initialized');
                    }
                    initSwiper($el);
                });
            }, 150);
        });
    });
})(jQuery);
