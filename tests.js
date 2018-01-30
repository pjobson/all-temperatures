const assert = require('chai').assert;
const temp = require('./index');

const converstionTests = [
	{
		celsius: { 'name': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'name': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'name': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'name': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'name': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'name': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'name': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'name': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	},
	{
		celsius: { 'name': 'Celsius', 'unit': '°C', 'value': 0 },
		delisle: { 'name': 'Delisle', 'unit': '°D', 'value': 150 },
		fahrenheit: { 'name': 'Fahrenheit', 'unit': '°F', 'value': 32 },
		kelvin: { 'name': 'Kelvin', 'unit': 'K', 'value': 273.15 },
		newton: { 'name': 'Newton', 'unit': '°N', 'value': 0 },
		rankine: { 'name': 'Rankine', 'unit': '°R', 'value': 491.67 },
		reaumur: { 'name': 'Réaumur', 'unit': '°Ré', 'value': 0 },
		romer: { 'name': 'Rømer', 'unit': '°Rø', 'value': 7.5 }
	}
];

const temperatureNames = [
	'Celsius',
	'Fahrenheit',
	'Kelvin',
	'Rankine',
	'Delisle',
	'Newton',
	'Réaumur',
	'Rømer'
].sort();

const temperatureValues = [ '°C', '°F', 'K', '°R', '°D', '°N', '°Ré', '°Rø' ].sort();

describe('Celsius to...', () => {
	it('40°C should return\n'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.celsiusTo(40),converstionTests[0]);
	});
	it('0°C should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.celsiusTo(0),converstionTests[1]);
	});
});

describe('Fahrenheit to...', () => {
	it('104°F should return\n\t'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.fahrenheitTo(104),converstionTests[0]);
	});
	it('32°F should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.fahrenheitTo(32),converstionTests[1]);
	});
});

describe('Kelvin to...', () => {
	it('313.15K should return\n\t'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.kelvinTo(313.15),converstionTests[0]);
	});
	it('273.15K should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.kelvinTo(273.15),converstionTests[1]);
	});
});

describe('Rankine to...', () => {
	it('563.67°R should return\n\t'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.rankineTo(563.67),converstionTests[0]);
	});
	it('491.67°R should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.rankineTo(491.67),converstionTests[1]);
	});
});

describe('Delisle to...', () => {
	it('90°D should return\n\t'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.delisleTo(90),converstionTests[0]);
	});
	it('150°D should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.delisleTo(150),converstionTests[1]);
	});
});

describe('Newton to...', () => {
	it('13.2°N should return\n\t'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.newtonTo(13.2),converstionTests[0]);
	});
	it('0°N should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.newtonTo(0),converstionTests[1]);
	});
});

describe('Réaumur to...', () => {
	it('32°Ré should return\n\t'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.reaumurTo(32),converstionTests[0]);
	});
	it('0°Ré should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.reaumurTo(0),converstionTests[1]);
	});
});

describe('Rømer to...', () => {
	it('28.5°Rø should return\n\t'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.romerTo(28.5),converstionTests[0]);
	});
	it('7.5°Rø should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.romerTo(7.5),converstionTests[1]);
	});
});

describe('Get All Names', () => {
	it('Should return an array of temperature names.', () => {
		assert.deepEqual(temp.getAllNames(), temperatureNames);
	});
});

describe('Get All Units', () => {
	it('Should return an array of temperature units.', () => {
		assert.deepEqual(temp.getAllUnits(), temperatureValues);
	});
});

describe('Get Unit from Name', () => {
	it('Celsius/celsius should return °C', () => {
			assert.equal(temp.getUnitFromName('Celsius'), '°C');
			assert.equal(temp.getUnitFromName('celsius'), '°C');
	});
	it('Fahrenheit/fahrenheit should return °F', () => {
			assert.equal(temp.getUnitFromName('Fahrenheit'), '°F');
			assert.equal(temp.getUnitFromName('fahrenheit'), '°F');
	});
	it('Kelvin/kelvin should return K', () => {
			assert.equal(temp.getUnitFromName('Kelvin'), 'K');
			assert.equal(temp.getUnitFromName('kelvin'), 'K');
	});
	it('Rankine/rankine should return °R', () => {
			assert.equal(temp.getUnitFromName('Rankine'), '°R');
			assert.equal(temp.getUnitFromName('rankine'), '°R');
	});
	it('Delisle/delisle should return °D', () => {
			assert.equal(temp.getUnitFromName('Delisle'), '°D');
			assert.equal(temp.getUnitFromName('delisle'), '°D');
	});
	it('Newton/newton should return °N', () => {
			assert.equal(temp.getUnitFromName('Newton'), '°N');
			assert.equal(temp.getUnitFromName('newton'), '°N');
	});
	it('Réaumur/réaumur/Reaumur/reaumur should return °Ré', () => {
			assert.equal(temp.getUnitFromName('Réaumur'), '°Ré');
			assert.equal(temp.getUnitFromName('réaumur'), '°Ré');
			assert.equal(temp.getUnitFromName('Reaumur'), '°Ré');
			assert.equal(temp.getUnitFromName('reaumur'), '°Ré');
	});
	it('Rømer/rømer/Romer/romer should return °Rø', () => {
			assert.equal(temp.getUnitFromName('Rømer'), '°Rø');
			assert.equal(temp.getUnitFromName('rømer'), '°Rø');
			assert.equal(temp.getUnitFromName('Romer'), '°Rø');
			assert.equal(temp.getUnitFromName('romer'), '°Rø');
	});
});

