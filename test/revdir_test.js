'use strict';

var grunt = require('grunt');

/*
  ======== A Handy Little Nodeunit Reference ========
  https://github.com/caolan/nodeunit

  Test methods:
    test.expect(numAssertions)
    test.done()
  Test assertions:
    test.ok(value, [message])
    test.equal(actual, expected, [message])
    test.notEqual(actual, expected, [message])
    test.deepEqual(actual, expected, [message])
    test.notDeepEqual(actual, expected, [message])
    test.strictEqual(actual, expected, [message])
    test.notStrictEqual(actual, expected, [message])
    test.throws(block, [error], [message])
    test.doesNotThrow(block, [error], [message])
    test.ifError(value)
*/

exports.rev = {
  setUp: function(done) {
    // setup here if necessary
    done();
  },
  default_options: function(test) {
    test.expect(1);

    var assetsExists = grunt.file.exists('tmp/a8aadb66-assets');
    var imagesExists = grunt.file.exists('tmp/72f5dc3f-images');
    test.ok(assetsExists, '8 character MD5 hash prefix of assets');
    test.ok(imagesExists, '8 character MD5 hash prefix of images');

    test.done();
  },
  custom_options: function(test) {
    test.expect(1);

    var assetsExists = grunt.file.exists('tmp/b6e3-assets');
    var imagesExists = grunt.file.exists('tmp/1e43-images');
    test.ok(assetsExists, '4 character SHA-1 hash prefix of assets');
    test.ok(imagesExists, '4 character SHA-1 hash prefix of images');

    test.done();
  },
  exclusion_options: function(test) {
    test.expect(1);

    var assetsExists = grunt.file.exists('tmp/a8aadb66-assets');
    var imagesExists = grunt.file.exists('tmp/7653cca1-images');
    test.ok(assetsExists, '8 character MD5 hash prefix of assets');
    test.ok(imagesExists, '8 character MD5 hash prefix of images with exclusions');

    test.done();
  }
};
