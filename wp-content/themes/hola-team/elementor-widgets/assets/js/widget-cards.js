/* JavaScript for enhanced card interactions - touch device support and scroll animations */
(function($){
    $(document).ready(function(){
        // Touch device support
        $(document).on('touchstart', '.hola-card', function(){
            $('.hola-card').not(this).removeClass('hola-card-active');
            $(this).toggleClass('hola-card-active');
        });
        
        // Function to handle scroll animations
        function animateOnScroll() {
            $('.hola-card').each(function(index) {
                var $card = $(this);
                var cardTop = $card.offset().top;
                var windowBottom = $(window).scrollTop() + $(window).height();
                
                // Check if card is in view (with a little buffer)
                if (windowBottom > cardTop + 100) {
                    // Add delay based on card index
                    var delay = index * 150; // 150ms delay between each card
                    
                    setTimeout(function() {
                        $card.addClass('animate-on-scroll');
                    }, delay);
                }
            });
        }
        
        // Run on page load
        animateOnScroll();
        
        // Run on scroll
        $(window).on('scroll', animateOnScroll);
        
        // Run on resize
        $(window).on('resize', animateOnScroll);
    });
})(jQuery);

