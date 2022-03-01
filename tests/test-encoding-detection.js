var fs        = require('fs')
  ,	assert = require('assert')
  , path      = require('path')
  , XmlStream = require('../lib/xml-stream')
  ;

describe('XmlStream', function() {
	var stream = fs.createReadStream(path.join(__dirname, '../examples/encoding.xml'));

	it('should correctly detect encoding', function(done) {
		var xml = new XmlStream(stream);
		let test;

		xml.on('endElement: node', function(node) {
			text = node.$text;
		});

		xml.on('end', function () {
			assert.equal(text, 'текст');
			done();
		});

		xml.on('error', function (err) {
			done(err);
		});
	});
});