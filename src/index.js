// require('dotenv').config({path:'./env'})

import dotenv from "dotenv"
dotenv.config({
    path:'./env'
});

import connectDB from "./db/index.js";


connectDB()
.then(()=>{
    application.listen(process.env.PORT || 8000,()=>{

    app.on("error",(error)=>{
        console.log("ERRR:",error);
        throw error
    })
        console.log(`Server is running at port : ${process.env.PORT}`);
    })
})
.catch((err)=>{
    console.log("MongoDB connection failed !!!",err);
});




/*

import express from "express"

// iffe , we usually put semicolon before this incase we haven't put in previous line which can cause trouble so better we start iffe with a semicolon;
;(async()=>{
    try {
        await mongoose.connect(`${process.env.MONGODB_URI}/${DB_NAME}`)
        app.on("error",(error)=>{
            console.log("ERRR:",error);
            throw error
        })

        app.listen(process.env.PORT,()=>{
            console.log(`App is listening on port ${process.env.PORT}`)
        })
    } catch (error) {
        console.error("ERROR",error)
        throw err
    }
})()

*/