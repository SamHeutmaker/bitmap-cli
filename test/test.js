const client = require(__dirname + "/../index.js");
const helpers = require(__dirname + "/../node_modules/bitmap-helpers/index.js");
const transformers = require(__dirname + "/../node_modules/bitmap-helpers/node_modules/bitmap-transformations/index.js");
const expect = require('chai').expect;

describe('The tranformers' , () => {
	it('should return grey scale properly' , () => {
		expect( transformers.grayscale([10,20,30]) ).to.eql([20,20,20]);
	})
});