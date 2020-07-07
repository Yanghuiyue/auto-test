const expect = require('chai').expect;

const {getApi} = require('../src/js/async.js');

//file level
describe('Async Test',function() {
  //function level
  describe('getApi Test',function() {
    // this.timeout(1000); //设置过期时间
    //case level
    it('valid Api return message', async () => {
      let res = await getApi();
      expect(res).to.not.have.property("message"); //判断对象属性
    })
  })
})