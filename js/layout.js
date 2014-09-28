var setPhotosMargin = function () {
   // Make sure that the .photos div is always directly below the .first div based on the height.
  var height = $('.first').height();
  var screenHeight = $(window).height();
  var toSetHeight = screenHeight - 25;
  if ( height >= screenHeight) {
    $('.photos').css('margin-top', toSetHeight + 'px');
  } else {
    $('.photos').css('margin-top', height + 'px');
  }
};

$(window).load(function () {

	var $container = $('.photos').packery({
		"itemSelector": '.photo',
		"gutter": 0
	});

	/* Check if mobile */
	/* var isMobile = {
	    Android: function() {
	        return navigator.userAgent.match(/Android/i);
	    },
	    BlackBerry: function() {
	        return navigator.userAgent.match(/BlackBerry/i);
	    },
	    iOS: function() {
	        return navigator.userAgent.match(/iPhone|iPad|iPod/i);
	    },
	    Opera: function() {
	        return navigator.userAgent.match(/Opera Mini/i);
	    },
	    Windows: function() {
	        return navigator.userAgent.match(/IEMobile/i) || navigator.userAgent.match(/WPDesktop/i);
	    },
	    any: function() {
	        return (isMobile.Android() || isMobile.BlackBerry() || isMobile.iOS() || isMobile.Opera() || isMobile.Windows());
	    }
	}; */

	/* var loadVideo = function () {

      var $container = $('#videoTop');
      var $video = $container.find('video');

      var mp4 = '<source src="video/linda.mp4" type="video/mp4">';
      var ogg = '<source src="video/linda.mp4" type="video/mp4">';
      var webm = '<source src="video/linda.mp4" type="video/mp4">';

      if (!$video.length && Modernizr.video) {
        if ( ! isMobile.any()) { // only set the video background if we're not on mobile.
          if (Modernizr.video.mp4) {
            appendVideoElement($container, mp4);
            removeBackgroundImage($('.misphis-wrap')); // remove the background image if you have managed to set the video ..
          } else if (Modernizr.video.webm) {
            appendVideoElement($container, webm);
            removeBackgroundImage($('.misphis-wrap'));
        } else if (Modernizr.video.ogg) {
            appendVideoElement($container, ogg);
            removeBackgroundImage($('.misphis-wrap'));
        } else {
          // do nothing. It'll already be loading the background image via css so no performance drops.
        }
       }
      }
    } */

/* var appendVideoElement = function (container, source) {
  var video = $('<video id="videoBG" preload="auto" autoplay="" loop="loop" muted="">');
  video.append(source);
  container.append(video);
};

var removeBackgroundImage = function (el) {
  el.css('background', 'none');
};

	loadVideo(); */

	$container.imagesLoaded(function () {
		$container.packery();
		$('.photos').magnificPopup({
    	delegate: 'a',
    	type: 'image',
    	tLoading: '',
    	mainClass: 'mfp-with-zoom',
    	verticalFit: true,
    	midClick: true,
        closeMarkup: '',
        closeOnContentClick: true,
    	gallery: {
      		enabled: true,
      		navigateByImgClick: false,
            arrowMarkup: '<button title="%title%" class="paginate %dir%"><i></i><i></i></button>',
            tCounter: '',
      		preload: [0,1] // Will preload 0 - before current, and 1 after the current image
    	},
    	image: {
      		tError: '<a href="%url%">The image #%curr%</a> could not be loaded.'
    	},
    	zoom: {
    		enabled: true,
    		duration: 300,
    		easing: 'ease-in-out'
    	}
  });
	});

  /* $(window).scroll(function (e) {
    var scrollTopValue = $(document).scrollTop();
    if (scrollTopValue >= 800) {
      $('.first').css('z-index', '-9999');
    } else if ( scrollTopValue < 800) {
      $('.first').css('z-index', '-9997');
    }
  }); */

  setPhotosMargin();
});

(function($,sr){

  // debouncing function from John Hann
  // http://unscriptable.com/index.php/2009/03/20/debouncing-javascript-methods/
  var debounce = function (func, threshold, execAsap) {
      var timeout;

      return function debounced () {
          var obj = this, args = arguments;
          function delayed () {
              if (!execAsap)
                  func.apply(obj, args);
              timeout = null;
          };

          if (timeout)
              clearTimeout(timeout);
          else if (execAsap)
              func.apply(obj, args);

          timeout = setTimeout(delayed, threshold || 100);
      };
  }
  // smartresize 
  jQuery.fn[sr] = function(fn){  return fn ? this.bind('resize', debounce(fn)) : this.trigger(sr); };

})(jQuery,'smartresize');

// Paul Irish's smart resize function.
$(window).smartresize(function(){
  setPhotosMargin();
});