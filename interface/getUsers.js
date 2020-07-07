const { expect ,assert} = require('chai');
const axios = require('axios');

describe(`1 get data from jsonplaceholder`,function(){
    this.timeout('10s');
    let users = [];
    before(async function() {
        try {
            users = await axios.get('http://jsonplaceholder.typicode.com/users');
        } catch (error) {
            console.log(error);
        }
        
    });
    it(`1.1、The number of users should be 10 .` ,function(done){
        //取到用户数是否大于5个
        expect(users && users.data ? users.data.length : 0).to.greaterThan(25);
        //expect(users ?. data ?. length).to.greaterThan(5);
        done();
    });

    it(`1.2、The first user name should be Leanne Graham.` ,function(done){
        //第一个用户的name是否为Leanne Graham
        let firstUser = users.data[0];
        expect(firstUser['name']).equal('Leanne Graham');
        done();
    });
});

// describe(`2 post ` ,function(){
//     this.timeout('30s');

//     it(`2.1 post new user `,function(done){
//         axios.post('https://jsonplaceholder.typicode.com/posts/1', {
//             id: 1,
//             title: 'foo',
//             body: 'bar',
//             userId: 1
//         })
//         .then(response => {
//             //成功检查response statues是否为200
//             expect(response.status).equal(200);
//             console.log('Upload user information successfully'.response);
//         })
//         .catch(err => {
//             //失败输出状态码
//             expect.fail('post user fail ! response status:' + err.response.status);            
//             console.log('Failed to upload user information!');
//         })
//         .finally(() => {
//             //console.log('finally');
//             done();
//         });
        
//     });
// });

