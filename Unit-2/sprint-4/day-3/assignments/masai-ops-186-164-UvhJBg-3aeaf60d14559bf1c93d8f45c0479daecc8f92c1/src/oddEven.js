function generateNumber() {
  // generate a random integer(hint : Math.random)
 let num = document.getElementById("number").innerHTML =Math.floor(Math.random()*100)
 checkOddEven(num)
}
function checkOddEven(num) {
  // logic for even / odd
 
  if(num%2==0){
    document.querySelector("#odd-even").innerHTML = "The number is even";

  }else{

    document.querySelector("#odd-even").innerHTML = "The number is odd";
  }
}
// checkOddEven(num)

window.onload = function () {
  // add event listeners to the button here
  document.querySelector("#generate-number").addEventListener("click",generateNumber);
    
};

// donot change the following export statement

if (typeof exports !== "undefined") {
  module.exports = {
    generateNumber,
    checkOddEven,
  };
}
