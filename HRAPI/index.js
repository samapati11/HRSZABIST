const express = require('express');
const cors = require('cors');
const pool= require('./db');
require('dotenv').config();




const app=express();
app.use(cors());
app.use(express.json());

app.get('/',async(requestAnimationFrame,res)=>{

    try{
        res.json('WELCOME TO HR API');
    }
    catch(err){
        res.status(500).json({error:err.message})
    }
});

app.get('/emp',async(req,res)=>{
    try{
        const result=await pool.query('select * from employees');
        res.json(result.rows);
    }catch(err){
        res.status(500).json({error:err.message});
    }});

    app.get('/empTotal',async(req,res)=>{
        try{
            const result=await pool.query('select count(employee_id) from employees');
            res.json(result.rows);
        }catch(err){
            res.status(500).json({error:err.message});
        }});

        app.get('/countr',async(req,res)=>{
            try{
                const result=await pool.query('select * from countries');
                res.json(result.rows);
            }catch(err){
                res.status(500).json({error:err.message});
            }});

            app.get('/region',async(req,res)=>{
                try{
                    const result=await pool.query('select count(*) from regions');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
            
                
            app.get('/Dept',async(req,res)=>{
                try{
                    const result=await pool.query('select count(*) from departments');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                app.get('/Dept',async(req,res)=>{
                    try{
                        const result=await pool.query('select count(*) from departments');
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
        


const PORT =process.env.PORT;
app.listen(PORT,()=>{
    console.log(`connect successfully...on PORT ${PORT}`);

});