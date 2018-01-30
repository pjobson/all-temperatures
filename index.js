const _ = require('lodash');

const precision = 2;

Object.assign(Number.prototype, {
	lessThanAbsZero(tempScale) {
		const temp = parseFloat(this);
		const abs0 = parseFloat(temperatures[tempScale].abs0);
		return (temp<abs0) ? abs0 : temp;
	},
	greaterThanAbsZero(tempScale) {
		// only for delisle
		const temp = parseFloat(this);
		const abs0 = parseFloat(temperatures[tempScale].abs0);
		return (temp>abs0) ? abs0 : temp;
	}
});

const temperatures = {
	'celsius': {
		scale: 'Celsius',
		unit: '°C',
		abs0: -273.15,
		toCelsius: (degC) => {
			// [°C] = [°C]
			return degC.lessThanAbsZero('celsius');
		},
		fromCelsius: (degC) => {
			// [°C] = [°C]
			return degC.lessThanAbsZero('celsius');
		}
	},
	'fahrenheit': {
		scale: 'Fahrenheit',
		unit: '°F',
		abs0: -459.67,
		toCelsius: (fahrenheit) => {
			// [°C] = ([°F] − 32) × ​5⁄9
			const celsius = ((parseFloat(fahrenheit) - 32) * 5 / 9).lessThanAbsZero('celsius');
			return celsius;
		},
		fromCelsius: (celsius) => {
			// [°F] = [°C] × ​9⁄5 + 32
			const fahrenheit = (parseFloat(celsius) * 9 / 5 + 32).lessThanAbsZero('fahrenheit');
			return fahrenheit;
		}
	},
	'kelvin': {
		scale: 'Kelvin',
		unit: 'K',
		abs0: 0,
		toCelsius: (kelvin) => {
			// [°C] = [K] − 273.15
			const celsius = (parseFloat(kelvin) - 273.15).lessThanAbsZero('celsius');
			return celsius;
		},
		fromCelsius: (celsius) => {
			// [K] = [°C] + 273.15
			const kelvin = (parseFloat(celsius) + 273.15).lessThanAbsZero('kelvin');
			return kelvin;
		}
	},
	'rankine': {
		scale: 'Rankine',
		unit: '°R',
		abs0: 0,
		toCelsius: (rankine) => {
			// [°C] = ([°R] − 491.67) × ​5⁄9
			const celsius = ((parseFloat(rankine) - 491.67) * 5 / 9).lessThanAbsZero('celsius');
			return celsius;
		},
		fromCelsius: (celsius) => {
			// [°R] = ([°C] + 273.15) × ​9⁄5
			const rankine = ((parseFloat(celsius) + 273.15) * 9 / 5).lessThanAbsZero('rankine');
			return rankine;
		}
	},
	'delisle': {
		scale: 'Delisle',
		unit: '°D',
		abs0: 559.72,
		toCelsius: (delisle) => {
			// [°C] = 100 − [°De] × ​2⁄3
			const celsius = (100 - (parseFloat(delisle) * 2 / 3)).lessThanAbsZero('celsius');
			return celsius;
		},
		fromCelsius: (celsius) => {
			// [°De] = (100 − [°C]) × ​3⁄2
			const delisle = ((100 - parseFloat(celsius)) * 3 / 2).greaterThanAbsZero('delisle');
			return delisle;
		}
	},
	'newton': {
		scale: 'Newton',
		unit: '°N',
		abs0: -90.14,
		toCelsius: (newton) => {
			// [°C] = [°N] × ​100⁄33
			const celsius = (parseFloat(newton) * 100 / 33).lessThanAbsZero('celsius');
			return celsius;
		},
		fromCelsius: (celsius) => {
			// [°N] = [°C] × ​33⁄100
			const newton = (parseFloat(celsius) * 33 / 100).lessThanAbsZero('newton');
			return newton;
		}
	},
	'reaumur': {
		scale: 'Réaumur',
		unit: '°Ré',
		abs0: -218.52,
		toCelsius: (reaumur) => {
			// 	[°C] = [°Ré] × ​5⁄4
			const celsius = (parseFloat(reaumur) * 5 / 4).lessThanAbsZero('celsius');
			return celsius;
		},
		fromCelsius: (celsius) => {
			// [°Ré] = [°C] × ​4⁄5
			const reaumur = (parseFloat(celsius) * 4 / 5).lessThanAbsZero('reaumur');
			return reaumur;
		}
	},
	'romer': {
		scale: 'Rømer',
		unit: '°Rø',
		abs0: -135.9,
		toCelsius: (romer) => {
			// [°C] = ([°Rø] − 7.5) × ​40⁄21
			const celsius = ((parseFloat(romer) - 7.5) * 40 / 21).lessThanAbsZero('celsius');
			return celsius;
		},
		fromCelsius: (celsius) => {
			// [°Rø] = [°C] × ​21⁄40 + 7.5
			const romer = ((parseFloat(celsius) * 21 / 40) + 7.5).lessThanAbsZero('romer');
			return romer;
		}
	}
};


const convert = (degC) => {
	let temps = {};
	_.forIn(temperatures, (value, key) => {
		temps[key] = {
			scale: value.scale,
			unit: value.unit,
			value: parseFloat(temperatures[key].fromCelsius(degC).toFixed(precision))
		};
	});
	return temps;
};

module.exports = {
	celsiusTo: (degC) => {
		return convert(temperatures.celsius.toCelsius(degC));
	},
	delisleTo: (degD) => {
		return convert(temperatures.delisle.toCelsius(degD));
	},
	fahrenheitTo: (degF) => {
		return convert(temperatures.fahrenheit.toCelsius(degF));
	},
	kelvinTo: (degK) => {
		return convert(temperatures.kelvin.toCelsius(degK));
	},
	newtonTo: (degN) => {
		return convert(temperatures.newton.toCelsius(degN));
	},
	rankineTo: (degR) => {
		return convert(temperatures.rankine.toCelsius(degR));
	},
	reaumurTo: (degRe) => {
		return convert(temperatures.reaumur.toCelsius(degRe));
	},
	romerTo: (degRo) => {
		return convert(temperatures.romer.toCelsius(degRo));
	},
	getAllScales: () => {
		return _.values(temperatures).map(temp => temp.scale).sort();
	},
	getAllUnits: () => {
		return _.values(temperatures).map(temp => temp.unit).sort();
	},
	getUnitFromScale: (scale) => {
		const key = scale.toLowerCase().replace(/é/g,'e').replace(/ø/g,'o');
		return temperatures[key].unit || false;
	},
	getScaleFromUnit: (unit) => {
		const unitRe = new RegExp(unit.replace(/e/,'é').replace(/o/,'ø').replace(/^°/,'') +'$','i')
		return _(_
			.chain(temperatures)
			.values()
			.filter( obj => unitRe.test(obj.unit) )
			.value()
			.concat({})[0])
			.get('scale', false);
	},
	getAbsZeroFromScale: (scale) => {
		const key = scale.toLowerCase().replace(/é/g,'e').replace(/ø/g,'o');
		return temperatures[key].abs0 || false;
	}
};
