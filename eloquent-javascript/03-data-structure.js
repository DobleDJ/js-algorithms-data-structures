/* 
Book: Eloquent Javascript
Date: 20/11/2024
Program Data Structure Excersices
*/

/**
 * Escribe una función range que tome dos argumentos, inicio y fin, y devuelva un array
 * que contenga todos los números desde inicio hasta fin, incluyendo fin.
 */
/**
 *
 * @param {number} inicio initial value of array
 * @param {number} fin final value of array
 * @returns Array from start to end arg
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
