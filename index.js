const express= require('express');
const app = express();
const bodyparser = require('body-parser');
const consign = require('consign');
const validator = require('express-validator')
const port = process.env.PORT || 3000;

app.use(bodyparser.urlencoded({extended:true}));
app.use(bodyparser.json());
app.use(validator());


consign().include('routers').include('utils').into(app)

app.listen(port,()=>{
    console.log(`Server running at port ${port}`);
})