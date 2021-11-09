const mysql = require('mysql');

const conexion = mysql.createConnection({
    host:'localhost',
    user:'root',
    password: '',
    database:'bd_estudiantes'
});


conexion.connect((error)=>{
if(error){
    console.error('Error de la conexión:'+error);
    return
}
console.log('Usted ha entrado a la base de datos de manera correcta');
})

module.exports= conexion;