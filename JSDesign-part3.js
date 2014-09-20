var _ = require('underscore');

var CarManager = {
		requestInfo: function( model, id ){
			return "The information for " + model + " with ID " + id 
			+ " is foobar"; },
		buyVehicle: function( model, id ){
			return "You have successfully purchased Item " + id + ", a " 
			+ model;
		},
		arrangeViewing: function( model, id ){
			return "You have successfully booked a viewing of " + model 
			+ " ( " + id + " ) ";
		},
		auditSale : function (id) {
			console.log('This id was bought:' + id)
		},
};

// console.log(CarManager.buyVehicle('prius', 'zx123'))
// console.log(CarManager['buyVehicle']('volt', '1235'))
// console.log(CarManager['buyVehicle'].apply(CarManager, ['Leaf', 'asdfasdf']));
// var myObject = {foobar: 'hello'};
// console.log(CarManager.buyVehicle)
// console.log(result);

function debugLogger(str) {
	console.log('You called this function: ' + str);
}

function annotateResults(str) {
	str = 'annotateResults HERE ARE YOU RESULTS: ' + str;
	return str;
}

CarManager.execute = function ( name ) {
	debugLogger(name);
	// console.log(arguments)
	var result = CarManager[name] && CarManager[name].apply( 
			// CarManager, [].slice.call(arguments, 1) );
			CarManager, _.rest(arguments, 1) );
	result = annotateResults(result);
	return result;
};
// CarManager.buyVehicle
var result = CarManager.execute( "buyVehicle", "Tesla", "adssadf" );
console.log(result);
// var result = CarManager.buyVehicle("GMC SUBURBAN", "123456");
// console.log(result);
var result = CarManager.execute( "requestInfo", "GMC SUBURBAN", "123456" );
console.log(result);
// var result = CarManager.execute('requestInfo', 'Ferrari', 98765)

var buyVehicle = function() {
	console.log(' new buyVehicle');
}

function CarManager2(closure) {
	// do other stuff here
	closure();
	// do  stuff with result here 
}

// CarManager2(buyVehicle);


