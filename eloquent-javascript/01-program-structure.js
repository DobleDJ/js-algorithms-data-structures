/* 
Book: Eloquent Javascript
Date: 17/11/2024
Program Structure Excersices
*/

/*
1- Looping a triangle
Write a loop that makes seven calls to console.log to output the following triangle:

#
##
###
####
#####
######
#######
*/

let characterNumber = "#"
let triangle = ""
for (let index = 0; index < 7; index++) {
  triangle += characterNumber
  console.log(triangle)
}

/*
2- FizzBuzz
Write a program that uses console.log to print all the numbers from 1 to 100, with two exceptions. For numbers divisible by 3, print "Fizz" instead of the number, and for numbers divisible by 5 (and not 3), print "Buzz" instead.

When you have that working, modify your program to print "FizzBuzz" for numbers that are divisible by both 3 and 5 (and still print "Fizz" or "Buzz" for numbers divisible by only one of those).

(This is actually an interview question that has been claimed to weed out a significant percentage of programmer candidates. So if you solved it, your labor market value just went up.) 

*/

//Version I
for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0) {
    console.log("Fizz")
  } else if (index % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(index)
  }
}

//Version II
for (let index = 1; index <= 100; index++) {
  if (index % 3 === 0 && index % 5 === 0) {
    console.log("FizzBuzz")
  } else if (index % 3 === 0) {
    console.log("Fizz")
  } else if (index % 5 === 0) {
    console.log("Buzz")
  } else {
    console.log(index)
  }
}

/*
3- Chessboard
Write a program that creates a string that represents an 8×8 grid, using newline characters to separate lines. At each position of the grid there is either a space or a "#" character. The characters should form a chessboard.

Passing this string to console.log should show something like this:

 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # # 
 # # # #
# # # #
*/

/*let row = 8
let column = 8
*/

/**
 *
 * @param {number} row length of the row
 * @returns string tuple blank space and number
 */
let rowBlank = (row) => {
  let emptyStr = ""
  for (let index = 0; index < row; index++) {
    if (emptyStr.length === 0) {
      //empty string
      emptyStr += " "
    } else if (emptyStr[index - 1] === " ") {
      emptyStr += "#"
    } else {
      emptyStr += " "
    }
  }
  return emptyStr
}

console.log(rowBlank(8))

/**
 *
 * @param {number} row length of the row
 * @returns string tuple number and blank space
 */
let rowNumber = (row) => {
  let emptyStr = ""
  for (let index = 0; index < row; index++) {
    if (emptyStr.length === 0) {
      //empty string
      emptyStr += "#"
    } else if (emptyStr[index - 1] === "#") {
      emptyStr += " "
    } else {
      emptyStr += "#"
    }
  }
  return emptyStr
}

console.log(rowNumber(8))

/**
 *
 * @param {number} row
 * @param {number} column
 * @returns chess board 8x8
 */
let boardChess = (row, column) => {
  let chessBoard = ""
  for (let index = 0; index < column; index++) {
    if (chessBoard.length === 0) {
      //empty String
      chessBoard += rowBlank(row)
      chessBoard += "\n" //new line
      console.log("Inicio str vacio")
    } else if (chessBoard[chessBoard.length - 2] === "#") {
      chessBoard += rowNumber(row)
      chessBoard += "\n" //new line
      console.log(index)
      console.log("Pinto numero y espacio")
    } else {
      chessBoard += rowBlank(row)
      chessBoard += "\n" //new line
      console.log(index)
      console.log("Pinto space y number")
    }
  }
  return chessBoard
}

console.log(boardChess(8, 8))

/*
When you have a program that generates this pattern, define a binding size = 8 and change the program so that it works for any size, outputting a grid of the given width and height.
*/

/**
 *
 * @param {number} width
 * @param {number} height
 * @returns chess board any size
 */
let boardChess2 = (width, height) => {
  let chessBoard = ""
  for (let index = 0; index < height; index++) {
    if (chessBoard.length === 0) {
      //empty String
      chessBoard += rowBlank(width)
      console.log("Inicio str vacio")
    } else if (index % 2 === 1) {
      //Impar row
      console.log("Debe se impar 1", index % 2)
      chessBoard += "\n"
      chessBoard += rowNumber(width) // Structure _#
    } else {
      chessBoard += "\n"
      chessBoard += rowBlank(width) //Structure #_
      console.log(index)
    }
  }
  return chessBoard
}

console.log(boardChess2(9, 4))
