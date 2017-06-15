// //buttons into "nodeList"********KEEP THIS. STEP 1 OF VALUE EXTRACTION************************
// var nodeList = document.querySelectorAll('.button');
// console.log(nodeList);
// // *********************


// //gets value out of nodeList
// console.log(nodeList[1].value);
// //returns the 2nd button (7) as 7.

// //attempt at looping through nodeList array of nodes (buttons and their id's) to store in new Array and rename newArray as valArray
// //didn't work.
// var valArray = function getValues(nodeList) {
//    let newArray=[];
//    for (i = 0; i <= (nodeList.length - 1); i++) {
//    newArray.push(nodeList[i].value);
//    }
//    valArray = newArray;
//    return valArray;
// }
//
// console.log(valArray);



//made an array of all number values called valArray. they are still strings.*******************
// var numStringArray = document.getElementsByClassName('.num');
//    console.log(numStringArray);
// var nodeList = document.querySelectorAll('button');
// var valArray = [];
// valArray.push(nodeList[1].value);
// valArray.push(nodeList[2].value);
// valArray.push(nodeList[3].value);
// valArray.push(nodeList[5].value);
// valArray.push(nodeList[6].value);
// valArray.push(nodeList[7].value);
// valArray.push(nodeList[9].value);
// valArray.push(nodeList[10].value);
// valArray.push(nodeList[11].value);
// valArray.push(nodeList[13].value);
//
// console.log(valArray);



// //turn array of string values into number values
// var numValArray = valArray.map(Number);
// console.log(numValArray);
// //numValArray now holds all number values in an array. sweet.
//
//
// //array of operands still in strings
// var operArray = [];
// operArray.push(nodeList[4].value);
// operArray.push(nodeList[8].value);
// operArray.push(nodeList[12].value);
// operArray.push(nodeList[16].value);
//
// console.log(operArray);
//
//
//
// //need to make event listener for each button, when clicked, to retrieve that button and store it in a calculationArray
// //need calculationArray to display in <output> and hold values/ operands/ until = is pressed.
// //need to figure out event listener to trigger an operand without calculating it just yet!
//
// //holding area/ print area..ASSIGNED TO <output>!!
// //this is what will hold your numbers and what you will calculate
// var displayArray = [];
// var outPut = document.querySelector('output').textContent = displayArray;
// //i need to make this a function? so that i can call it when i make the event listeners for the buttons to push to it? I DONT KNOW.
//
//
// //add event-listeners to trigger button click and appropriate numerical value retrieval
// //push it to the displayArray
//
// nodeList[1].addEventListener('click', function(event){
//     displayArray.push(numValArray[0]);
// });
