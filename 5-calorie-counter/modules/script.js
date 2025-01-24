const calorieCounter = document.getElementById("calorie-counter")
const budgetNumberInput = document.getElementById("budget")
const entryDropdown = document.getElementById("entry-dropdown")
const addEntryButton = document.getElementById("add-entry")
const clearButton = document.getElementById("clear")
const output = document.getElementById("output")
let isError = false

/**
 * Replace all instances of +, -, and a space in str with an empty string.
 * @param {String} str
 * @returns Returns a string
 */
let cleanInputString = (str) => {
    const regex = /[+-\s]/g
    return str.replace(regex, "")
}

/**
 * Validate input number for exponential notation
 * @param {String} str
 * @returns Returns a string
 */
let isInvalidInput = (str) => {
    /** Ejemplos
     * /e/ Match con la letra -e- solamente
     * /e/i Match con la letra e per en todas sis variantes mayuscula o minuscula
     * /[0-9]/ Match los caracteres de 0 a 9
     * /[0-9]+/ Simbolo +: Match los caracteres de 0 a 9 en mas de 1 ocasion
     * /[0-9]/g Match busca de forma global mas de una vez
     * /\d/ Match de 0 a 9 otra alternativa a [0-9]
     * i: Case-insensitive matching.
     * m: Multi-line matching.
     * s: Allows . to match newline characters.
     * g: Global search (find all matches rather than stopping after the first match).
     * y: Sticky matching (matches only from the index indicated by the lastIndex property).
     */
    const regex = /\d+e\d+/i
    return str.match(regex) //arreglo con resultado positivo de la expresion regular
}
