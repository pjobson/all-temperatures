const _ = require('lodash');

const precision = 2;

const temperatures = {
	'celsius': {
		name: 'Celsius',
		unit: '°C',
		toCelsius: (celsius) => {
			// [°C] = [°C]
			return parseFloat(celsius);
		},
		fromCelsius: (celsius) => {
			// [°C] = [°C]
			return parseFloat(celsius);
		}
	},
	'fahrenheit': {
		name: 'Fahrenheit',
		unit: '°F',
		toCelsius: (fahrenheit) => {
			// [°C] = ([°F] − 32) × ​5⁄9
			return ((parseFloat(fahrenheit) - 32) * 5 / 9);
		},
		fromCelsius: (celsius) => {
			// [°F] = [°C] × ​9⁄5 + 32
			return (parseFloat(celsius) * 9 / 5 + 32);
		}
	},
	'kelvin': {
		name: 'Kelvin',
		unit: 'K',
		toCelsius: (kelvin) => {
			// [°C] = [K] − 273.15
			return (parseFloat(kelvin) - 273.15);
		},
		fromCelsius: (celsius) => {
			// [K] = [°C] + 273.15
			return (parseFloat(celsius) + 273.15);
		}
	},
	'rankine': {
		name: 'Rankine',
		unit: '°R',
		toCelsius: (rankine) => {
			// [°C] = ([°R] − 491.67) × ​5⁄9
			return ((parseFloat(rankine) - 491.67) * 5 / 9);
		},
		fromCelsius: (celsius) => {
			// [°R] = ([°C] + 273.15) × ​9⁄5
			return ((parseFloat(celsius) + 273.15) * 9 / 5);
		}
	},
	'delisle': {
		name: 'Delisle',
		unit: '°D',
		toCelsius: (delisle) => {
			// [°C] = 100 − [°De] × ​2⁄3
			return (100 - (parseFloat(delisle) * 2 / 3));
		},
		fromCelsius: (celsius) => {
			// [°De] = (100 − [°C]) × ​3⁄2
			return ((100 - parseFloat(celsius)) * 3 / 2);
		}
	},
	'newton': {
		name: 'Newton',
		unit: '°N',
		toCelsius: (newton) => {
			// [°C] = [°N] × ​100⁄33
			return (parseFloat(newton) * 100 / 33);
		},
		fromCelsius: (celsius) => {
			// [°N] = [°C] × ​33⁄100
			return (parseFloat(celsius) * 33 / 100);
		}
	},
	'reaumur': {
		name: 'Réaumur',
		unit: '°Ré',
		toCelsius: (réaumur) => {
			// 	[°C] = [°Ré] × ​5⁄4
			return (parseFloat(réaumur) * 5 / 4);
		},
		fromCelsius: (celsius) => {
			// [°Ré] = [°C] × ​4⁄5
			return (parseFloat(celsius) * 4 / 5);
		}
	},
	'romer': {
		name: 'Rømer',
		unit: '°Rø',
		toCelsius: (rømer) => {
			// [°C] = ([°Rø] − 7.5) × ​40⁄21
			return ((parseFloat(rømer) - 7.5) * 40 / 21);
		},
		fromCelsius: (celsius) => {
			// [°Rø] = [°C] × ​21⁄40 + 7.5
			return ((parseFloat(celsius) * 21 / 40) + 7.5);
		}
	}
};

const convert = (celsius) => {
	let temps = {};
	_.forIn(temperatures, (value, key) => {
		temps[key] = {
			name: value.name,
			unit: value.unit,
			value: parseFloat(temperatures[key].fromCelsius(celsius).toFixed(precision))
		};
	});
	return temps;
};

module.exports = {
	celsiusTo: (celsius) => {
		return convert(temperatures.celsius.toCelsius(celsius));;
	},
	delisleTo: (delisle) => {
		return convert(temperatures.delisle.toCelsius(delisle));
	},
	fahrenheitTo: (fahrenheit) => {
		return convert(temperatures.fahrenheit.toCelsius(fahrenheit));
	},
	kelvinTo: (kelvin) => {
		return convert(temperatures.kelvin.toCelsius(kelvin));
	},
	newtonTo: (newton) => {
		return convert(temperatures.newton.toCelsius(newton));
	},
	rankineTo: (rankine) => {
		return convert(temperatures.rankine.toCelsius(rankine));
	},
	reaumurTo: (réaumur) => {
		return convert(temperatures.reaumur.toCelsius(réaumur));
	},
	romerTo: (rømer) => {
		return convert(temperatures.romer.toCelsius(rømer));
	},
	getAllNames: () => {
		return _.values(temperatures).map(temp => temp.name).sort();
	},
	getAllUnits: () => {
		return _.values(temperatures).map(temp => temp.unit).sort();
	},
	getUnitFromName: (name) => {
		name = name.toLowerCase().replace(/é/g,'e').replace(/ø/g,'o');
		return temperatures[name].unit || false;
	},
	getNameFromUnit: (unit) => {
		const unitRe = new RegExp(unit.replace(/e/,'é').replace(/o/,'ø').replace(/^°/,'') +'$','i')
		return _(_
			.chain(temperatures)
			.values()
			.filter( obj => unitRe.test(obj.unit) )
			.value()
			.concat({})[0])
			.get('name', false);
	}
};
