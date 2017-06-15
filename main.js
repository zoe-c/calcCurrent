
//*******// store number strings in an array. / this is a nodelist
// var nodeList = document.querySelectorAll('.num');
//    console.log(nodeList);
//
// function numStrings(){
//    let numStringArray = [];
//    for (var i = 0; i <= nodeList.length - 1; i++) {
//       numStringArray.push(nodeList[i].value);
//    }
//    return numStringArray;
//    // nodeList.forEach(numSrtingArray.push([0].value));
//    // return numStringArray;
//
//    console.log(numStringArray);
// }
//
// numStrings();

/*document.getElementsByClassName('num').addEventListener('click', function(event) {*/
/*}*/


//grab elements and store them in variables
var nums = document.getElementsByClassName('num');
var results = document.getElementsByClassName('results');
var ops = document.getElementsByClassName('op');
var clear = document.getElementById('clear');
// ^HOW DID THIS AUTOMATICALLY WORK? AMAZING.

// ************tests****************
// console.log(nums);
// console.log(results);
// console.log(ops);

//this string will be your "bank"// holds your values until concatenation or calculation
var tempNumber = "";



//assignEventListeners
for(var num of nums) {
  num.addEventListener('click', function numPrint(event){
     tempNumber += event.target.value;
     results.value = tempNumber;
   //   results.innerHTML = tempNumber;
     console.log(tempNumber);
 });
 console.log(tempNumber);
}

for(var op of ops) {
  op.addEventListener('click', function opPrint(event){
     tempNumber += event.target.value;
     results.value = tempNumber;
   //   results.innerHTML = tempNumber;
     console.log(tempNumber);
 });
 console.log(tempNumber);
}

// for

// function numPrint(event) {
//   tempNumber += event.target.value;
//   results.value = tempNumber;
//   console.log(tempNumber);
// }

// WHY WONT THIS DISPLAY WORK AHHHHHHHHH
// function assignResultsDisplay(){
//    results.textContent = tempNumber;
//    return(results);
// }

//   //the last part of this event clears out the display field. this is not the same in the wk3 project.. but is IRL
// document.getElementsById('add').addEventListener('click', function() {
//  op= '+';
//   total += parseInt(tempNumber);
//   tempNumber = "";
// });


//store op strings in an array

//add Event Listeners to number buttons

//add event listeners to op buttons


//add event listener to = to calculate and push to the display
