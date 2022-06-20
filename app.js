/*Para calcular el coste de la estancia ten en cuenta lo siguiente:
La tarifa de la habitación por noche es de 100€ para categoría Standard, 120€ Junior Suite y 150€ Suite.
*/
var nameRoom;
var nightNumber = 0;
var ClassPrice = 0;
var plusSpa = 0;
var total;
var roomSize;
var priceSize = 0;
var parkingPrice = 0;
var roomDay = 0;

function roomClass() {
	var roomSelect = document.getElementById('room-class');
	nameRoom = roomSelect.options[roomSelect.selectedIndex].innerHTML;
	var value = roomSelect.options[roomSelect.selectedIndex].value;
	if (!value) {
		return alert('Seleccione la clase de habitación');
	}

	if (value === 'standard') {
		ClassPrice = 100;
	} else if (value === 'juniorSuite') {
		ClassPrice = 120;
	} else if (value === 'suite') {
		ClassPrice = 150;
	}

	document.getElementById('resultado').innerHTML =
		'Precio por noche para la habitación ' +
		nameRoom +
		' : ' +
		ClassPrice +
		'€';
}

function Spa() {
	if (document.getElementById('spa-option').checked) {
		plusSpa = 20;
		console.log('Ha reservado Spa. El coste es de ' + plusSpa + ' €.');
	} else {
		plusSpa = 0;
		console.log('No ha reservado Spa');
	}
}

function Size() {
	var sizeSelect = document.getElementById('room-size');
	roomSize = sizeSelect.options[sizeSelect.selectedIndex].value;
	console.log(roomSize);

	if (!roomSize) {
		return alert('Selecciona el tipo de habitación');
	}

	if (roomSize === 'individual') {
		priceSize = ClassPrice * -0.25;
		document.getElementById('resultado').innerHTML =
			'Esta opción tiene un descuento del 25%';
	} else if (roomSize === 'doble') {
		priceSize = 0;
		document.getElementById('resultado').innerHTML =
			'Esta opción no tiene coste extra';
	} else if (roomSize === 'triple') {
		priceSize = ClassPrice * 0.25;
		document.getElementById('resultado').innerHTML =
			'Esta opción tiene un coste extra del 25%';
	}
}

function selectNight() {
	nightNumber = document.getElementById('night-number').valueAsNumber;

	if (nightNumber > 0) {
		document.getElementById('resultado').innerHTML =
			'Número de noches: ' + nightNumber;
	} else if (!nightNumber) {
		alert('Selecciona el número de noches');
		return;
	}
}

function parking() {
	var parkingDays = document.getElementById('parking-option').valueAsNumber;
	parkingPrice = parkingDays * 10;
	console.log(parkingDays);
	console.log(parkingPrice);
}

function result() {
	roomClass();
	selectNight();
	Size();

	roomDay = (ClassPrice + plusSpa + priceSize) * nightNumber;
	total = roomDay + parkingPrice;

	document.getElementById('resultado').innerHTML =
		'El total de la reserva es ' + total;
}

document.getElementById('room-size').addEventListener('change', Size);
document.getElementById('room-class').addEventListener('change', roomClass);
document.getElementById('night-number').addEventListener('change', selectNight);
document.getElementById('spa-option').addEventListener('click', Spa);
document.getElementById('calcular').addEventListener('click', result);
document.getElementById('parking-option').addEventListener('change', parking);
