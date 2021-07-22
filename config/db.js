// getting-started.js
const mongoose = require('mongoose');

function dbConfig(){
    try {
        mongoose.connect(process.env.DATABASE_URL, {
            useNewUrlParser: true, 
            useUnifiedTopology: true
        });
        console.log('Connected to Database')
    } catch (error) {
        console.log(error)
        
    }
}
module.exports=dbConfig
