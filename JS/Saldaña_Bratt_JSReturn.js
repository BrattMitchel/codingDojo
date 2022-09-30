function hello() {
    console.log('hello');
}
hello();
console.log('Dojo');

//En la consola me va a mostrar HELLO y luego DOJO.


function hello() {
    console.log('hello');
    return 15;
}

var result = hello();
console.log('result is', result);

//Declaramos una funcion llamada hello().
//Tenemos un return 15.
//Guardamos la funcion hello() en la variable result.
//Con el console.log() vamos a mostrar el RETURN de la Funcion llamada Hello().
//El resultado seria "result is 15"

function numPlus(num) {
    console.log('num is', num);
    return num+15;
}
var result = numPlus(3);
console.log('result is', result);

//guardamos el Return en una variable que se llama result
//luego le suma 15 al numero ingresado.
//En este caso ingresamos 3 y sumanos 15, el resultado sera 18.


function sumNums(num1, num2) {
    var sum = num1 + num2;
    console.log('sum is', sum);
    return sum;
}
var result = sumNums(2,3) + sumNums(3,5);
console.log('result is', result);

//Declaramos una funcion que se llama sumNums
//Luego declaramos una variable llamada result
//En console log sumamos los numero y los mostramos como resultado
//El resultado es 13.