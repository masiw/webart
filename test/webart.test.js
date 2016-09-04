
var chai = require('chai')
  , should = chai.should()
  , webart = require('../src/webart')

describe('webart', function() {
  
  it('should return true', function() {
    webart().should.be.true
  })
})
