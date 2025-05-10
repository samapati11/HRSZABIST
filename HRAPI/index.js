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
             app.get('/43',async(req,res)=>{
                    try{
                        const result=await pool.query('select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from employees e inner join job_history jh on e.employee_id = jh.employee_id  inner join  departments d on e.department_id = d.department_id limit 3;');
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
app.get('/44',async(req,res)=>{
                    try{
                        const result=await pool.query(`select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from employees e inner join job_history jh on e.employee_id = jh.employee_id  inner join  departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id limit 3`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
                    app.get('/45',async(req,res)=>{
                    try{
                        const result=await pool.query(`select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from employees e inner join job_history jh on e.employee_id = jh.employee_id  inner join  departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id  inner join countries c on l.country_id = c.country_id limit 3`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});

                    app.get('/46',async(req,res)=>{
                    try{
                        const result=await pool.query(`select e.employee_id, e.first_name,e.last_name,jh.job_id,jh.start_date, d.department_id, d.department_name from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  departments d on jh.department_id = d.department_id limit 3`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
        app.get('/47',async(req,res)=>{
                    try{
                        const result=await pool.query(`select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id limit 3`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
                    app.get('/48',async(req,res)=>{
                    try{
                        const result=await pool.query(`select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title,d.department_id,d.department_name from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id left outer join departments d on jh.department_id = d.department_id limit 3`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});

                     app.get('/49',async(req,res)=>{
                    try{
                        const result=await pool.query(`select e.employee_id, e.first_name,e.last_name,jh.start_date, j.job_id,j.job_title,d.department_id,d.department_name,l.location_id,city,postal_code from job_history jh left outer join employees e on jh.employee_id = e.employee_id  left outer join  jobs j on jh.job_id = j.job_id left outer join departments d on jh.department_id = d.department_id inner join locations l on d.location_id = l.location_id limit 3`);
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

            app.get('/regions52',async(req,res)=>{
            try{
                const result=await pool.query('select r.region_id,r.region_name, c.country_id,c.country_name,l.location_id,l.city from countries c inner join regions r on c.region_id = r.region_id inner join locations l on c.country_id =l.country_id limit 2');

                res.json(result.rows);
            }catch(err){
                res.status(500).json({error:err.message});
            }});
             app.get('/location53',async(req,res)=>{
            try{
                const result=await pool.query('select r.region_id,r.region_name, c.country_id,c.country_name,l.location_id,l.postal_code,l.city from regions r inner join countries c on r.region_id = c.region_id inner join locations l on c.country_id =l.country_id limit 2');

                res.json(result.rows);
            }catch(err){
                res.status(500).json({error:err.message});
            }});

            app.get('/dept54',async(req,res)=>{
            try{
                const result=await pool.query('select e.employee_id, e.first_name,e.last_name,d.department_id, d.department_name,l.state_province, l.location_id,l.city  from employees e inner join    departments d on  e.department_id = d.department_id inner join   locations l on d.location_id = l.location_id limit 2');

                res.json(result.rows);
            }catch(err){
                res.status(500).json({error:err.message});
            }});
            app.get('/emp55',async(req,res)=>{
            try{
                const result=await pool.query('select e.employee_id, e.first_name,e.last_name,d.department_id, d.department_name,l.state_province, l.location_id,l.city ,c.country_id,c.country_name from employees e inner join departments d on  e.department_id = d.department_id inner join   locations l on d.location_id = l.location_id inner join countries c on  l.country_id = c.country_id limit 2');

                res.json(result.rows);
            }catch(err){
                res.status(500).json({error:err.message});
            }});
 app.get('/emp56',async(req,res)=>{
            try{
                const result=await pool.query('SELECT e.employee_id AS employee_id, e.first_name AS employee_first_name,e.last_name AS employee_last_name,e.manager_id AS manager_id, m.first_name AS manager_first_name,m.last_name AS manager_last_name,d.department_id AS department_id,d.department_name AS department_name,l.location_id AS location_id,l.city AS city FROM employees e INNER JOIN employees m ON e.manager_id = m.employee_id INNER JOIN departments d ON e.department_id = d.department_id INNER JOIN locations l ON d.location_id = l.location_id LIMIT 2');

                res.json(result.rows);
            }catch(err){
                res.status(500).json({error:err.message});
            }});
            app.get('/emp57',async(req,res)=>{
                try{
                    const result=await pool.query('select e.employee_id,e.first_name, e.last_name,j.job_title,j.job_id,d.department_id,d.department_name,l.location_id,l.city from employees e inner join jobs j on e.job_id = j.job_id inner join departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id limit 1');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                 app.get('/Dept58',async(req,res)=>{
                try{
                    const result=await pool.query('select e.employee_id,e.first_name, e.last_name,j.job_title,j.job_id,d.department_id,d.department_name,m.manager_id,m.first_name from employees e inner join employees m on e.manager_id = m.employee_id inner join jobs j on e.job_id = j.job_id inner join departments d on e.department_id = d.department_id  limit 1'
);
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
app.get('/Dept59',async(req,res)=>{
                try{
                    const result=await pool.query('select e.employee_id,e.first_name, e.last_name,j.job_title,j.job_id,d.department_id,d.department_name,m.manager_id,m.first_name,l.location_id,l.city from employees e inner join employees m on e.manager_id = m.employee_id inner join jobs j on e.job_id = j.job_id inner join departments d on e.department_id = d.department_id inner join locations l on d.location_id = l.location_id limit 1');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});

                app.get('/country60',async(req,res)=>{
                try{
                    const result=await pool.query('select c.country_id,c.country_name,r.region_id,r.region_name from countries c inner join regions r on c.region_id = r.region_id where r.region_id = 1 limit 2');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                app.get('/61',async(req,res)=>{
                try{
                    const result=await pool.query(`select  d.department_id,d.department_name, l.location_id, l.city  from departments d inner join locations l on d.location_id = l.location_id where city like 'N%'`);
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                app.get('/62',async(req,res)=>{
                try{
                    const result=await pool.query(`select e.employee_id, e.first_name, e.last_name,d.department_id,e.manager_id,e.commission_pct from employees e inner join departments d on  e.department_id = d.department_id inner join employees m on d.manager_id = m.employee_id  where m.commission_pct >  0.15 limit 2`);
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                app.get('/63',async(req,res)=>{
                try{
                    const result=await pool.query('SELECT DISTINCT m.employee_id, m.first_name, m.last_name, m.email, m.job_id,m.manager_id  frOM employees e JOIN employees m ON e.manager_id = m.employee_id limit 2');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                app.get('/64',async(req,res)=>{
                try{
                    const result=await pool.query(`select l.postal_code, l.location_id,c.country_name, c.country_id,r.region_name from locations l inner join countries c  on l.country_id = c.country_id inner join regions r on  c.region_id = r.region_id WHERE    r.region_name = 'Asia'limit 2`

                    );
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                 app.get('/65',async(req,res)=>{
                try{
                    const result=await pool.query('SELECT  d.department_name ,d.department_id FROM employees e JOIN departments d ON e.department_id = d.department_id WHERE e.commission_pct < (SELECT AVG(commission_pct) FROM employees) limit 2');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});

                app.get('/66',async(req,res)=>{
                try{
                    const result=await pool.query('SELECT DISTINCT j.job_title FROM employees e JOIN jobs j ON e.job_id = j.job_id WHERE e.salary > (SELECT AVG(e2.salary) FROM employees e2 WHERE e2.department_id = e.department_id)');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
app.get('/67',async(req,res)=>{
                try{
                    const result=await pool.query('SELECT employee_id FROM employees WHERE department_id IS NULL');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
             app.get('/68',async(req,res)=>{
                try{
                    const result=await pool.query('SELECT DISTINCT e.first_name, e.last_name FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id WHERE e.employee_id IN ( SELECT employee_id  FROM job_history GROUP BY employee_id HAVING COUNT(*) > 1)');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                app.get('/69',async(req,res)=>{
                try{
                    const result=await pool.query('select count(department_id) from employees group by department_id order by  department_id  ');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                app.get('/70',async(req,res)=>{
                try{
                    const result=await pool.query('select sum(salary) from employees e inner join jobs j on e.job_id = j.job_id group by  job_title limit 3');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
             app.get('/71',async(req,res)=>{
                try{
                    const result=await pool.query('SELECT d.department_id, COALESCE(ROUND(AVG(e.commission_pct) * 100, 2), 0) AS avg_commission_percentage FROM  employees e INNER JOIN departments d  ON e.department_id = d.department_id GROUP BY d.department_id ORDER BY avg_commission_percentage DESC LIMIT 3');
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                 app.get('/72',async(req,res)=>{
                try{
                    const result=await pool.query(`SELECT e.first_name, e.last_name,  d.department_name,  l.city,  l.state_province FROM  employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id WHERE e.first_name LIKE '%z%'`);
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
                
            app.get('/73',async(req,res)=>{
                try{
                    const result=await pool.query(`SELECT j.job_title, d.department_name, CONCAT(e.first_name, ' ', e.last_name) AS full_name, jh.start_date FROM job_history jh JOIN jobs j ON jh.job_id = j.job_id JOIN departments d ON jh.department_id = d.department_id JOIN employees e ON jh.employee_id = e.employee_id WHERE jh.start_date >= '1993-01-01' AND jh.end_date <= '1997-08-31'`);
                    res.json(result.rows);
                }catch(err){
                    res.status(500).json({error:err.message});
                }});
 app.get('/74',async(req,res)=>{
                    try{
                        const result=await pool.query('SELECT co.country_name, l.city, COUNT(d.department_id) AS department_count FROM departments d JOIN locations l ON d.location_id = l.location_id JOIN countries co ON l.country_id = co.country_id WHERE d.department_id IN (SELECT department_id FROM employees GROUP BY department_id HAVING COUNT(employee_id) >= 2) GROUP BY co.country_name, l.city');
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
                     app.get('/75',async(req,res)=>{
                    try{
                        const result=await pool.query(`SELECT CONCAT(e.first_name, ' ', e.last_name) AS full_name, j.job_title, jh.start_date, jh.end_date FROM employees e JOIN job_history jh ON e.employee_id = jh.employee_id JOIN jobs j ON jh.job_id = j.job_id WHERE e.commission_pct IS NULL ORDER BY jh.end_date DESC limit 3`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
               app.get('/77',async(req,res)=>{
                    try{
                        const result=await pool.query(`SELECT CONCAT(e.first_name, ' ', e.last_name) AS full_name, e.salary, e.department_id FROM employees e WHERE e.salary = (SELECT MIN(salary) FROM employees WHERE department_id = e.department_id) limit 2`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
 app.get('/78',async(req,res)=>{
                    try{
                        const result=await pool.query(`SELECT * FROM employees WHERE salary = ( SELECT DISTINCT salary FROM employees ORDER BY salary DESC LIMIT 1 OFFSET 2`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});

                     app.get('/79',async(req,res)=>{
                    try{
                        const result=await pool.query(`SELECT e.employee_id, CONCAT(e.first_name, ' ', e.last_name) AS full_name, e.salary FROM employees e WHERE e.salary > (SELECT AVG(salary) FROM employees) AND e.department_id IN (SELECT department_id FROM employees WHERE first_name LIKE '%J%' OR last_name LIKE '%J%') limit 2`);
                        res.json(result.rows);
                    }catch(err){
                        res.status(500).json({error:err.message});
                    }});
app.get('/80',async(req,res)=>{
                    try{
                        const result=await pool.query(`SELECT CONCAT(e.first_name, ' ', e.last_name) AS full_name, e.employee_id, j.job_title FROM employees e JOIN departments d ON e.department_id = d.department_id JOIN locations l ON d.location_id = l.location_id JOIN jobs j ON e.job_id = j.job_id WHERE l.city = 'Toronto' ; `);
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