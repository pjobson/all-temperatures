const assert = require('chai').assert;
const temp = require('./index');

const converstionTests = [
	{
		celsius:    { 'scale': 'Celsius'    , 'unit': '°C'  , 'value':  40    },
		delisle:    { 'scale': 'Delisle'    , 'unit': '°D'  , 'value':  90    },
		fahrenheit: { 'scale': 'Fahrenheit' , 'unit': '°F'  , 'value': 104    },
		kelvin:     { 'scale': 'Kelvin'     , 'unit': 'K'   , 'value': 313.15 },
		newton:     { 'scale': 'Newton'     , 'unit': '°N'  , 'value':  13.2  },
		rankine:    { 'scale': 'Rankine'    , 'unit': '°R'  , 'value': 563.67 },
		reaumur:    { 'scale': 'Réaumur'    , 'unit': '°Ré' , 'value':  32    },
		romer:      { 'scale': 'Rømer'      , 'unit': '°Rø' , 'value':  28.5  }
	},
	{
		celsius:    { 'scale': 'Celsius'    , 'unit': '°C'  , 'value':   0    },
		delisle:    { 'scale': 'Delisle'    , 'unit': '°D'  , 'value': 150    },
		fahrenheit: { 'scale': 'Fahrenheit' , 'unit': '°F'  , 'value':  32    },
		kelvin:     { 'scale': 'Kelvin'     , 'unit': 'K'   , 'value': 273.15 },
		newton:     { 'scale': 'Newton'     , 'unit': '°N'  , 'value':   0    },
		rankine:    { 'scale': 'Rankine'    , 'unit': '°R'  , 'value': 491.67 },
		reaumur:    { 'scale': 'Réaumur'    , 'unit': '°Ré' , 'value':   0    },
		romer:      { 'scale': 'Rømer'      , 'unit': '°Rø' , 'value':   7.5  }
	},
	{
		celsius:    { 'scale': 'Celsius'    , unit: '°C'  , value: -273.15 },
		fahrenheit: { 'scale': 'Fahrenheit' , unit: '°F'  , value: -459.67 },
		kelvin:     { 'scale': 'Kelvin'     , unit: 'K'   , value:    0    },
		rankine:    { 'scale': 'Rankine'    , unit: '°R'  , value:    0    },
		delisle:    { 'scale': 'Delisle'    , unit: '°D'  , value:  559.72 },
		newton:     { 'scale': 'Newton'     , unit: '°N'  , value:  -90.14 },
		reaumur:    { 'scale': 'Réaumur'    , unit: '°Ré' , value: -218.52 },
		romer:      { 'scale': 'Rømer'      , unit: '°Rø' , value: -135.9  }
	}
];

const temperatureScales = [
	'Celsius',
	'Fahrenheit',
	'Kelvin',
	'Rankine',
	'Delisle',
	'Newton',
	'Réaumur',
	'Rømer'
].sort();

const temperatureUnits = [ '°C', '°F', 'K', '°R', '°D', '°N', '°Ré', '°Rø' ].sort();

