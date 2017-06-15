//cmd ctrl arrows : to move shit up and down lines without having to cut and paste

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


//global vars to top*********************************
var nums = document.getElementsByClassName('num');
var result = document.getElementById('result');
var ops = document.getElementsByClassName('op');
var clear = document.getElementById('clear');
var equal = document.getElementById('bcalc');
var dec = document.getElementById('bdec');
// ^HOW DID THIS AUTOMATICALLY WORK? AMAZING.

//result containers**********************************
var tempResult= [];
var endResult= [];

//************tests**********************************
console.log(nums);
console.log(result);
console.log(ops);
console.log(clear);
console.log(equal);
console.log(dec);




//assignEventListeners

   for(var num of nums) {
      num.addEventListener('click', function numPrint(event){
         tempResult += event.target.value;
         result.value = tempResult;
         console.log(tempResult);
      });
   }

   for(var op of ops) {
      op.addEventListener('click', function opPrint(event){
         tempResult += event.target.value;
         result.value = tempResult;
         console.log(tempResult);
      });
   }

   dec.addEventListener('click', function decPrint(event){
      tempResult += event.target.value;
      result.value = tempResult;
      console.log(tempResult);
   })

   equal.addEventListener('click', function (event){
         // endResult= eval(tempResult.join(''));
         endResult= eval(tempResult);
         result.value = endResult;
         tempResult = [];
         console.log(endResult);
   });



//store op strings in an array

//add Event Listeners to number buttons

//add event listeners to op buttons


//add event listener to = to calculate and push to the display
