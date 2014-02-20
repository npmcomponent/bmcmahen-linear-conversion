*This repository is a mirror of the [component](http://component.io) module [bmcmahen/linear-conversion](http://github.com/bmcmahen/linear-conversion). It has been modified to work with NPM+Browserify. You can install it using the command `npm install npmcomponent/bmcmahen-linear-conversion`. Please do not open issues or send pull requests against this repo. If you have issues with this repo, report it to [npmcomponent](https://github.com/airportyh/npmcomponent).*

# linear-conversion

A basic linear conversion utlity. Scales a number from an old range to a new range.

## Installation

	$ component install bmcmahen/linear-conversion

## API

	// Import the module
	var linearConversion = require('bmcmahen-linear-conversion');

	// Create your scale, with a domain and range
	var scale = linearConversion([0, 10], [0, 100]);
	alert(scale(1)); // alerts 10

## License

	MIT
