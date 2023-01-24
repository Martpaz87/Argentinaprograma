

document.getElementById('boton').addEventListener ('click' , function(){
    console.log ("capturamos el elemento click");
    document.getElementById ('demo').innerHTML = "Estoy probando mi primer evento en JS"
    document.body.style.backgroundColor = "#FF0000"
});
    
document.getElementById('boton_color').addEventListener('click' ,function () {
    document.body.style.backgroundColor = "#FF0000";
});

const collection = document.getElementsByClassName ("prueba")  // cuendo se ejevute, busca los elementos que tengan la clase prueba
   for (let i = 0; i < collection.length; i++) {
    collection[i].style.backgroundColor = '#FFCC48';
    
   }