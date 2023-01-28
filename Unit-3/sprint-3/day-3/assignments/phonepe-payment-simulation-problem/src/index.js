// import {./styles.css};

let walletBalance = 5000;

let payAmt = document.getElementById("pay-amt");
let balanceAmt = document.getElementById("balance-amt");
let payButton = document.getElementById("pay-btn");
let feedbackText = document.getElementById("feedback-text");

// set the text content of balanceAmt to be the wallet balance.

// write a function called makePayment that returns a promise.
// promise resolves after 2 seconds if the payAmount is >= balanceAmt
// promise rejects after 2 seconds if the payAmount is < balanceAmt
// the makePayment function should take in amt which is used
// to decide if the payment passes or fails.

// On click of payButton invoke makePayment()
// in case the returned promise resolves, the feedback text & walletBalance is updated.
// in case the returned promise rejects, the feedback text is updated.


setBalanceDisplay();

function setBalanceDisplay(){
    balanceAmt.textContent  =walletBalance;
}

function makePayment(amt){
    return new Promise(function(resolve,reject){
        setTimeout(()=>{
            if(amt<=walletBalance){
                resolve("Payment Successfull")
            }else{
                reject("Payment failed")
            }
        },2000);
}

payButton.addEventListener("click", function(e){
feedbackText.textContent = "Processing...";

   let payAmount = payAmt.value
})


// setBalanceDisplay();

// function setBalanceDisplay() {
//   balanceAmt.textContent = walletBalance;
// }

// function makePayment(amt) {
//   return new Promise((resolve, reject) => {
//     setTimeout(() => {
//       if (amt <= walletBalance) {
//         resolve("Payment Successfull");
//       } else {
//         reject("Payment failed");
//       }
//     }, 2000);
//   });
// }

payButton.addEventListener("click", function (e) {
  feedbackText.textContent = "Processing...";

  let payAmount = payAmt.value;
  console.log("walletBalance :" + walletBalance);
  console.log("payAmount :" + payAmount);

  makePayment(payAmount).then(
    (result) => {
      console.log(result);
      feedbackText.textContent = result;
      walletBalance = walletBalance - payAmount;
      setBalanceDisplay();
    },
    (err) => {
      console.log(err);
      feedbackText.textContent = err;
    }
  );
});
