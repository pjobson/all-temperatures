# all-temperatures

Basic module for converting from and to Fahrenheit, Kelvin, Celsius, Rankine, Delisle, Newton, Réaumur, and Rømer.

There are around 70 temperature scales, most of which no one uses any more, you can find a full list at [Curious Notions](http://www.curiousnotions.com/temperature-conversion/).

## Methods

Use:

    const allTemp = require('all-temperatures');

### `celsiusTo`

<https://en.wikipedia.org/wiki/Celsius>

Converts from Celsius to all other temperature types.

    allTemp.celsiusTo(40);
    
    // returns
	{
		celsius: { 'scale': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'scale': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'scale': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'scale': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'scale': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'scale': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'scale': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'scale': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	}
	
For example if you wanted to convert Celsius to Fahrenheit including the unit mark:

    const res = allTemp.celsiusTo(40);
    console.log( res.fahrenheit.value + res.fahrenheit.unit );
    // returns
    104°F
   

### `delisleTo`

<https://en.wikipedia.org/wiki/Delisle_scale>

Converts from Delisle to all other temperature types.

    allTemp.delisleTo(90);
    
    // returns
	{
		celsius: { 'scale': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'scale': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'scale': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'scale': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'scale': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'scale': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'scale': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'scale': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	}


### `fahrenheitTo`

<https://en.wikipedia.org/wiki/Fahrenheit>

Converts from Fahrenheit to all other temperature types.

    allTemp.fahrenheitTo(104);
    
    // returns
	{
		celsius: { 'scale': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'scale': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'scale': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'scale': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'scale': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'scale': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'scale': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'scale': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	}

### `kelvinTo`

<https://en.wikipedia.org/wiki/Kelvin>

Converts from Kelvin to all other temperature types.

    allTemp.kelvinTo(313.15);
    
    // returns
	{
		celsius: { 'scale': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'scale': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'scale': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'scale': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'scale': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'scale': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'scale': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'scale': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	}

### `newtonTo`

<https://en.wikipedia.org/wiki/Newton_scale>

Converts from Newton to all other temperature types.

    allTemp.newtonTo(13.2);
    
    // returns
	{
		celsius: { 'scale': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'scale': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'scale': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'scale': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'scale': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'scale': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'scale': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'scale': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	}


### `rankineTo`

<https://en.wikipedia.org/wiki/Rankine_scale>

Converts from Rankine to all other temperature types.

    allTemp.rankineTo(563.67);
    
    // returns
	{
		celsius: { 'scale': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'scale': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'scale': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'scale': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'scale': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'scale': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'scale': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'scale': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	}

### `reaumurTo`

<https://en.wikipedia.org/wiki/Réaumur_scale>

Converts from Réaumur to all other temperature types.

    allTemp.reaumurTo(32);
    
    // returns
	{
		celsius: { 'scale': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'scale': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'scale': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'scale': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'scale': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'scale': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'scale': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'scale': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	}

### `romerTo`

<https://en.wikipedia.org/wiki/Rømer_scale>

Converts from Rømer to all other temperature types.

    allTemp.romerTo(28.5);
    
    // returns
	{
		celsius: { 'scale': 'Celsius', 'unit': '°C', 'value': 40 },
		delisle: { 'scale': 'Delisle', 'unit': '°D', 'value': 90 },
		fahrenheit: { 'scale': 'Fahrenheit', 'unit': '°F', 'value': 104 },
		kelvin: { 'scale': 'Kelvin', 'unit': 'K', 'value': 313.15 },
		newton: { 'scale': 'Newton', 'unit': '°N', 'value': 13.2 },
		rankine: { 'scale': 'Rankine', 'unit': '°R', 'value': 563.67 },
		reaumur: { 'scale': 'Réaumur', 'unit': '°Ré', 'value': 32 },
		romer: { 'scale': 'Rømer', 'unit': '°Rø', 'value': 28.5 }
	}

### `getAllNames`

Returns an array of temperature names.

	allTemp.getAllNames();
	
	// returns
	[
		'Celsius',
		'Fahrenheit',
		'Kelvin',
		'Rankine',
		'Delisle',
		'Newton',
		'Réaumur',
		'Rømer'
	]

### `getAllUnits`

Returns an array of temperature units.

	allTemp.getAllUnits();
	
	// returns
	[ '°C', '°F', 'K', '°R', '°D', '°N', '°Ré', '°Rø' ]


### `getUnitFromName`

Returns the unit from the temperature name.

	allTemp.getUnitFromName('Celsius');
	
	// returns
	°C


### `getNameFromUnit`

Returns the name from the temperature unit.

	allTemp.getNameFromUnit('°C');
	
	// returns
	Celsius
