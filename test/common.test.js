let chai = require('chai');
let chaiHttp = require('chai-http');
const { italic } = require('chalk');
let expect = chai.expect;

const url = "http://localhost:8007/api/person";

chai.use(chaiHttp);

// get all

describe('Testing my get Api', ()=>{
    it('should be return status 200 for /', (done)=>{
        chai.request(url).get('/').then((res)=>{
            expect(res).to.have.status(200);
            done();
        })
        .catch((err)=>{
            throw err;
        });
    })
})


//get parameter

var idArray = ["605cc2856bd73387e8364326", "605cc2a76bd73387e8364327", "605cc2b26bd73387e8364328"];

for(let id of idArray){
    describe('Testing get API for each data', ()=>{
        it('should return status 200 for each data /:id', (done)=>{
            chai.request(url).get('/' + idArray[0]).then((res)=>{
                expect(res).to.have.status(200);
                done();
            }).catch((err)=>{
                throw err;
            })
        })
    })
}

//posting

describe('Testing my post Api', ()=>{
    it('should be return status 200 for posting', (done)=>{
        chai.request(url).post('/').set('content-type', 'application/json').send({
            "name":"test",
            "age":5
        }).then(res => {
            expect(res).to.have.status(200);
            done();
        }).catch((err)=>{
            throw err;
        });
    })
})

//Negative cases below

describe('Testing my get Api', ()=>{
    it('should return null if no id exist', (done)=>{
        chai.request(url).get('/1').then((res)=>{
            expect(res.body).to.be.null;
            done();
        })
        .catch((err)=>{
            throw err;
        });
    })
})
