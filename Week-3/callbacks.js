function myData(some) {
    console.log(some);
  }
  
  function myCalculator(num1, num2, myCallback) {
    let sum = num1 + num2;
    myCallback(sum);
  }
  
  myCalculator(5, 5, myData);

  //setTimeout
  setTimeout(myFunction, 3000);
  myFunction2()
function myFunction() {
  console.log("I love JavaScript !!");
}
function myFunction2() {
    console.log("I love Machinelearning!!");
  }