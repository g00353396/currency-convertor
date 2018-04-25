//convert euro into pounds function
function euroToPounds(){
//get value from text box
  var amount = parseInt(document.getElementById("value1").value);
// calculate the exchange rate
  var pounds = amount * 0.86;
  //create message string
  var message = amount + ' euros converts to ' + pounds + ' Sterling Pounds.';
  // log the message string into the developer console
  console.log(message);
  //pass the message back to HTML for it to be displayed
  document.getElementById("resultsentence").innerHTML = message;

}

function euroToUSD(){
  var amount = parseInt(document.getElementById("value1").value);

    var usd = amount * 1.06;
    var message = amount + ' euros converts to ' + usd + ' US Dollar.';
    console.log(message);
    document.getElementById("resultsentence").innerHTML = message;
}

function euroToYen(){
  var amount = parseInt(document.getElementById("value1").value);
  
    var yen = amount * 121.12;
    var message = amount + ' euros converts to ' + yen + ' Japanese Yen.';
    console.log(message);
    document.getElementById("resultsentence").innerHTML = message;
}

function euroToBitcoin(){
  var amount = parseInt(document.getElementById("value1").value);
  
    var bitcoin = amount * 0.00082;
    var message = amount + ' euros converts to ' + bitcoin + ' Bitcoin.';
    console.log(message);
    document.getElementById("resultsentence").innerHTML = message;
}