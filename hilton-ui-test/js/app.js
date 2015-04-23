(function () {
	var Rooms,
		Room,
		$roomsList = $('.js-rooms-list');

	/* initalRooms: Number - The number of rooms to start off with. */
	Rooms = function (initalRooms) {
		var self = this,
			roomTemplate = $('#room-template').html().trim(), // room template html.
			rooms = []; // an internal array that contains all of the rooms.

		/* index: Number - the index of the rooms in the rooms array */
		self.disableRooms = function (index) {
			var i, len;

			for (i = index, len = rooms.length; i < len; i += 1) {
				rooms[i].enabled = false;
				rooms[i].update();
			}
		};
		
		// called when a checkbox is enabled.
		self.enableRooms = function (index) {

			console.log("Passed in index: ", index);

			var i, len;

			for (i = index, len = 0; i >= len; i -= 1) {

				console.log("i: " + i);
				console.log("len: " + len);
				console.log("Room: ", rooms[i]);

				rooms[i].enabled = true;
				rooms[i].update();
			}
		};

		self.addRoom = function () {
			var roomsLength = rooms.length,
				$newRoomDomNode = $(roomTemplate),
				newRoom = new Room($newRoomDomNode, roomsLength);

			rooms.push(newRoom);
			$roomsList.append($newRoomDomNode);

			// TODO: Better way to do this?
			if (rooms.length === 1) { // hide the checkbox and enable the first room by default.
				rooms[0].enabled = true;
				rooms[0].update();
			}
		};

		self.removeRoom = function () {
			$roomsList.children().last().remove();
		};

		if (initalRooms) {

			(function () {
				
				var i = 0;
				for (i; i < initalRooms; i += 1) {
					self.addRoom();
				}

			}());
		}
	};

	/*
	 * element: DomNode - the element that this room is associated with.
	 * roomNumber: Number - The index for this room number.
	 */
	Room = function ($element, roomNumber) {

		console.log("roomNumber passed in Room", roomNumber);

		var self = this;
		self.$element = $element;
		self.enabled = false; // rooms start off disabled.

		// Numbers
		self.adults = undefined;
		self.children = undefined;
		self.roomNumber = undefined;

		/* The number of the room which is most likely it's array index + 1. */
		var setRoomNumber = function (number) {
			// update the object and update the dom.
			self.roomNumber = number;
			self.$element.find('.js-room-number').html(number + 1);
		};

		var setDataIndex = function (number) {
			self.$element.data("room-index", number);
		}

		// possible methods in the future in case we actually need these numbers.
		var setAdultsNumber = function (number) {};
		var setChildrenNumber = function (number) {};

		setRoomNumber(roomNumber);
		setDataIndex(roomNumber);

		// updates the dom of the room object depending on if it is enabled or not.
		self.update = function () {

			if ( ! self.enabled) { // if this room is disabled
				self.$element.addClass('disabled'); // adding dem' styles.
				self.$element.find('select').prop('disabled', 'disabled');
				self.$element.find(".js-room-checkbox").prop('checked', false);

				// reset the options that were selected in the select field
				// by selecting the first option?
				self.$element.find('select').each(function () {
					var $firstOption = $(this).children().first();
					$firstOption.prop('selected', 'selected');
				});

			} else { // if this room is enabled.

				self.$element.removeClass('disabled');
				// make sure the select elements can be selected.
				self.$element.find('select').prop('disabled', false);
				self.$element.find(".js-room-checkbox").prop('checked', true);

			}

		};

		self.update();
	};

	var rooms = new Rooms(4);

	$roomsList.on("change", ".js-room-checkbox", function (event) {

		// TODO: Better and cleaner way to get that data value?
		var clickedRoomIndex = $(this).parent().parent().parent().data('room-index');

		if ( $(this).prop('checked') ) {
			rooms.enableRooms(clickedRoomIndex);
		} else {
			rooms.disableRooms(clickedRoomIndex);
		}
	});

	$('.js-add-room').click(function () {
		rooms.addRoom();
	});

	$('.js-remove-room').click(function () {
		rooms.removeRoom();
	});

}());