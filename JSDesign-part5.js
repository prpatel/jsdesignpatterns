var vehiclePrototype = {
	init: function ( carModel ) { this.model = carModel;
	},
	getModel: function () { console.log( "The model of this vehicle is:" 
		+ this.model);
} };

function vehicle( model ) { 
	// you get a constructor
	function F() {};
	// does not have a constructor
	// var F = {};
	F.prototype = vehiclePrototype; 
	var f = new F();
	f.init( model ); 
	return f;
} 
//var car = new vehicle('Tesla');
var car = vehicle( "Ford Escort" );
car.getModel();

