function euroToPounds(){

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  console.log(message);
  document.getElementById("resultsentence").innerHTML = message;

}