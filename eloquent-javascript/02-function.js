/* 
Book: Eloquent Javascript
Date: 17/11/2024
Program Function Excersices
*/
let value1 = 10
let value2 = -10

/*
1-The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
The previous chapter introduced the standard function Math.min that returns its smallest argument. We can write a function like that ourselves now. Define the function min that takes two arguments and returns their minimum.
*/

/**
 *
 * @param {number} number1 Number to compare
 * @param {number} number2 Number to compare
 * @returns {number} takes two arguments and returns their minimum
 */
let minimun = (number1, number2) => {
  return number1 < number2 ? number1 : number2
}

let testMin = minimun(value1, value2)

console.log(`The minimun number between ${value1} and ${value2} is:\n ${testMin}`)

/*
2- Define una función recursiva isEven que corresponda a esta descripción. La
función debe aceptar un solo parámetro (un número entero positivo) y devolver
un booleano.
*/

let valueTry = 3

/**
 *
 * @param {number} value Integer positive
 * @returns Return true o false if the value is par
 */
let isEven = (value) => {
  if (value === 0) return true
  if (value === 1) return false
  if (value < 0) {
    throw new Error("Invalid number insert only integer positive")
  } else {
    return isEven(value - 2)
  }
}

try {
  if (isEven(valueTry) === true) {
    console.log("The value is par")
  } else {
    console.log("The value is impar")
  }
} catch (error) {
  console.error(error.message)
}

/**
 3- Escribe una función contarBs que tome una cadena como único argumento
y devuelva un número que indique cuántos caracteres B en mayúscula hay en
la cadena.
 */

/**
 *
 * @param {String} cadena Any string
 * @returns Returns the count of character B in the string
 */
function contarBs(cadena) {
  //String to work
  let mychain = cadena
  let totalB = 0
  for (let index = 0; index < mychain.length; index++) {
    if (mychain[index] === "B") {
      totalB++
    }
  }
  return totalB
}

let txt = "Buenas noches desde un lugar de la tierra. Blank space. English words: beautiful, baseball, bank, ball"
console.log(`The count of B in the text: \n${txt} \n Count of B: ${contarBs(txt)}`)

// Version II

/**
 *
 * @param {String} cadena any string value
 * @param {*} caracter A character to search in cadena
 * @returns Return amount of caracter in cadena
 */
let contarCaracter = (cadena, caracter) => {
  let cadenaBackup = cadena
  let countChar = 0
  for (let index = 0; index < cadenaBackup.length; index++) {
    if (cadenaBackup[index] === caracter) {
      countChar++
    }
  }
  return countChar
}

let aChar = "a"
console.log(`The count of (${aChar}) in the text: \n${txt} \n Count of ${aChar}: ${contarCaracter(txt, aChar)}`)
