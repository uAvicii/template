/*scrollsidebar*/
(function($){$.fn.fix = function(options){var defaults = {float : 'left',minStatue : false,skin : 'blue',durationTime : 1000};var options = $.extend(defaults, options);this.each(function(){var thisBox = $(this),closeBtn = thisBox.find('.close_btn' ),show_btn = thisBox.find('.show_btn' ),sideContent = thisBox.find('.side_content'),sideList = thisBox.find('.side_list');var defaultTop = thisBox.offset().top;thisBox.css(options.float, 0);	if(options.minStatue){$(".show_btn").css("float", options.float);sideContent.css({'width':0,'display':'none'});show_btn.css('width', 37);}$(window).bind("scroll",function(){var offsetTop = defaultTop + $(window).scrollTop() + "px";thisBox.animate({top: offsetTop},{duration: options.durationTime,queue: false});});closeBtn.bind("click",function(){sideContent.animate({width: '0px'},"fast");show_btn.stop(true, true).delay(300).animate({ width: '37px'},"fast");});show_btn.click(function() {$(this).animate({width: '0px','display':'none'},"fast");sideContent.stop(true, true).delay(200).animate({ width: '166px'},"fast");});});};})(jQuery);
function getCookie(name) {
    var arg = name + "=";
    var alen = arg.length;
    var clen = document.cookie.length;
    var i = 0;
    while (i < clen) {
        var j = i + alen;
        if (document.cookie.substring(i, j) == arg) return getCookieVal(j);
        i = document.cookie.indexOf(" ", i) + 1;
        if (i == 0) break;
    }
    return null;
}
function setCookie(name, value) {
    var expDate = new Date();
    var argv = setCookie.arguments;
    var argc = setCookie.arguments.length;
    var expires = (argc > 2) ? argv[2] : null;
    var path = (argc > 3) ? argv[3] : null;
    var domain = (argc > 4) ? argv[4] : null;
    var secure = (argc > 5) ? argv[5] : false;
    if (expires != null) {
        expDate.setTime(expDate.getTime() + expires);
    }
    document.cookie = name + "=" + escape(value) + ((expires == null) ? "": ("; expires=" + expDate.toUTCString())) + ((path == null) ? "": ("; path=" + path)) + ((domain == null) ? "": ("; domain=" + domain)) + ((secure == true) ? "; secure": "");
}
function getCookieVal(offset) {
    var endstr = document.cookie.indexOf(";", offset);
    if (endstr == -1) endstr = document.cookie.length;
    return unescape(document.cookie.substring(offset, endstr));
}

var firstshow = 0;
var cfstatshowcookie = getCookie('easyiit_stats');
if (cfstatshowcookie != 1) {
    a = new Date();
    h = a.getHours();
    m = a.getMinutes();
    s = a.getSeconds();
    sparetime = 1000 * 60 * 60 * 24 * 1 - (h * 3600 + m * 60 + s) * 1000 - 1;
    setCookie('easyiit_stats', 1, sparetime, '/');
    firstshow = 1;
}
if (!navigator.cookieEnabled) {
    firstshow = 0;
}
var referrer = escape(document.referrer);
var currweb = escape(location.href);
var screenwidth = screen.width;
var screenheight = screen.height;
var screencolordepth = screen.colorDepth;