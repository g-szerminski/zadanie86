var a = prompt('Podaj wartość a');
var b = prompt('Podaj wartość b');
	value = (a * a) - (2 * a * b) - (b * b);
console.log ('The result of the action with variable a: ' + a + ' and with variable b: ' + b + ' is equal to: ' + value);

if (value > 0)	{
	alert('Wynik dodatni = ' + value);
	console.log ('Wynik dodatni');
}

if (value < 0) {
	alert('Wynik ujemny = ' + value);
	console.log ('Wynik ujemny');
}

if (value == 0) {
	alert('Wynik równy ' + value);
	console.log ('Wynik = 0');
}