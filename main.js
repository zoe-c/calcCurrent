
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
// var results = document.getElementsByClassName('results');
var result = document.getElementById('result');
var ops = document.getElementsByClassName('op');
var clear = document.getElementById('clear');
var equal = document.getElementById('bcalc');
// ^HOW DID THIS AUTOMATICALLY WORK? AMAZING.

// ************tests****************
console.log(nums);
console.log(result);
console.log(ops);
console.log(clear);
console.log(equal);
//this string will be your "bank"// holds your values until concatenation or calculation
// var tempNumber = "";
var tempResult= [];
var endResult;

var numToCalc=[];
var opToCalc=[];


//assignEventListeners

// function eventListeners(){
   for(var num of nums) {
      num.addEventListener('click', function numPrint(event){
         tempResult += event.target.value;
         result.value = tempResult;
         console.log(tempResult);
      });
      // console.log(tempNumber);
   }

   for(var op of ops) {
      op.addEventListener('click', function opPrint(event){
         tempResult += event.target.value;
         result.value = tempResult;
         console.log(tempResult);
      });
      // console.log(tempNumber);
   }

   function sortResults(tempResult){
      tempResult.map()
   }

   // equal.addEventListener('click', function calcTotal(event){
   //    eval(tempNumber);
   //    tempNumber;
   //    console.log(total);
   // });





//adam: stored ops clicked in one array and nums clicked in a different.
// he then has an array that he combines these two in when equal is clicked.... then iterates through when the equal is clicked... to calculate.


   // function (){
   //    let display = results.innerHTML() = o
   // }

// }
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
