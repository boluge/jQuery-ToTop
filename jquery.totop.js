/*
 *  Project: Plugin ScrollToTop
 *  Description: Plugin qui ajoute au page un bouton de retour en haut de page
 *  Author: Stéphane
 *  License: 
 */
;(function ( $, window, undefined ) {

    var pluginName = 'totop',
        document = window.document,
        defaults = {
            id:'totop',
            scroll:'50',
            speedfade:'200',
            text:'top',
            speedscroll:'fast'
        };

    function Plugin( element, options ) {
        this.element = element;

        this.options = $.extend( {}, defaults, options) ;        
        this._defaults = defaults;
        this._name = pluginName;
        
        this.init();
    }
    Plugin.prototype.init = function (id,text,speed,scroll) {
        var id = this.options.id;
        var text = this.options.text;
        var speedfade = this.options.speedfade;
        var scroll = this.options.scroll;
        var speedscroll = this.options.speedscroll;

        $('body').prepend('<a class="totop" id="'+id+'" style="display:none;position:fixed;outline:none;" href="#top">'+text+'</a>');
        
        $(window).scroll(function(){
            var scroller = $(window).scrollTop();
            if(scroller>scroll){ $('#'+id).fadeIn(speedfade); }
            else { $('#'+id).fadeOut(speedfade); }
        });

        $('a[href=#top]').click(function(){
            $('html, body').animate({scrollTop:0}, speedscroll);
            return false;
        });

    };

    $.fn[pluginName] = function ( options ) {
        return this.each(function () {
            if (!$.data(this, 'plugin_' + pluginName)) {
                $.data(this, 'plugin_' + pluginName, new Plugin( this, options ));
            }
        });
    };

}(jQuery, window));