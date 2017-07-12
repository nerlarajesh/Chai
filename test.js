var mocha = require('mocha');
var describe = mocha.describe;
var it = mocha.it;
var assert = require('chai').assert;
var expect = require('chai').expect;
var should = require('chai').should();
describe('test1',function(){
    it('return lowe case of string',function(){
        var word= 5; //use 'hellow world' for string test cases testing.
        // expect(word).to.be.a('string');
        // expect(word).to.equal('hello world');
        // word.should.be.a('string');
        // word.should.equal('hello world');
        // expect(word).to.have.length.within(5,15);
        // assert.typeOf(word,'string');
        word.should.be.at.most(5);
    })
})