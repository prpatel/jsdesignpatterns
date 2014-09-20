var app = app || {};
app.services = app.services || {};

app.utility = (function () {

	return {
		isNotString: function(str) {
			console.log('you have called isNotString with the arg:' + str)
		},
		isString: function(str) {
			console.log('you have called isString with the arg:' + str)
		}
	}

})();

// app.utility.isNotString('1234');
// app.utility.isString('543231');
// -> app/services/UserService.js

app.services.UserService = (function () {
	var username = 'empty';
	var hiddenVarOne;
	function login(user, password) {
		// ... do stuff to login user
		console.log('LOGGING IN USER: ' + user + ' with password: ' + password)
		username = user;
	}
	function logoutInternal() {
		username = null;
	}
	function getUsername() {
		return username;
	}
	return {
		login: login,
		logout: logoutInternal,
		getUsername: getUsername,
		uname : username
	};
})();

app.services.UserService.login('pratik', 'mypassword');
console.log('The logged in user is: '
	+ app.services.UserService.getUsername());
console.log('The logged in user is: '
	+ app.services.UserService.uname);

// app.services.UserService.getCity = function() {
// 	console.log('YOU GOT THE CITY')
// }
// app.services.UserService.getCity();

// console.log('city is: '
// 	+ app.services.UserService.city);


// app.services.UserService.logout();
// console.log('The logged in user is: '
// 	+ app.services.UserService.getUsername());
// console.log('The logged in user is: '
// 	+ app.services.UserService.uname);

// app.services.UserService.uname = 'Jay Z';
// console.log('The logged in user is: '
// 	+ app.services.UserService.getUsername());
// console.log('The logged in user is: '
// 	+ app.services.UserService.uname);

// //app.services.UserService.login('neal', 'password');
// // console.log('The logged in user is: '
// // 	+ app.services.UserService.getUsername());

// app.services.UserService.logout();
