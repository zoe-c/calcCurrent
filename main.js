//global vars *********************************
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
// console.log(nums);
// console.log(result);
// console.log(ops);
// console.log(clear);
// console.log(equal);
// console.log(dec);

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
