var client = require(__dirname + "index.js");
var helpers = require(__dirname + "/node_modules/bitmap-helpers/index.js");
var tranformers = require(__dirname + "/node_modules/bitmap-helpers/node_modules/bitmap-transformationsindex.js");

var expect = require('chai').expect;



describe('The buffer' , () => {
	it('should load its length' , () => {
		expect(index(test)).to.eql("")
	})

});

describe('The helpers' , () => {
	it('should ' , () => {
		expect( )
	});
});


describe('The tranformers: ' , () => {
	it('should return grey scale properly:' , () => {
		expect( transformers.greyScale([10,20,30]) ).to.eql([20,20,20]);
	})
});