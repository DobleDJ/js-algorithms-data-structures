console.log("Let's build a Pyramide Generator")
console.log("    #    ")
console.log("   ###   ")
console.log("  #####  ")
console.log(" ####### ")
console.log("#########")

/**
 * Create a pyramide with character and the count of pyramide lines
 * @param {string} char Any character to build a pyramide
 * @param {number} count The count of pyramide lines
 * @returns Returns a pyramide array
 */
const createPyramide = (char, count) => {
  const pyramide = []
  for (let index = 0; index < count; index++) {
    pyramide.push(pyramideLine(char, count, index))
  }
  return pyramide
}

/**
 *
 * @param {string} char Any character to build a pyramide
 * @param {number} count The count of pyramide lines
 * @param {number} line The position line of the pyramide
 * @returns Returns string line of the pyramide
 */
const pyramideLine = (char, count, line) => {
  let emptyLine = " "
  return emptyLine.repeat(count - line) + char.repeat(2 * line + 1) + emptyLine.repeat(count - line)
}

/**
 * Convert a pyramide array into string
 * @param {array} array Array of pyramide lines
 * @returns Returns a pyramide string
 */
const showPyramide = (array) => {
  let pyramideStr = ""
  for (let values of array) {
    pyramideStr += values + "\n"
  }
  return pyramideStr
}

const pyramideNew = createPyramide("#", 10)
console.log(showPyramide(pyramideNew))
