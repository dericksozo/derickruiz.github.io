(function () {

	// better way to refer to these? Add js-* selectors?
	// Will these even work cross-browser?
	var iPhone = document.querySelector('.device.iphone'),
		iPad = document.querySelector('.device.ipad'),
		browser = document.querySelector('.device.browser'),
		seeMoreButtons = document.querySelectorAll('.js-see-more-devices'),
		showDevices;

	showDevices = function (e) {
		e = e || window.event;
		var target = e.target || e.srcElement;
		e.preventDefault();

		// I can probably add classes here instead of adjusting the style directly?
		iPad.style.display = 'block';
		browser.style.display = 'block';

		target.removeEventListener('click', showDevices, false);

		[].forEach.call(seeMoreButtons, function (el) {
			el.style.display = 'none';
		});
	};

	[].forEach.call(seeMoreButtons, function (el) {
		console.log(el);
		el.addEventListener('click', showDevices);
	});
	
	// seeMoreButton.addEventListener('click', showDevices);

}());