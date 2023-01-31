
const persona = '{"nombre": "Beatriz", "apellido": "Pinzon","Cedula": 85890668, "edad": 49}';
const obj = JSON.parse(persona);
console.log(obj);



document.getElementById('boton').addEventListener ('click' , function(){
     console.log ("evento mostrar articulos");
document.getElementById('mostrar/ocultar').style.display ="block";
})