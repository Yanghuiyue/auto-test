const expect = require('chai').expect;

const {sum,multi} = require('../src/js/calculate.js');

//file level
describe("calculate.js test", ()=>{
  //function level
  describe("Sum test",() => {
    //case level
    it('should return 3 when inputs are 1 and 2',() => {
      expect(sum(1,2)).to.be.equal(3);
    })
    //异常情况单元测试
    it('should return error when input is not number', () => {
      expect(sum('1','2')).to.be.an('error');
    })
    it('should return 0 when there\'s no input', () => {
      expect(sum()).to.be.equal(0);
    })
  })
  //function level
  describe("Multi test",() => {
    it('should return 2 when inputs are 1 and 2',() =>{
      expect(multi(1,2)).to.be.equal(2);
    })
  })
})