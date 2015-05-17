(function () {

	Parse.initialize("iU9PfbI5etJqvQZellnyXWO7ZNh0DK7QKEjzMlRS", "FYKpf4feoesqJRIE8Z8CtLha1TeZbX53l40NNKgZ");
	var user = new Parse.User();
	user.set("username", "my name");
	user.set("password", "my pass");
	user.set("email", "email@example.com");
	  
	// other fields can be set just like with Parse.Object
	user.set("phone", "650-555-0000");
	  
	user.signUp(null, {
	  success: function(user) {
	  	console.log(user);
	    // Hooray! Let them use the app now.
	  },
	  error: function(user, error) {
	  	console.log(user);
	  	console.log(error);
	    // Show the error message somewhere and let the user try again.
	    alert("Error: " + error.code + " " + error.message);
	  }
	});

	var AppRouter = Backbone.Router.extend({

		routes: {
			'': 'home',
			'write': 'write',
		},

		home: function () {
			console.log("Home route!");
		},

		write: function () {
			console.log("Write route!");
		}

	});

	var router = new AppRouter();
	Backbone.history.start();

}());