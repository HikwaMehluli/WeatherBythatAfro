const path = require('path');

module.exports = {
	entry: './js/script.js',
	output: {
		filename: 'app.js',
		path: path.resolve(__dirname, 'js')
	}
}