describe('Celsius to...', () => {
	it('40°C should return\n'+ JSON.stringify(converstionTests[0]), () => {
		assert.deepEqual(temp.celsiusTo(40),converstionTests[0]);
	});
	it('0°C should return\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.celsiusTo(0),converstionTests[1]);
	});
	it('-300°C should return as 0K\n\t'+ JSON.stringify(converstionTests[1]), () => {
		assert.deepEqual(temp.celsiusTo(-300),converstionTests[2]);
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
	it('0K should return\n\t'+ JSON.stringify(converstionTests[2]), () => {
		assert.deepEqual(temp.kelvinTo(0),converstionTests[2]);
	});
	it('-100K should return as 0K\n\t'+ JSON.stringify(converstionTests[2]), () => {
		assert.deepEqual(temp.kelvinTo(-100),converstionTests[2]);
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

describe('Get All Scales', () => {
	it('Should return an array of temperature scales.', () => {
		assert.deepEqual(temp.getAllScales(), temperatureScales);
	});
});

describe('Get All Units', () => {
	it('Should return an array of temperature units.', () => {
		assert.deepEqual(temp.getAllUnits(), temperatureUnits);
	});
});

describe('Get Unit from Scale', () => {
	it('Celsius/celsius should return °C', () => {
			assert.equal(temp.getUnitFromScale('Celsius'), '°C');
			assert.equal(temp.getUnitFromScale('celsius'), '°C');
	});
	it('Fahrenheit/fahrenheit should return °F', () => {
			assert.equal(temp.getUnitFromScale('Fahrenheit'), '°F');
			assert.equal(temp.getUnitFromScale('fahrenheit'), '°F');
	});
	it('Kelvin/kelvin should return K', () => {
			assert.equal(temp.getUnitFromScale('Kelvin'), 'K');
			assert.equal(temp.getUnitFromScale('kelvin'), 'K');
	});
	it('Rankine/rankine should return °R', () => {
			assert.equal(temp.getUnitFromScale('Rankine'), '°R');
			assert.equal(temp.getUnitFromScale('rankine'), '°R');
	});
	it('Delisle/delisle should return °D', () => {
			assert.equal(temp.getUnitFromScale('Delisle'), '°D');
			assert.equal(temp.getUnitFromScale('delisle'), '°D');
	});
	it('Newton/newton should return °N', () => {
			assert.equal(temp.getUnitFromScale('Newton'), '°N');
			assert.equal(temp.getUnitFromScale('newton'), '°N');
	});
	it('Réaumur/réaumur/Reaumur/reaumur should return °Ré', () => {
			assert.equal(temp.getUnitFromScale('Réaumur'), '°Ré');
			assert.equal(temp.getUnitFromScale('réaumur'), '°Ré');
			assert.equal(temp.getUnitFromScale('Reaumur'), '°Ré');
			assert.equal(temp.getUnitFromScale('reaumur'), '°Ré');
	});
	it('Rømer/rømer/Romer/romer should return °Rø', () => {
			assert.equal(temp.getUnitFromScale('Rømer'), '°Rø');
			assert.equal(temp.getUnitFromScale('rømer'), '°Rø');
			assert.equal(temp.getUnitFromScale('Romer'), '°Rø');
			assert.equal(temp.getUnitFromScale('romer'), '°Rø');
	});
});

describe('Get Scale from Unit', () => {
	it('°C/C/°c/c should return Celsius', () => {
			assert.equal(temp.getScaleFromUnit('°C'), 'Celsius');
			assert.equal(temp.getScaleFromUnit('C'), 'Celsius');
			assert.equal(temp.getScaleFromUnit('°c'), 'Celsius');
			assert.equal(temp.getScaleFromUnit('c'), 'Celsius');
	});
	it('°F/F/°f/f should return Fahrenheit', () => {
			assert.equal(temp.getScaleFromUnit('°F'), 'Fahrenheit');
			assert.equal(temp.getScaleFromUnit('F'), 'Fahrenheit');
			assert.equal(temp.getScaleFromUnit('°f'), 'Fahrenheit');
			assert.equal(temp.getScaleFromUnit('f'), 'Fahrenheit');
	});
	it('°K/K/°k/k should return Kelvin', () => {
			assert.equal(temp.getScaleFromUnit('°K'), 'Kelvin');
			assert.equal(temp.getScaleFromUnit('K'), 'Kelvin');
			assert.equal(temp.getScaleFromUnit('°k'), 'Kelvin');
			assert.equal(temp.getScaleFromUnit('k'), 'Kelvin');
	});
	it('°R/R/°r/r should return Rankine', () => {
			assert.equal(temp.getScaleFromUnit('°R'), 'Rankine');
			assert.equal(temp.getScaleFromUnit('R'), 'Rankine');
			assert.equal(temp.getScaleFromUnit('°r'), 'Rankine');
			assert.equal(temp.getScaleFromUnit('r'), 'Rankine');
	});
	it('°D/D/°d/d should return Delisle', () => {
			assert.equal(temp.getScaleFromUnit('°D'), 'Delisle');
			assert.equal(temp.getScaleFromUnit('D'), 'Delisle');
			assert.equal(temp.getScaleFromUnit('°d'), 'Delisle');
			assert.equal(temp.getScaleFromUnit('d'), 'Delisle');
	});
	it('°N/N/°n/n should return Newton', () => {
			assert.equal(temp.getScaleFromUnit('°N'), 'Newton');
			assert.equal(temp.getScaleFromUnit('N'), 'Newton');
			assert.equal(temp.getScaleFromUnit('°n'), 'Newton');
			assert.equal(temp.getScaleFromUnit('n'), 'Newton');
	});
	it('°Ré/°Re/Ré/Re/°ré/°re/ré/re should return Réaumur', () => {
			assert.equal(temp.getScaleFromUnit('°Ré'), 'Réaumur');
			assert.equal(temp.getScaleFromUnit('°Re'), 'Réaumur');
			assert.equal(temp.getScaleFromUnit('Ré'), 'Réaumur');
			assert.equal(temp.getScaleFromUnit('Re'), 'Réaumur');
			assert.equal(temp.getScaleFromUnit('°ré'), 'Réaumur');
			assert.equal(temp.getScaleFromUnit('°re'), 'Réaumur');
			assert.equal(temp.getScaleFromUnit('ré'), 'Réaumur');
			assert.equal(temp.getScaleFromUnit('re'), 'Réaumur');
	});
	it('°Rø/°Ro/Rø/Ro/°rø/°ro/rø/ro should return Rømer', () => {
			assert.equal(temp.getScaleFromUnit('°Rø'), 'Rømer');
			assert.equal(temp.getScaleFromUnit('°Ro'), 'Rømer');
			assert.equal(temp.getScaleFromUnit('Rø'), 'Rømer');
			assert.equal(temp.getScaleFromUnit('Ro'), 'Rømer');
			assert.equal(temp.getScaleFromUnit('°rø'), 'Rømer');
			assert.equal(temp.getScaleFromUnit('°ro'), 'Rømer');
			assert.equal(temp.getScaleFromUnit('rø'), 'Rømer');
			assert.equal(temp.getScaleFromUnit('ro'), 'Rømer');
	});
});

describe('Get Absolute Zero Value of a Scale', () => {
	it('Celsius/celsius should return: -273.15', () => {
		assert.equal(temp.getAbsZeroFromScale('Celsius'), -273.15);
		assert.equal(temp.getAbsZeroFromScale('celsius'), -273.15);
	});
	it('Fahrenheit/fahrenheit should return: -459.67', () => {
		assert.equal(temp.getAbsZeroFromScale('Fahrenheit'), -459.67);
		assert.equal(temp.getAbsZeroFromScale('fahrenheit'), -459.67);
	});
	it('Kelvin/kelvin should return: 0', () => {
		assert.equal(temp.getAbsZeroFromScale('Kelvin'), 0);
		assert.equal(temp.getAbsZeroFromScale('kelvin'), 0);
	});
	it('Rankine/rankine should return: 0', () => {
		assert.equal(temp.getAbsZeroFromScale('Rankine'), 0);
		assert.equal(temp.getAbsZeroFromScale('rankine'), 0);
	});
	it('Delisle/delisle should return: 559.72', () => {
		assert.equal(temp.getAbsZeroFromScale('Delisle'), 559.72);
		assert.equal(temp.getAbsZeroFromScale('delisle'), 559.72);
	});
	it('Newton/newton should return: -90.14', () => {
		assert.equal(temp.getAbsZeroFromScale('Newton'), -90.14);
		assert.equal(temp.getAbsZeroFromScale('newton'), -90.14);
	});
	it('Réaumur/réaumur/Reaumur/reaumur should return: -218.52', () => {
		assert.equal(temp.getAbsZeroFromScale('Réaumur'), -218.52);
		assert.equal(temp.getAbsZeroFromScale('réaumur'), -218.52);
		assert.equal(temp.getAbsZeroFromScale('Reaumur'), -218.52);
		assert.equal(temp.getAbsZeroFromScale('reaumur'), -218.52);
	});
	it('Rømer/rømer/Romer/romer should return: -135.9', () => {
		assert.equal(temp.getAbsZeroFromScale('Rømer'), -135.9);
		assert.equal(temp.getAbsZeroFromScale('rømer'), -135.9);
		assert.equal(temp.getAbsZeroFromScale('Romer'), -135.9);
		assert.equal(temp.getAbsZeroFromScale('romer'), -135.9);
	});
});
