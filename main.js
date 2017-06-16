//global vars *********************************
var nums = document.getElementsByClassName('num');
var result = document.getElementById('result');
var ops = document.getElementsByClassName('op');
var clear = document.getElementById('clear');
var equal = document.getElementById('bcalc');
var dec = document.getElementById('bdec');

//result containers**********************************
var tempResult= [];
var endResult= [];

//hardmodeVAR/ mod n sqrt*******************************
var mod = document.getElementById('bmod');
var sqr = document.getElementById('bsqr');

//************tests**********************************
// console.log(nums);
// console.log(result);
// console.log(ops);
// console.log(clear);
// console.log(equal);
// console.log(dec);
// console.log(mod);
// console.log(sqr);

// assignEventListeners

   for(var num of nums) {
      num.addEventListener('click', function numPrint(event) {
         tempResult += event.target.value;
         result.value = tempResult;
         console.log(tempResult);
      });
   }

   for(var op of ops) {
      op.addEventListener('click', function opPrint(event) {
         tempResult += event.target.value;
         result.value = tempResult;
         console.log(tempResult);
      });
   }

   dec.addEventListener('click', function decPrint(event) {
      tempResult += event.target.value;
      result.value = tempResult;
      console.log(tempResult);
   });

// hardmodeFUNCS attempt********************

   mod.addEventListener('click', function modulo(event) {
      tempResult += event.target.value;
      result.value = tempResult;
      console.log(tempResult);
   });

   sqr.addEventListener('click', function squareRoot(event) {
      let sRoot = Math.sqrt(eval(tempResult));
      tempResult = sRoot;
      result.value = tempResult;
      tempResult = [];
      console.log(sRoot);
   });

   equal.addEventListener('click', function (event) {
         endResult= eval(tempResult);
         tempResult = endResult;
         result.value = tempResult;
         console.log(endResult);
   });
