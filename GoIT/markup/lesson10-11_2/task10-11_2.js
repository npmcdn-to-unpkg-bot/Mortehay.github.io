var Names=[];
for (var i = 0; i < 5; i++) {
	Names[i]=prompt('введите имя №'+(+i+1), 'имя');
	if (Names[i] == 'имя' || Names[i] == null) {
		alert('Пожалуйса, введите имя');
		window.location.reload(false);  
	}
}
console.log(Names);
var CheckName=prompt('введите имя пользователя', 'имя');
console.log('CheckName='+CheckName);
console.log('Names.length='+Names.length);
if (CheckName=='имя') {
	alert('Пожалуйса, введите имя');
	window.location.reload(false); 
} else{
	for (var i = 0; i < Names.length; i++) {
		console.log('CounterI='+i);
		if (Names[i]==CheckName) break;	
	}
	console.log('CheckCounterI='+i);
	if (i<Names.length) {
		alert(CheckName+', вы успешно вошли');
	} else {
		alert('ERROR');
	}
};




