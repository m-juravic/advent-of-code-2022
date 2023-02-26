"use strict"

const fsP = require("fs/promises");

async function readFile(file) {
  let result;
  try {
    let contents = await fsP.readFile(file, "utf8");
    result = contents.split("\n");
  } catch(err) {
    process.exit(1);
  }
  return result;
}

//readFile("input.txt");

async function mostCalories(calories) {

  let calorieList = await readFile(calories);

  let mostCalories = 0;
  let currentCalorieCount;

  for(let i = 0; i < calorieList.length; i++) {
    if(calorieList[i] !== "") {
      currentCalorieCount += +calorieList[i];
    } else {
      if (currentCalorieCount > mostCalories) {
        mostCalories = currentCalorieCount;
        currentCalorieCount = 0;
      } else {
        currentCalorieCount = 0;
      }
    }
  }
  console.log("most calories 70698", mostCalories);
  return mostCalories;
}

//mostCalories("input.txt");

async function topThreeCalorieElves(calories) {

  let calorieList = await readFile(calories);

  let currentCalorieCount = 0;
  let topCalorieCount = 0;
  let secondCalorieCount = 0;
  let thirdCalorieCount = 0;
  let topThreeTotal;

  for (let i = 0; i < calorieList.length; i++) {
    if (calorieList[i] !== "") {
      currentCalorieCount += +calorieList[i];
    } else {
      if (currentCalorieCount >= topCalorieCount) {
        thirdCalorieCount = secondCalorieCount;
        secondCalorieCount = topCalorieCount;
        topCalorieCount = currentCalorieCount;
        currentCalorieCount = 0;
      } else if (currentCalorieCount >= secondCalorieCount && currentCalorieCount < topCalorieCount){
        thirdCalorieCount = secondCalorieCount;
        secondCalorieCount = currentCalorieCount;
        currentCalorieCount = 0;
      } else if (currentCalorieCount >= thirdCalorieCount && currentCalorieCount < secondCalorieCount){
        thirdCalorieCount = currentCalorieCount;
        currentCalorieCount = 0;
      } else {
        currentCalorieCount = 0;
      }
    }
  }

  topThreeTotal =  topCalorieCount + secondCalorieCount + thirdCalorieCount;

  console.log("topThreeTotal 206643", topThreeTotal);
}

topThreeCalorieElves("input.txt");

// contents at n 5
// contents at n 5
// contents at n 3
// contents at n 8
// contents at n

// contents at n 6
// contents at n 7
// contents at n 6
// contents at n 0
// contents at n

// contents at n

// contents at n 5
// contents at n 2
// contents at n 1
// contents at n 2
// contents at n


