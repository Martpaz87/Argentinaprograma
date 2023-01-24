

document.getElementById('sumar').addEventListener ('click' , function(){
    
    let numeroA = document.getElementById('numero1').value;
    console.log('el valor de numero A es: '+numeroA);

    let  numeroB = document.getElementById('numero2').value;
    console.log('el valor del numero B es: '+numeroB)

    let resultado = sumar(parseInt (numeroA), parseInt (numeroB)) // parseint es para indicar que ese dato es un numero y que no lo tome como caracteres
    console.log('el resultado de la suma es: '+resultado);

    document.getElementById('resultado').innerHTML = resultado;
    document.getElementById('contenedorresultado').style.display = 'block';

});
 function sumar (a,b) {
    return a+b;
 }