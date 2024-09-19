//Las funciones se pueden llamar en el boton usando la propiedad onclick

function sumar() {

    /*
    const se usa para palabras estaticas, 
    no se le puede cambiar el valor
    let
    var se usa para variables globales, no es recomendable usarlo
    */

    /*const numero1 = 5;  
    numero1 = 1;        //Generar error

    let numero2 = 10;
    numero2 = 2;*/

    const numero1 = document.getElementById("num1").value
    const numero2 = document.getElementById("num2").value

    let suma = parseInt(numero1) + parseInt(numero2)

    alert("La suma es: " + suma)
}

function ciclofor() {
    for (let i = 1; i < 10; i++) {
        console.log(i)
    }
}

function ciclowhile() {
    let i = 1;

    while (i < 10) {
        console.log(i)
        i++
    }
}

function objetosJavascript() {

    //json
    let objeto = {
        "nombre": "Libro1",
        "precio": 50
    }
    console.log(objeto)
}

function lista() {
    const lista = []

    //Agregar valores a lista
    lista.push(1)
    lista.push(2)
    lista.push(3)

    //Recorrer lista
    /*for (let i = 0; i < lista.length; i++) {
        console.log(lista[i])
    }*/

    //Recorrer lista con foreach de Javascript
    lista.forEach(value => console.log(value))
}