(function($) {
    $.fn.highlight = function(options) {

        var defaults = {
            'color': "red",
            'background-color': "black"
        };

        var settings = $.extend({}, defaults, options);

        return this.css({
            'color': settings.color,
            "background-color": settings['background-color']
        });
    }
})(jQuery)