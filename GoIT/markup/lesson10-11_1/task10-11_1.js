function pow() {
	var NumberToPower=+prompt('enter NumberToPower',0);
	if ( (NumberToPower==null) || (NumberToPower=='0') ) {
		return console.log('function aborted. no NomberToPower');
	} else{
		var PowerOfNumber=+prompt('enter PowerOfNumber',0);
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
	};
}
pow();