// No cambies los nombres de las funciones.

function obtenerMayor(x, y) {
  // "x" e "y" son números enteros (int).
  // Devuelve el número más grande
  // Si son iguales, devuelve cualquiera de los dos
  // Tu código:
  if (x === y){
    return x;
  }else if (x < y){
    return y;
  }else if (x > y){
    return x;
  }
}

function mayoriaDeEdad(edad) {
  //Determinar si la persona según su edad puede ingresar a un evento.
  //Si tiene 18 años ó más, devolver --> "Allowed"
  //Si es menor, devolver --> "Not allowed"
  var mensaje;
  if (edad >= 18){
    mensaje = "Allowed";
  }else{
    mensaje = "Not allowed"
  }
  return mensaje;
}
  
function conection(status) {
  //Recibimos un estado de conexión de un usuario representado por un valor numérico. 
  //Cuando el estado es igual a 1, el usuario está "Online"
  //Cuando el estado es igual a 2, el usuario está "Away"
  //De lo contrario, presumimos que el usuario está "Offline"
  //Devolver el estado de conexión de usuario en cada uno de los casos.
  var mensaje;
  if (status === 1){
    mensaje = "Online";
  }else if (status === 2){
    mensaje = "Away"
  }else{
    mensaje = "Offline"
  }
  return mensaje;
}

function saludo(idioma) {
  // Devuelve un saludo en tres diferentes lenguajes:
  // Si "idioma" es "aleman", devuelve "Guten Tag!"
  // Si "idioma" es "mandarin", devuelve "Ni Hao!"
  // Si "idioma" es "ingles", devuelve "Hello!"
  // Si "idioma" no es ninguno de los anteiores o es `undefined` devuelve "Hola!"
  // Tu código:
  var mensaje;
  switch (idioma) {
    case 'aleman':
      mensaje = "Guten Tag!";
      break;
    case 'mandarin':
      mensaje = "Ni Hao!";
      break;
    case 'ingles':
      mensaje = "Hello!";
      break;
    default:
      mensaje = "Hola!";
      break;
  }
  return mensaje;
}

function colors(color) {
  //La función recibe un color. Devolver el string correspondiente:
  //En caso que el color recibido sea "blue", devuleve --> "This is blue"
  //En caso que el color recibido sea "red", devuleve --> "This is red"
  //En caso que el color recibido sea "green", devuleve --> "This is green"
  //En caso que el color recibido sea "orange", devuleve --> "This is orange"
  //Caso default: devuelve --> "Color not found"
  //Usar el statement Switch.
  var mensaje;
  switch (color) {
    case 'blue':
      mensaje = "This is blue";
      break;
    case 'red':
      mensaje = "This is red";
      break;
    case 'green':
      mensaje = "This is green";
      break;
    case 'orange':
      mensaje = "This is orange";
      break;
    default:
      mensaje = "Color not found";
      break;
  }
  return mensaje;
}

function esDiezOCinco(numero) {
  // Devuelve "true" si "numero" es 10 o 5
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero === 10 || numero === 5){
    return true;
  }else{
    return false;
  }
  
}

function estaEnRango(numero) {
  // Devuelve "true" si "numero" es menor que 50 y mayor que 20
  // De lo contrario, devuelve "false"
  // Tu código:
  if (numero < 50 && numero > 20){
    return true;
  }else{
    return false;
  }
}

function esEntero(numero) {
  // Devuelve "true" si "numero" es un entero (int/integer)
  // Ejemplo: 0.8 -> false
  // Ejemplo: 1 -> true
  // Ejemplo: -10 -> true
  // De lo contrario, devuelve "false"
  // Pista: Puedes resolver esto usando `Math.floor`
  // Tu código:
  if (Number.isInteger(numero)){
    return true;
  }else{
    return false;
  }
}

