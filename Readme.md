
# scale-bilinear

The d3 bilinear scale (with alterations), extracted for use in non-d3 projects.

## Installation

		$ component install bmcmahen/scale-bilinear

## API

	// Import the module
	var scaleBilinear = require('bmcmahen-scale-bilinear');

	// Create your scale, with a domain and range
	var scale = scaleBilinear([0, 10], [0, 100]);
	alert(scale(1)); // alerts 10

## License

	MIT
