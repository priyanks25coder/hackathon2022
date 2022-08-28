var express = require('express')
var cors = require('cors')
const client = require('./db-config');

require('dotenv').config()

const PORT = process.env.PORT
const app = express()

app.use(express.json())
app.use(express.urlencoded({extended:true}))
app.use(cors({origin:true,credentials:true}))

app.get('/search',async(req,res)=>{
    try{
        const fields = req.body.fields;
        const vals = req.body.values;
        var queryString = "";
        const fieldvalstr = []
        fields.forEach((field,index) => {
            fieldvalstr.push((field+"="+vals[index]));
        });
        var queryString = fieldvalstr.join(' AND ');
        const favCandidates = await client.query(`SELECT * FROM hackathon.candidates WHERE ${queryString}`);
        const resdata = favCandidates.data;
        res.status(200).send(resdata).end();
    }
    catch(err){
        res.status(500).send(err.message).end();
    }
})

app.listen(PORT,()=>{
    console.log(`App listening on ${PORT}`)
})