var assert = require('assert');
const basicVariables = require('./basicVariables')

describe('BASIC VARIABLES', function() {
  describe('Testing the value of the variable', function() {
    it('Should return Hello World!', function() {
        assert.equal(basicVariables(),'Hello World!');
    });

  });
});