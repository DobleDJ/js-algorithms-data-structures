const body = document.querySelector("body")
const bgHexCodeSpanElement = document.querySelector("#bg-hex-code")
const button = document.querySelector("#btn")
const darkColorsArr = [
    "#2C3E50",
    "#34495E",
    "#2C2C2C",
    "#616A6B",
    "#4A235A",
    "#2F4F4F",
    "#0E4B5A",
    "#36454F",
    "#2C3E50",
    "#800020",
]

/**
 * Event listener for the button Change Background Color
 * @returns {number} Returns a random index between 0 and 9
 */
function getRandomIndex() {
    const randomIndex = Math.floor(darkColorsArr.length * Math.random())
    return randomIndex
}

/**
 * Changes the background color of the body to a random dark color
 */
function changeBackgroundColor() {
    const color = darkColorsArr[getRandomIndex()]
    bgHexCodeSpanElement.innerText = color
    body.style.backgroundColor = color
}

changeBackgroundColor()
