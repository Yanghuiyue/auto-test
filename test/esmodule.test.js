import {expect} from 'chai';
import {esModuleTest} from '../src/js/esmodule.js'

//file level
describe('ES Module Test',function() {
  //function level
  describe('test Test',function() {
    // this.timeout(1000); //设置过期时间
    //case level
    it('valid es module work', ()=> {
      expect(esModuleTest()).to.be.a('string')
    })
  })
})

