var app ={
	power: function(NumberToPower,PowerOfNumber) {
		if ( (NumberToPower==null) || (NumberToPower=='0') ) {
		return console.log('function aborted. no NomberToPower');
	} else{
		/*var PowerOfNumber=2;*/
		if ( (PowerOfNumber==null) || (PowerOfNumber=='0') ) {
			return console.log('function aborted. no PowerToNumber');					
		} else{
				var ResultNumber=1;
				if (PowerOfNumber>=0) {
					for (var i = 0; i < PowerOfNumber; i++) {
					ResultNumber=ResultNumber*NumberToPower;
					};
					console.log('ResultNumber=', ResultNumber);
					pow=Math.pow(NumberToPower,PowerOfNumber);
					console.log('pow=', pow);
					} 
				else{
					for (var i = 0; i < Math.abs(PowerOfNumber); i++) {
					ResultNumber=ResultNumber*NumberToPower;
					};
					ResultNumber=1/(ResultNumber);
					console.log('ResultNumber=', ResultNumber);
				pow=Math.pow(NumberToPower,PowerOfNumber);
				console.log('pow=', pow);
				};		
		};		
	} return ResultNumber;
	},
	sum: function(a,b) {
		console.log('sum=', a+b);
		return a+b;
	}
};


/*app.power(2,2);
app.power(2,3);
app.power(5,3);
app.power(10,-1);
app.power(10,-2);
*/


try {
	module.exports = app;
} catch (e) {}

