
function add(first, second){
  return  first+second;

}
alert(add(1,80));

function subtract(first, second){
  return  first-second;

}
alert(subtract(60,40));

function multiply(first, second){
  return  first*second;

}
alert(multiply(2,3.4));

function divide(first, second){
  return  first/second;

}
alert(divide(5.0,2.5));



function inc(a){
   a += 1
   return a;
}

function dec(a){
   a -= 1
   return a;
}

function preserveDecimal(n) {
  return parseFloat(n);
}

console.log(preserveDecimal('80.123999'));

// function preserveDecimal('80.123999'){
//   return parseFloat('80.123999');
// }
