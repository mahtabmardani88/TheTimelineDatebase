const mongoose=require("mongoose");
mongoose.connect('https://cloud.mongodb.com/v2/65f1c93f34ffe33d4c98b921#/setup/personalization')
.then(() => console.log(`DB is connected`))
.catch(err => console.log(err))
const schema =   mongoose.Schema

const articleSchema = new schema({
    text: {
         type: String,
         require: true,
         minlength: 25,
    }})

module.exports = mongoose.model('article', articleSchema)