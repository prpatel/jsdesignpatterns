var _ = require('underscore');

var myMixins = {
	moveUp: function(){ console.log( "myMixins move up" );
  },
  moveDown: function(){ console.log( " myMixins move down" );
  },
  stop: function(){
    console.log( "myMixins stop! " + this.myName ); 
  }
};

var otherMixin =  {
  type: 'jet engine',
	fly: function() {
		console.log('wheeee I am flying with ' + this.type);
	},
	stop: function(){
  console.log( "otherMixin STOPPPING!" + this.myName ); 
  },
  moveUp: function() {
  	console.log( "OTHER MIXIN moveUp!" + this.myName ); 
  },
  moveLeft: function() {
    console.log( "OTHER MIXIN moveLeft!" + this.myName ); 
  }
 }

function carAnimator(name){ 
  this.myName = name;
  this.moveLeft = function(){
   console.log( "move left" ); 
  };
  this.stop = function(){
  console.log( "carAnimator STOP" + this.myName ); 
  }
}




carAnimator.prototype = {
  fly: function() {console.log('fly!')}
}

_.extend( carAnimator.prototype, myMixins );
var myAnimator = new carAnimator('Pratik'); 
myAnimator.moveLeft();

myAnimator.stop();
myAnimator.moveDown();

// myAnimator.moveLeft();
_.extend( myAnimator, otherMixin, myMixins );
// myAnimator.stop();
// myAnimator.fly();
// myAnimator.moveUp();

// myAnimator.moveDown();
// myAnimator.moveLeft();
// myAnimator.stop();

//carAnimator.prototype = myMixins;
// myAnimator.moveLeft();
// myAnimator.stop();

var baseProps = {
  backgroundColor: 'white',
  textColor: 'green'
}

var labelProps = {
  fontSize: 36
}

// var final_label_props = _.extend(labelProps, baseProps);

// var button = Kendo.UI.createButton(_.extend({
//   text: 'Hello'
// }, final_label_props);





