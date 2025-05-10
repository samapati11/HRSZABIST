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



        app.get('/employee42',async(req,res)=>{
            try{
                const result=await pool.query('SELECT e.employee_id, e.first_name, e.last_name, jh.start_date, jh.end_date, jh.job_id, jh.department_id FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id limit 2');
                res.json(result.rows);
            }catch(err){
                res.status(500).json({error:err.message});
            }});

            app.get('/jobRecords50',async(req,res)=>{
            try{
                const result=await pool.query('select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title,d.department_id,d.department_name,l.location_id,city,postal_code,c.country_id,c.country_name from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id left outer join departments d on jh.department_id = d.department_id inner join locations l on d.location_id = l.location_id  inner join countries c on l.country_id = c.country_id limit 3;');
                res.json(result.rows);
            }catch(err){
                res.status(500).json({error:err.message});
            }});
            app.get('/regions51',async(req,res)=>{
            try{
                const result=await pool.query('select r.region_id,r.region_name, c.country_id,c.country_name,l.location_id,l.postal_code,l.city from regions r inner join countries c on r.region_id = c.region_id inner join locations l on c.country_id =l.country_id limit 2'
);
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