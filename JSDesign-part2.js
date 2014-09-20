var app = {};
app.services = {};

function EventService() {
	this.addEvent = function(eventName) {
		console.log('you added an event:' + eventName)
	}
}
var es = new EventService();
app.services.EventService = es;
// es.addEvent('NFJS AUS');

app.services.UserService = (function (evService) {
	var username;
	var hiddenVarOne;
	function login(user, password) {
		// ... do stuff to login user
		username = user;
		evService.addEvent('keynote');
		app.services.EventService.addEvent('JS Patterns')
	}
	function logoutInternal() {
		// .. do some stuff to logout user
		username = null;
	}
	return {
		login: login,
		logout: logoutInternal,
		user: username
	}
})(es);

app.services.UserService.login('pratik', 'mypassword');
// app.services.UserService.logout();
