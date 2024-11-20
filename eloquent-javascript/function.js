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
Define una función recursiva isEven que corresponda a esta descripción. La
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
