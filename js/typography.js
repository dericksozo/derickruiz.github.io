(function () {
	var links = document.getElementsByClassName('link');
	[].forEach.call(links, function (element, index) {
		element.setAttribute('style', 'text-decoration: underline');
    });

    SmartUnderline.init();

	Hyphenator_Loader.init({
		"en": "automatically",
	}, "/js/vendor/Hyphenator/Hyphenator.js");

}());