//////////////////////////////////////switch div //////////////////////////////////////////////////
document.getElementById("homeLeft").addEventListener("click",function(event) {
	document.getElementById("contentHome").style.display="none";
	document.getElementById("contentLeft").style.display="block";
	document.getElementById("returnArrow").style.display="block";
	if (document.getElementById("returnArrow").style.display="block") {
			document.getElementById("returnArrow").addEventListener("click",function() {
			document.getElementById("contentHome").style.display="block";
			document.getElementById("contentRight").style.display="none";
			document.getElementById("contentLeft").style.display="none";
			document.getElementById("returnArrow").style.display="none";
			}, false);
		};
	event.stopImmediatePropagation();
	}, false);
document.getElementById("homeRight").addEventListener("click",function(event) {
	document.getElementById("contentHome").style.display="none";
	document.getElementById("contentRight").style.display="block";
	document.getElementById("returnArrow").style.display="block";
		if (document.getElementById("returnArrow").style.display="block") {
			document.getElementById("returnArrow").addEventListener("click",function() {
			document.getElementById("contentHome").style.display="block";
			document.getElementById("contentRight").style.display="none";
			document.getElementById("contentLeft").style.display="none";
			document.getElementById("returnArrow").style.display="none";
			}, false);
		};
		event.stopImmediatePropagation();
	}, false);
//////////////////////////////////////switch div //////////////////////////////////////////////////

var mSeconds=0; var seconds=0; var minutes=0; var hours=0;


//////////////////////////////////////uptimer//////////////////////////////////////////////////

var endInterval=1000*60*60*24;


var counterOperation;
function counterCheck () {
	if (mSeconds<10) { document.getElementById("mSeconds").innerHTML ='00'+mSeconds;
	} else if (mSeconds<100) {
		document.getElementById("mSeconds").innerHTML='0'+mSeconds;
	} else {
		document.getElementById("mSeconds").innerHTML=mSeconds;
	};
	if (seconds<10) { document.getElementById("seconds").innerHTML ='0'+seconds;
	} else {
		document.getElementById("seconds").innerHTML=seconds;
	};
	if (minutes<10) { document.getElementById("minutes").innerHTML ='0'+minutes;
	} else {
		document.getElementById("minutes").innerHTML=minutes;
	};
	if (hours<10) { document.getElementById("hours").innerHTML ='0'+hours;
	} else {
		document.getElementById("hours").innerHTML=hours;
	};
	////////////////////////////////////////////////
	if (mSeconds<10) { document.getElementById("mSeconds").innerHTML ='00'+mSeconds;
	} else if (mSeconds<100) {
		document.getElementById("rmSeconds").innerHTML='0'+mSeconds;
	} else {
		document.getElementById("rmSeconds").innerHTML=mSeconds;
	};
	if (seconds<10) { document.getElementById("rseconds").innerHTML ='0'+seconds;
	} else {
		document.getElementById("rseconds").innerHTML=seconds;
	};
	if (minutes<10) { document.getElementById("rminutes").innerHTML ='0'+minutes;
	} else {
		document.getElementById("rminutes").innerHTML=minutes;
	};
	if (hours<10) { document.getElementById("rhours").innerHTML ='0'+hours;
	} else {
		document.getElementById("rhours").innerHTML=hours;
	};
};
function counter() {
	/*console.log('mSeconds1', mSeconds);*/

	counterOperation = setTimeout(function () {
	mSeconds++;
	/*console.log('mSeconds2', mSeconds);*/
	if (mSeconds==999) {
		mSeconds=0;
		seconds++;	
	}
	if (seconds==59) {
		seconds=0;
		minutes++;
	}
	if (minutes==59) {
		minutes=0;
		hours++;
	}
	
	counterCheck ();

	if (mSeconds<endInterval) {counter()};
	},1);

};

//////////////////////////////////////uptimer//////////////////////////////////////////////////

//////////////////////////////////////downtimer//////////////////////////////////////////////////
var Current = "0";
var MAXLENGTH = 6;  
var myFunCalls=0;
var timeArr=[];
var beginInterval=0;
function AddValue(val) {
	
	myFunCalls++;
	if (myFunCalls<7) {
		timeArr[myFunCalls-1]=val;
		console.log("val", val);
		console.log("myFunCalls", myFunCalls);
		console.log("timeArr", timeArr[myFunCalls-1]);
	} else{
		document.getElementById("rseconds").innerHTML ='ig';
		document.getElementById("rminutes").innerHTML ='ob';
		document.getElementById("rhours").innerHTML ='to';
	};
	return val, myFunCalls,timeArr;
	
};

