var Names=[];
for (var i = 0; i < 5; i++) {
	Names[i]=prompt('введите имя №'+(+i+1), 'имя');
}
console.log(Names);
var CheckName=prompt('введите имя пользователя', 'имя');
console.log('CheckName='+CheckName);
console.log('Names.length='+Names.length);
for (var i = 0; i < Names.length; i++) {
	console.log('CounterI='+i);
	if (Names[i]==CheckName) break;	
}
console.log('CheckCounterI='+i);
if (i<Names.length) {
	alert(Names[i]+', вы успешно вошли');
} else {
	alert('ERROR');
}

