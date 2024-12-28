/**
 * Gradebook App
 * Date: 27/12/2024
 * Author: codebydoble
 */

/**
 * Task
 * A teacher has finished grading their student's tests and needs your help to calculate the average
 * score for the class. Complete the getAverage function which takes in an array of test scores and
 * returns the average score. The average is calculated by adding up all the scores and dividing
 * by the total number of scores.
 */

/**
 * Average student's score tests
 * @param {Array} scores An array of student's test scores
 * @returns Returns the average scoretests notes
 */
function getAverage(scores) {
  let allScores = 0
  for (const element of scores) {
    allScores += element
  }
  return allScores / scores.length
}

console.log(getAverage([92, 88, 12, 77, 57, 100, 67, 38, 97, 89]))
console.log(getAverage([45, 87, 98, 100, 86, 94, 67, 88, 94, 95]))

/**Task 2
 * Now the teacher needs your help converting the student score to a letter grade.
 * Complete the getGrade function that takes a number score as a parameter.
 * Your function should return a string representing a letter grade based on the score.
 *
 * 100	    "A++"
 * 90 - 99	"A"
 * 80 - 89	"B"
 * 70 - 79	"C"
 * 60 - 69	"D"
 * 0 - 59	  "F"
 */
const letterAPlus = "A++"
const letterA = "A"
const letterB = "B"
const letterC = "C"
const letterD = "D"
const letterF = "F"

/**
 * Format letter grade
 * @param {number} scoreStudent Student score
 * @param {string} letter Letter grade
 * @returns
 */
let letterGrade = (scoreStudent, letter) => {
  return `Student score: ${scoreStudent} Letter grade: ${letter}\n`
}

/**
 * Converting the student score to a letter grade.
 * @param {number} score An score of student's test
 * @returns Return a sttring converting the student score to a letter grade
 */
function getGrade(score) {
  let result = ""
  if (score === 100) {
    result += letterGrade(score, letterAPlus)
  } else if (score >= 90 && score <= 99) {
    result += letterGrade(score, letterA)
  } else if (score >= 80 && score <= 89) {
    result += letterGrade(score, letterB)
  } else if (score >= 70 && score <= 79) {
    result += letterGrade(score, letterC)
  } else if (score >= 60 && score <= 69) {
    result += letterGrade(score, letterD)
  } else {
    result += letterGrade(score, letterF)
  }
  return result
}

console.log(getGrade(96))
console.log(getGrade(82))
console.log(getGrade(56))