describe('Get Name from Unit', () => {
	it('°C/C/°c/c should return Celsius', () => {
			assert.equal(temp.getNameFromUnit('°C'), 'Celsius');
			assert.equal(temp.getNameFromUnit('C'), 'Celsius');
			assert.equal(temp.getNameFromUnit('°c'), 'Celsius');
			assert.equal(temp.getNameFromUnit('c'), 'Celsius');
	});
	it('°F/F/°f/f should return Fahrenheit', () => {
			assert.equal(temp.getNameFromUnit('°F'), 'Fahrenheit');
			assert.equal(temp.getNameFromUnit('F'), 'Fahrenheit');
			assert.equal(temp.getNameFromUnit('°f'), 'Fahrenheit');
			assert.equal(temp.getNameFromUnit('f'), 'Fahrenheit');
	});
	it('°K/K/°k/k should return Kelvin', () => {
			assert.equal(temp.getNameFromUnit('°K'), 'Kelvin');
			assert.equal(temp.getNameFromUnit('K'), 'Kelvin');
			assert.equal(temp.getNameFromUnit('°k'), 'Kelvin');
			assert.equal(temp.getNameFromUnit('k'), 'Kelvin');
	});
	it('°R/R/°r/r should return Rankine', () => {
			assert.equal(temp.getNameFromUnit('°R'), 'Rankine');
			assert.equal(temp.getNameFromUnit('R'), 'Rankine');
			assert.equal(temp.getNameFromUnit('°r'), 'Rankine');
			assert.equal(temp.getNameFromUnit('r'), 'Rankine');
	});
	it('°D/D/°d/d should return Delisle', () => {
			assert.equal(temp.getNameFromUnit('°D'), 'Delisle');
			assert.equal(temp.getNameFromUnit('D'), 'Delisle');
			assert.equal(temp.getNameFromUnit('°d'), 'Delisle');
			assert.equal(temp.getNameFromUnit('d'), 'Delisle');
	});
	it('°N/N/°n/n should return Newton', () => {
			assert.equal(temp.getNameFromUnit('°N'), 'Newton');
			assert.equal(temp.getNameFromUnit('N'), 'Newton');
			assert.equal(temp.getNameFromUnit('°n'), 'Newton');
			assert.equal(temp.getNameFromUnit('n'), 'Newton');
	});
	it('°Ré/°Re/Ré/Re/°ré/°re/ré/re should return Réaumur', () => {
			assert.equal(temp.getNameFromUnit('°Ré'), 'Réaumur');
			assert.equal(temp.getNameFromUnit('°Re'), 'Réaumur');
			assert.equal(temp.getNameFromUnit('Ré'), 'Réaumur');
			assert.equal(temp.getNameFromUnit('Re'), 'Réaumur');
			assert.equal(temp.getNameFromUnit('°ré'), 'Réaumur');
			assert.equal(temp.getNameFromUnit('°re'), 'Réaumur');
			assert.equal(temp.getNameFromUnit('ré'), 'Réaumur');
			assert.equal(temp.getNameFromUnit('re'), 'Réaumur');
	});
	it('°Rø/°Ro/Rø/Ro/°rø/°ro/rø/ro should return Rømer', () => {
			assert.equal(temp.getNameFromUnit('°Rø'), 'Rømer');
			assert.equal(temp.getNameFromUnit('°Ro'), 'Rømer');
			assert.equal(temp.getNameFromUnit('Rø'), 'Rømer');
			assert.equal(temp.getNameFromUnit('Ro'), 'Rømer');
			assert.equal(temp.getNameFromUnit('°rø'), 'Rømer');
			assert.equal(temp.getNameFromUnit('°ro'), 'Rømer');
			assert.equal(temp.getNameFromUnit('rø'), 'Rømer');
			assert.equal(temp.getNameFromUnit('ro'), 'Rømer');
	});
});
