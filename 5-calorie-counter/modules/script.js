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
