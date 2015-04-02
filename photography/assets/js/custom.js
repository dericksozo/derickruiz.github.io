(function () {
	// returns a url(); string with the passed url.
	var createUrl = function (url) {
		var string = "url(" + url + ")";
		return string;
	};
	function getCurrentSrc(element, cb){
	    var getSrc;
	    if(!window.HTMLPictureElement){
	        if(window.respimage){
	            respimage({elements: [element]});
	        } else if(window.picturefill){
	            picturefill({elements: [element]});
	        }
	        cb(element.src);
	        return;
	    }

	    getSrc = function(){
	        element.removeEventListener('load', getSrc);
	        element.removeEventListener('error', getSrc);
	        cb(element.currentSrc);
	    };

	    element.addEventListener('load', getSrc);
	    element.addEventListener('error', getSrc);
	    if(element.complete){
	        getSrc();
	    }
	}

	var cards = document.getElementsByClassName('card');
	for (var i = 0; i < cards.length; i += 1) {
		var card = cards[i];
		var imageContainer = card.querySelector('.image');
		var image = imageContainer.querySelector('picture img');
		var picture = imageContainer.querySelector('picture');

		getCurrentSrc(image, function (elementSource) {
			imageContainer.style.backgroundImage = createUrl(elementSource);
			imageContainer.style.backgroundPosition = "center center";
			imageContainer.style.backgroundSize = "cover";
			image.style.display = "none";
		});
	}
}());