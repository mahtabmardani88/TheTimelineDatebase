const express=require("express");
const app=express();
const routes=require('../configuration/routes');
require('../mongoose')
app.set("view engine","ejs");
app.use(express.urlencoded({extended:true}));
app.use(routes);
const port =3000;
app.listen(port,console.log(`app running on ${port}`));