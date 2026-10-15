( function( $ ) {
    'use strict';

    // No heavy JS required — this file exists for potential carousel or interactions.
    $( function() {
        // Simple ARIA enhancement: add aria-label for rating
        $( '.hola-review-item' ).each( function() {
            var $item = $( this );
            var ratingText = $item.find( '.hola-review-rating' ).text().trim();
            if ( ratingText.length ) {
                $item.find( '.hola-review-rating' ).attr( 'aria-label', 'Rating: ' + ratingText );
            }
        } );
    } );

} )( jQuery );
