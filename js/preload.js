// Preload Logic
(function() {
	var support = { animations : Modernizr.cssanimations },
		container = $('body'),
		preloadContainer = $('#header'),
		animEndEventNames = { 'WebkitAnimation' : 'webkitAnimationEnd', 'OAnimation' : 'oAnimationEnd', 'msAnimation' : 'MSAnimationEnd', 'animation' : 'animationend' },
		// animation end event name
		animEndEventName = animEndEventNames[ Modernizr.prefixed( 'animation' ) ];

		// bigger screen is probably a faster connection, so load bigger images to keep the layout. 
		// Better way to do this?
		if ($(document).width() >= 1440) { // Images for big desktops and HD devices.
			$('.picture').html("<img class='derick-image' src='img/derick-black-large.jpg'>");
			var files = {
			  "files": [{
			    "source": "img/photography/bigger/sarah-1.jpg",
			    "type": "IMAGE",
			    "size": 73726
			  }, 
			  {
			    "source": "img/photography/bigger/anshonnica-1.jpg",
			    "type": "IMAGE",
			    "size": 85548
			  }, 
			  {
			    "source": "img/photography/bigger/leiann-1.jpg",
			    "type": "IMAGE",
			    "size": 132056
			  }, {
			    "source": "img/photography/bigger/mandible-1.jpg",
			    "type": "IMAGE",
			    "size": 154358
			  }, {
			    "source": "img/photography/bigger/anshonnica-2.jpg",
			    "type": "IMAGE",
			    "size": 85551
			  }, {
			    "source": "img/photography/bigger/aiko-1.jpg",
			    "type": "IMAGE",
			    "size": 115333
			  }, {
			    "source": "img/photography/bigger/aiko-2.jpg",
			    "type": "IMAGE",
			    "size": 173758
			  }, 
			  {
			    "source": "img/photography/bigger/jessica-1.jpg",
			    "type": "IMAGE",
			    "size": 116059
			  },
			  {
			    "source": "img/photography/bigger/alessandra-1.jpg",
			    "type": "IMAGE",
			    "size": 138784
			  },
			  {
			    "source": "img/photography/bigger/linda-1.jpg",
			    "type": "IMAGE",
			    "size": 125390
			  },
			  {
			    "source": "img/photography/bigger/marisol-1.jpg",
			    "type": "IMAGE",
			    "size": 152495
			  },
			  {
			    "source": "img/photography/bigger/andrea-1.jpg",
			    "type": "IMAGE",
			    "size": 110206
			  },
			  {
			    "source": "img/photography/bigger/leiann-4.jpg",
			    "hidden": true,
			    "type": "IMAGE",
			    "size": 67559
			  }]
			};
		} else { // smaller screen, load smaller images (Desktop and Tablets) ..
			var files = {
			  "files": [{
			    "source": "img/photography/sarah-1.jpg",
			    "type": "IMAGE",
			    "size": 73726
			  }, 
			  {
			    "source": "img/photography/anshonnica-1.jpg",
			    "type": "IMAGE",
			    "size": 85548
			  }, 
			  {
			    "source": "img/photography/leiann-1.jpg",
			    "type": "IMAGE",
			    "size": 132056
			  }, {
			    "source": "img/photography/mandible-1.jpg",
			    "type": "IMAGE",
			    "size": 154358
			  }, {
			    "source": "img/photography/anshonnica-2.jpg",
			    "type": "IMAGE",
			    "size": 85551
			  }, {
			    "source": "img/photography/aiko-1.jpg",
			    "type": "IMAGE",
			    "size": 115333
			  }, {
			    "source": "img/photography/aiko-2.jpg",
			    "type": "IMAGE",
			    "size": 173758
			  }, 
			  {
			    "source": "img/photography/jessica-1.jpg",
			    "type": "IMAGE",
			    "size": 116059
			  },
			  {
			    "source": "img/photography/alessandra-1.jpg",
			    "type": "IMAGE",
			    "size": 138784
			  },
			  {
			    "source": "img/photography/linda-1.jpg",
			    "type": "IMAGE",
			    "size": 125390
			  },
			  {
			    "source": "img/photography/marisol-1.jpg",
			    "type": "IMAGE",
			    "size": 152495
			  },
			  {
			    "source": "img/photography/andrea-1.jpg",
			    "type": "IMAGE",
			    "size": 110206
			  },
			  {
			    "source": "img/photography/leiann-4.jpg",
			    "hidden": true,
			    "type": "IMAGE",
			    "size": 67559
			  }]
			};
		}

		// eventlistener to stop scrolling during the initial preload.
		var noscroll = function () {
			window.scrollTo( 0, 0 );
		}

		// actually load something ..
		$.html5Loader({
			filesToLoad: files,
			onBeforeLoad: function () {
				console.log("Starting to load the files..");
				var onEndInitialAnimation = function() {
					if( support.animations ) {
						container.off(animEndEventName, onEndInitialAnimation);
					}
				};
				window.addEventListener('scroll', noscroll);
				container.addClass('loading');
				if( support.animations ) {
					container.on(animEndEventName, onEndInitialAnimation);
				}
				else {
					onEndInitialAnimation();
				}
			},
			onComplete: function () {
				console.log("The files are done loading..");
				console.log("Now adding the files to the dom..");

				var imageFiles = files["files"];
				var photos = $('.photos');

				for (var i = 0; i < imageFiles.length; i += 1) {
					var photo = $("<div class='photo'></div>");

					var fullDir = (function () {
						var source = imageFiles[i].source.split("/");
						if (source.length >= 4) {
							source[2] = "full";
						} else {
							source.splice(2, 0, "full"); // splice is a method that acts on the original array apparently.
						}
						return source.join("/");
					}());

					var link = $("<a href='" + fullDir + "'></a>");

					if (imageFiles[i].hidden) {
						var image = $("<img class='hidden-xs img-responsive'>").attr('src', imageFiles[i].source);
					} else {
						var image = $("<img class='img-responsive'>").attr('src', imageFiles[i].source);
					}

					link.append(image);
					photo.append(link);
					photos.append(photo);
				}
				window.removeEventListener('scroll', noscroll );
				container.removeClass('loading');
				container.addClass('loaded');
				console.log("finished adding the images to the dom.");
				container.addClass('layout-switch');
				$(document).trigger("imagesLoaded"); // images have been added. Now trigger packery.
			},
			onUpdate: function (percentage) {
				var decimalPercentage = parseFloat(percentage) / 100.0;
				console.log("Currently loaded:" + percentage + "%");
				// convert the percent into a decimal.
				var decimalPercentage = parseFloat(percentage) / 100.0;

				console.log("Currently loaded (decimal): " + decimalPercentage);
				$('.loading-percentage').html('<p><strong>' + percentage + '%</strong></p>');
			}
		});
})();