const express = require('express');
const router = express.Router();
const person = require('./person.model');

router.get('/:id', (req,res)=>{
    let id = req.params["_id"];
    person.findOne({"_id":id}, (err,data)=>{
        if(err){
            throw err;
        }else{
            res.json(data);
        }
    })
})

router.get('/', (req,res)=>{
    person.find({}, (err,data)=>{
        if(err){
            throw err;
        }else{
            res.json(data);
        }
    })
})

router.post('/', (req,res)=>{
    person.create(req.body, (err, data)=>{
        if(err){
            throw err;
        }else{
            // res.send("posted!")
            person.findOne(req.body).then((resolve)=>{
                res.json(resolve);
            })
        }
    })
})

router.put('/', (req,res)=>{
    let query = req.body;
    person.updateOne( 
        {
            "_id":query._id
        },{
            "$set":query
        },
        (err, data)=>{
            if(err){
                throw err;
            }else{
                // res.send("updated!")
                person.findOne({"_id":query._id}).then((resolve)=>{
                    res.json(resolve);
                })
            }
        }
    )
})

router.delete('/', (req,res)=>{
    let query = req.body;
    person.deleteOne(
        {
            "_id":query._id
        },
        (err)=>{
            if(err){
                throw err;
            }else{
                res.send(true);
            }
        }
    )
})

module.exports = router;