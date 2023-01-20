import express from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import bodyParser from 'body-parser';

import Connection from './database/db.js';
import Router from './routes/route.js';//here we import all the router 
// The dotenv is a zero-dependency module that loads environment variables from a . env file into process. env
//It used to initialize the dotenv file
dotenv.config();

const app = express();
//this is to prevent browser cor error
app.use(cors());
app.use(bodyParser.json({extended: true}))
app.use(bodyParser.urlencoded({extended: true}))
app.use('/',Router);//here we use the router

const PORT=8000;
app.listen(PORT,()=>{
    console.log(`Server is started on the PORT ${PORT}`);
});
const USERNAME=process.env.DB_USERNAME;
const PASSWORD=process.env.DB_PASSWORD;
Connection(USERNAME,PASSWORD);