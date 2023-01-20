//definimos la funcion hola mundo

function Holamundo (){
    console.log ( "Hola mundo");
}
Holamundo(); 


function sumar(a,b) {
    var  resultado = a+b;
    
    return resultado;
}
// si yo quiero hacer muchas mas sumas no tengo q repetir el codigo sino que ya defini una funcion 



function sumar(a,b) {
    var  resultado = a+b;
    
    return a+b; // o resultado
}
 suma = sumar(3,4);  // invoco ña funcion suma y agrego los valores
 console.log(suma)