function combiner() {
	console.log("timeArr", timeArr);
	switch (timeArr.length) {
		case 1:
			seconds=Number(timeArr[0]);
			console.log("seconds", seconds);
			break; 
		case 2:
			seconds=Number(timeArr[1]+timeArr[0]);
			console.log("seconds", seconds);
			 break; 
		case 3:
			seconds=Number(timeArr[1]+timeArr[0]);
			minutes=Number(timeArr[2]);
			console.log("seconds", seconds);
			 break; 
		case 4:
			seconds=Number(timeArr[1]+timeArr[0]);
			minutes=Number(timeArr[3]+timeArr[2]);
			console.log("seconds", seconds);
			 break; 
		case 5:
			seconds=Number(timeArr[1]+timeArr[0]);
			minutes=Number(timeArr[3]+timeArr[2]);
			hours=Number(timeArr[5]);
			console.log("seconds", seconds);
			 break; 
		case 6:
			seconds=Number(timeArr[1]+timeArr[0]);
			minutes=Number(timeArr[3]+timeArr[2]);
			hours=Number(timeArr[6]+timeArr[7]);
			console.log("seconds", seconds);
			 break; 
	};

	beginInterval=1000*(seconds+60*minutes+hours*60);
	console.log("beginInterval", beginInterval);
	
	return beginInterval;
};

function downCounter() {
	
	console.log("beginInterval", beginInterval);
		counterOperation = setTimeout(function () {
		beginInterval--;
		

		/*console.log('mSeconds2', mSeconds);*/
		mSeconds=Math.floor(beginInterval % 1000);
		seconds=Math.floor(beginInterval/1000);
		minutes=Math.floor(beginInterval/60);
		hours=Math.floor(beginInterval/60);
		
		counterCheck ();

		if (beginInterval>0) {downCounter()};
		},1);
	
};


//////////////////////////////////////downtimer//////////////////////////////////////////////////

//////////////////////////////////////start stop pause //////////////////////////////////////////////////
function myPauseFunction() {
    clearTimeout(counterOperation);
}
function myStopFunction() {
    clearTimeout(counterOperation);
   	mSeconds=0; seconds=0; minutes=0; hours=0;
    document.getElementById("mSeconds").innerHTML = '0'+mSeconds;
	document.getElementById("seconds").innerHTML ='0'+ seconds;
	document.getElementById("minutes").innerHTML ='0'+ minutes;
	document.getElementById("hours").innerHTML ='0'+ hours;
	document.getElementById("rmSeconds").innerHTML = '0'+ mSeconds;
	document.getElementById("rseconds").innerHTML = '0'+ seconds;
	document.getElementById("rminutes").innerHTML = '0' + minutes;
	document.getElementById("rhours").innerHTML =  '0' +hours;
	myFunCalls=0;
	rmSeconds=0;

	return myFunCalls, rmSeconds;
}
console.log("rmSeconds", rmSeconds);	


document.getElementById("mSeconds").innerHTML = '0'+ mSeconds;
document.getElementById("seconds").innerHTML = '0'+ seconds;
document.getElementById("minutes").innerHTML = '0' + minutes;
document.getElementById("hours").innerHTML =  '0' +hours;


document.getElementById("rmSeconds").innerHTML = '0'+ mSeconds;
document.getElementById("rseconds").innerHTML = '0'+ seconds;
document.getElementById("rminutes").innerHTML = '0' + minutes;
document.getElementById("rhours").innerHTML =  '0' +hours;

var leftStart=document.getElementById("leftStart").addEventListener("click", counter);
var leftPause=document.getElementById("leftPause").addEventListener("click", myPauseFunction);
var leftStop=document.getElementById("leftStop").addEventListener("click", myStopFunction);

var rightStart=document.getElementById("rightStart").addEventListener("click", combiner);
var rightStart=document.getElementById("rightStart").addEventListener("click", downCounter);
var rightPause=document.getElementById("rightPause").addEventListener("click", myPauseFunction);
var rightStop=document.getElementById("rightStop").addEventListener("click", myStopFunction);
//////////////////////////////////////start stop pause //////////////////////////////////////////////////