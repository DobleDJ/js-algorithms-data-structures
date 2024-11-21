/* 
Book: Eloquent Javascript
Date: 20/11/2024
Program Data Structure Excersices
*/

/**
 * 1- Escribe una función range que tome dos argumentos, inicio y fin, y devuelva un array
 * que contenga todos los números desde inicio hasta fin, incluyendo fin.
 */
/**
 *
 * @param {number} inicio initial value of array
 * @param {number} fin final value of array
 * @returns Returns an array from start to end arg
 */
let rangeNumber = (inicio, fin) => {
  let rangeArray = []
  if (!Number.isInteger(inicio) || !Number.isInteger(fin)) throw new Error("Only numbers allowed")
  if (inicio < 0 || fin < 0) throw new Error("Only integer positive numbers")
  if (inicio > fin) {
    for (let index = inicio; index >= fin; index--) {
      rangeArray.push(index)
    }
  } else {
    for (let index = inicio; index <= fin; index++) {
      rangeArray.push(index)
    }
  }
  return rangeArray
}

try {
  console.log(rangeNumber(8, 50))
} catch (error) {
  console.error(error.message)
}

/*
2- Escribe una función sum que tome un array de números y devuelva la
suma de estos números.
*/
/**
 *
 * @param {array} array
 * @returns Returns the sum of all numbers in the array
 */
let sum = (array) => {
  let sumNumbers = 0
  for (let element of array) {
    sumNumbers += element
  }
  return sumNumbers
}

console.log(sum(rangeNumber(1, 10)))

/**
 * 3- Como asignación adicional, modifica tu función range para que tome un
tercer argumento opcional que indique el valor de “paso” utilizado al construir
el array. Si no se proporciona un paso, los elementos deberían aumentar en
incrementos de uno, correspondiendo al comportamiento anterior.
 */

/**
 *
 * @param {number} inicio initial value of array
 * @param {number} fin final value of array
 * @param {number} paso step to numbers if omited paso is equal 1
 * @returns Returns an array from start to end arg
 */
let rangeNumber2 = (inicio, fin, paso = 1) => {
  let rangeArray = []
  if (!Number.isInteger(inicio) || !Number.isInteger(fin)) throw new Error("Only numbers allowed")
  //if (inicio < 0 || fin < 0) throw new Error("Only integer positive numbers")
  if (inicio > fin && paso > 0) {
    for (let index = inicio; index >= fin; index -= paso) {
      rangeArray.push(index)
    }
  } else if (inicio > fin && paso < 0) {
    //incremento negativo
    for (let index = inicio; index >= fin; index = index + paso) {
      rangeArray.push(index)
    }
  } else {
    for (let index = inicio; index <= fin; index += paso) {
      rangeArray.push(index)
    }
  }
  return rangeArray
}

try {
  console.log(rangeNumber2(0, 20, 2))
} catch (error) {
  console.error(error.message)
}

/**
 * 4- escribe dos funciones, reverseArray y reverseArrayInPlace. La primera, reverseArray, debería tomar un array como 
 * argumento y producir un nuevo array que tenga los mismos elementos en orden inverso. La segunda, reverseArrayInPlace, debería
hacer lo que hace el método reverse: modificar el array dado como argumento invirtiendo sus elementos. 
 */

/**
 *
 * @param {Array} array Any array
 * @returns Returns a new array with inversed elements
 */
let reverseArray = (array) => {
  let arrayFinal = []
  for (let index = array.length - 1; index >= 0; index--) {
    arrayFinal.push(array[index])
  }
  return arrayFinal
}

console.log(reverseArray(rangeNumber2(0, 20, 2)))
