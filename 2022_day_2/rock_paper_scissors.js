"use strict"

//"The first column is what your opponent is going to play: A for Rock, B for
//Paper, and C for Scissors.

//second column, you reason, must be what you should play in response: X for Rock,
//Y for Paper, and Z for Scissors.

//The score for a single round is the score for the shape you selected
//(1 for Rock, 2 for Paper, and 3 for Scissors) plus the score for the outcome of the round
//(0 if you lost, 3 if the round was a draw, and 6 if you won).

//round1
// Tie AX, BY, CZ = 6 points
// Win AY, BZ, CX = 8 points
//Lose AZ, BX, CY = 1 point

const fsP = require("fs/promises");

async function readFile(file) {
  let result;
  try {
    let contents = await fsP.readFile(file, "utf8");
    result = contents.split("\n");
  } catch(err) {
    process.exit(1);
  }
  //console.log(result);
  return result;
}

//readFile("input.txt");

async function calcScore(rounds) {

  let roundResults = await readFile(rounds);
  //console.log("roundResults", roundResults);

  let score = 0;

  for(let round of roundResults) {
    if(round === "A X" || round === "C Y" || round === "B Z") {
      // console.log("score of 6");
      score += 3;
    } if (round === "C X" || round === "B Y" || round === "A Z") {
      // console.log("score of 8");
      score += 2;
    } if (round === "B X" || round === "A Y" || round === "C Z") {
      // console.log("score of 1");
      score += 1;
    } if (round[2] === "Y") {
      score += 3;
    } if (round[2] === "Z") {
      score += 6;
    }
  }

  //answer round 1 14531
  //answer round2 11258
  console.log("score", score);
  return score;
}

calcScore("input.txt")


