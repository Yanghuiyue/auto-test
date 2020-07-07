const Nightmare = require('nightmare')
const chai = require('chai')
const nightmare = Nightmare({ show: true /**, waitTimeout: 3000 */})
const expect = chai.expect

describe(`nec uat admin test`, function(){
  it(`1 login test`,function(){
    nightmare
    .goto('https://admin.nec.lenovouat.com/login.html')
    .type('#userid', 'yanghy12') // your itcode
    .type('#password','3333@8') // your password
    .click('#login')
    .wait('#sideList')
    .evaluate(() =>{document.querySelectorAll('#sideList').length} )
    .end()
    .then(text => {
        expect(text).to.greaterThan(0);
        console.log('登录成功：' + text);
    })
    .catch(error => {
      console.error('登录失败:', error);
    })
  });
});
