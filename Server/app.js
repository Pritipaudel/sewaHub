const express =require ('express');
const { connectDatabase } = require('./database/database');
const cors = require('cors');
const { connectiontoDatabase } = require('./database/database');
 const authRoutes= require('./route/authRoute');
 const servicesRoutes =require('./route/ServiceRoute')
 const  profileprovider=require('./route/providerprofile')
 const providerRequestRoutes=require('./controller/provider/providerrequestController')
 const RequestShowing =require('./route/providerrequest')
// const createQuote  = require('../backend/routes/quoteRoute');
// const getQuote =require('./routes/admin/getQuoteroute');

const app= express();

app.use(express.json());

app.use(express.urlencoded({ extended: true }));
require("dotenv").config()
app.use(cors());
app.get('/',(req,res)=>{
    res.status(200).json({
        message:"i am alive"
    })
})
//database conection
connectiontoDatabase();
//routes
app.use('',authRoutes)
app.use('',servicesRoutes)
app.use('',profileprovider)
app.use('', providerRequestRoutes);
app.use('',RequestShowing);
const PORT= process.env.PORT
app.listen(PORT,()=>{
   console.log(`app is running on port number ${PORT}`) 
})