const mongoose = require('mongoose');

var Schema = mongoose.Schema;

var personSchema = new Schema({
    name:{type:String},
    age:{type:Number},
},
{
    timestamps:true
},
{
    collection:"persons"
})

module.exports = mongoose.model('person', personSchema);