function pow() {
	NumberToPower=prompt('enter NumberToPower',0);
	PowerOfNumber=prompt('enter PowerOfNumber',0);
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
}
pow();