function fizzBuzz(numero) {
  // Si "numero" es divisible entre 3, devuelve "fizz"
  // Si "numero" es divisible entre 5, devuelve "buzz"
  // Si "numero" es divisible entre 3 y 5 (ambos), devuelve "fizzbuzz"
  // De lo contrario, devuelve el numero
  
  // mi observacion en este ejercicio es que debe ser un error pues no es lo mismo divisible entre 3 y 5 que la solucion indique que debe ser 15 que 
  // es el resultado de 3 * 5. Ademas se indica devolver "fizzbuzz" y no el numero que se pasa.
  if (numero % 3 === 0 && numero % 5 !== 0){
    return 'fizz';
  }else if (numero % 3 !== 0 && numero % 5 === 0){
    return 'buzz'
  }else	if (numero % 15 === 0) {
    return 'fizzbuzz';
  }
  return numero;
	
}

function operadoresLogicos(num1, num2, num3) {
  //La función recibe tres números distintos. 
  //Si num1 es mayor a num2 y a num3 y además es positivo, retornar ---> "Número 1 es mayor y positivo"
  //Si alguno de los tres números es negativo, retornar ---> "Hay negativos"
  //Si num3 es más grande que num1 y num2, aumentar su valor en 1 y retornar el nuevo valor.
  //0 no es ni positivo ni negativo. Si alguno de los argumentos es 0, retornar "Error".
  //Si no se cumplen ninguna de las condiciones anteriores, retornar false. 
  var mensaje = false;
  if (num1 !== 0 && num2 !== 0 && num3 !== 0){
    if (Math.sign(num1) === -1 || Math.sign(num2) === -1 || Math.sign(num3) === -1){
      mensaje = "Hay negativos";
    }else{
      if (num1 > num2 && num1 > num3){
        mensaje = "Número 1 es mayor y positivo";
      }else if (num3 > num2 && num3 > num1){
        num3 = num3 + 1;
        mensaje = num3;
      }
    }
    
  }else{
    mensaje = 'Error';
  }
  return mensaje;
}

function esPrimo(numero) {
  // Devuelve "true" si "numero" es primo
  // De lo contrario devuelve "falso"
  // Pista: un número primo solo es divisible por sí mismo y por 1
  // Pista 2: Puedes resolverlo usando un bucle `for`
  // Nota: Los números 0 y 1 NO son considerados números primos
  if (numero == 0 || numero == 1 || numero == 4){ 
    return false;
  }else {
    for (let x = 2; x < numero / 2; x++) {
      if (numero % x == 0){
        return false;
      }
    }
    
    return true;
  }
	
}

function esVerdadero(valor){
  //Escribe una función que reciba un valor booleano y retorne “Soy verdadero” 
  //si su valor es true y “Soy falso” si su valor es false.
  //Escribe tu código aquí
  if (valor === true){
    return "Soy verdadero";
  }else{
    return "Soy falso";
  }
}

function tablaDelSeis(){
  //Escribe una función que muestre la tabla de multiplicar del 6 (del 0 al 60).
  //La función devuelve un array con los resultados de la tabla de multiplicar del 6 en orden creciente.
  //Escribe tu código aquí  
  let myarray = [];
  for (let i = 0; i < 11; i++) {
    myarray.push(6 * i);
  }
  return myarray;
  
}

function tieneTresDigitos(numero){
  //Leer un número entero y retornar true si tiene 3 dígitos. Caso contrario, retorna false.
  //Escribe tu código aquí

  if(numero > 99 && numero < 1000){
    return true
  }
  return false
}

function doWhile(numero) {
  //Implementar una función tal que vaya aumentando el valor recibido en 5 hasta un límite de 8 veces
  //Retornar el valor final.
  //Usar el bucle do ... while.
  var i = 0;
  do {
    i = i + 1;
    numero = numero + 5;
  }
  while(i < 8);
  return numero;
}


// No modificar nada debajo de esta línea
// --------------------------------

module.exports = {
  obtenerMayor,
  mayoriaDeEdad,
  conection,
  saludo,
  colors,
  esDiezOCinco,
  estaEnRango,
  esEntero,
  fizzBuzz,
  operadoresLogicos,
  esPrimo,
  esVerdadero,
  tablaDelSeis,
  tieneTresDigitos,
  doWhile
};
