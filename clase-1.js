// una Variable es un valor que puedo cambiar en el proceso de la ejecución
//una Constante es un valor que se mantiene una vez sea indexad

// la constante nunca puede cambiar su valor inicial independiente al tipo de dato
//CASO DE TIPO NÚMERO
var numero = 1
const constante_numero = 1
numero = 2
console.log(numero)
console.log(constante_numero)

//CASO DE TIPO STRING
var cadena = "Hola Mundo!"
var nombre = " Jhon tiene "
var numero2 = 22 + " años"

const cadena_constante = "Hola Mundo!"
const cadena_constante_2 = " Jhon"

//concatenaciones o uniones de palabras
var union = cadena + nombre + numero2
var union2 = cadena_constante + cadena_constante_2

console.log(union);
console.log(union2)

//OPERACIONES ARITMETRICAS

var entrada1 = 10
var entrada2 = 9

//como pasar de un string a un entero
var parseo_numero = parseInt("15") // --> 15
//como pasar de un entero a un string
var parseo_string = String(15) // -->  "15"

//ejemplo de operaciones aritmétricas
var suma = entrada1 + entrada2
var resta = entrada1 - entrada2
var multiplacion = entrada1 * entrada2
var division = entrada1 / entrada2

console.log(suma)
console.log(resta)
console.log(multiplacion)
console.log(division)

//esto es para verificar el tipo de dato que tiene la variable

var JhonIsMan = true
var JhonIsWoman = false

console.log(typeof parseo_numero);
console.log(typeof parseo_string);
console.log(typeof JhonIsMan)
console.log(typeof JhonIsWoman)