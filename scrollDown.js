
//scroll down plugin
jQuery.fn.scrollDown = function () {
    this.click(function () {
        
        var $this                   = jQuery( this ),
            $element                = jQuery( 'body' ),
            target                  = $this.attr( 'data-target' ),
            reduceHeightAttr        = $this.attr( 'data-reduce-offset' ),
            animationDuration       = $this.attr( 'data-animation-duration' ),
            //elementOffset
            targetOffset            = jQuery( target ).offset().top,
            //settingDefaultValue
            animationDurationValue  = ( typeof animationDuration != 'undefined' ) ? parseInt( animationDuration ) : 5000,
            //calculatingActualOffset
            actualOffset            = targetOffset - reduceHeight( reduceHeightAttr );
            
            function reduceHeight( param ){
                var reduceHeight;
                if( jQuery( param ).length > 0  ){
                    reduceHeight = jQuery( param ).outerHeight();
                    return reduceHeight;
                }else if( jQuery.isNumeric( param ) ){
                    return parseInt( param );
                }
                return 0;
            }
            
            //scrollAnimation 
            $element.stop().animate({
                scrollTop: actualOffset
            }, animationDurationValue );
            
    });
}

jQuery(document).ready(function () {
    $("#fs-down-arrow").scrollDown();
});