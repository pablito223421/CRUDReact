 const conexion = require ('../database/db');
 
 exports.save = (req, res)=>{
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad= req.body.edad;
    const carrera = req.body.carrera;
    conexion.query('INSERT INTO estudiantes SET ?' , {nombre:nombre,apellido:apellido,edad:edad,carrera:carrera}, (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    }) 
 } 

 exports.update =(req, res)=>{
    const id = req.body.id;
    const nombre = req.body.nombre;
    const apellido = req.body.apellido;
    const edad= req.body.edad;
    const carrera = req.body.carrera;
    conexion.query('UPDATE estudiantes SET ? WHERE id = ?' , [{nombre:nombre,apellido:apellido,edad:edad,carrera:carrera},id], (error, results)=>{
        if(error){
            console.log(error);
        }else{
            res.redirect('/');
        }
    }) 
 }