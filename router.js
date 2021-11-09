const express = require('express');
const router = express.Router();

const conexion = require('./database/db');


//Ruta para seleccionar a los estudiantes
router.get('/',(req, res)=>{ 
  conexion.query('Select * from estudiantes', (error, results)=>{
      if(error){
          throw error;
      }else{
        res.render('index',{results: results});
      }
      })
})

//Ruta para crear a un estudiante
router.get('/create',(req,res)=>{
    res.render('create');
})

//Ruta para modificar a un estudiante
router.get('/editar/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('SELECT * estudiantes WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
          res.render('editar',{estudiante:results[0]});
        } 
    })
})

//Ruta para eliminar a un estudiante
router.get('/eliminar/:id', (req, res)=>{
    const id = req.params.id;
    conexion.query('DELETE FROM estudiantes WHERE id=?',[id], (error, results)=>{
        if(error){
            throw error;
        }else{
          res.redirect('/');
        } 
    })
})




const crud = require ('./controladores/crud');
router.post('/save', crud.save)
router.post('/update', crud.update)

module.expoorts= router;

