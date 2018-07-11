$(document).ready(function(){
    var seeMore = $('.player-application__nav--more');
    var appMenu = $('.player-application__menu');
    var menuBack = $('.player-application__menu--back');
    var openPlaylist = $('.player-application__bar--songs');
    var viewPlaylist = $('.player-application__playlist');
    var mainNav = $('.player-application__nav');
    var hidePlaylist = $('.player-application__playlist--hide--arrow');
    var backPlaylist = $('.player-application__playlist--back');
    var playButton = $('.player-application__content--buttons--play img');
    var songWave = $('.player-application__content--equalizer img');
    var songProgress = $('.player-application__content--music--timeline');
    
    
    $(seeMore).click(function(){
        $(appMenu).addClass('active');
    });
    $(menuBack).click(function(){
        $(appMenu).removeClass('active');
    });
    $(openPlaylist).click(function(){
        $(viewPlaylist).addClass('active');
        $(mainNav).addClass('hide');
    });
    $(hidePlaylist).click(function(){
        $(viewPlaylist).removeClass('active');
        $(mainNav).removeClass('hide');
    });
    $(backPlaylist).click(function(){
        $(viewPlaylist).removeClass('active');
        $(mainNav).removeClass('hide');
    });
    $(playButton).click(function() {
        if ($(this).attr("src") == "images/Play_inactive.png") {
            $(this).attr("src", "images/Play_active.png");
            $(songWave).addClass('play');
            $(songProgress).addClass('play');
        } else {
            $(this).attr("src", "images/Play_inactive.png").fadeIn('fast');
            $(songWave).removeClass('play');
            $(songProgress).removeClass('play');
            var currentWidth = $(songWave).width();
            var currentProgess = $(songProgress).width();
            console.log(currentWidth);
            $(songWave).css('width',currentWidth);
            $(songProgress).css('width',currentWidth);
        }
        
    });
    var timer = null, 
    interval = 1000,
    value = 0,
    minute = 0;
    $(playButton).click(function() {
      var clicks = $(this).data('clicks');
      if (clicks) {
        clearInterval(timer);
        timer = null;
      }
      else {
            if (timer !== null) return;
            timer = setInterval(function () {
                value = value+1;
                    if (value < 10){
                    $('.player-application__content--music--time').find('.value').text('0'+value);
                }
                else if(value >= 10 && value <= 59){
                    $('.player-application__content--music--time').find('.value').text(value);
                }
                else if(value >59){
                    timer = null
                    value = 0;
                    value = value +1;
                    minute = minute +1;
                    $('.player-application__content--music--time').find('.value').text('0'+value);
                    $('.minutes').text(minute);
                }
            }, interval); 
      }
      $(this).data("clicks", !clicks);
    });
    
});
