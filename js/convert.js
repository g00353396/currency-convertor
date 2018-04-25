function euroToPounds()[

  var amount = parseInt(document.getElementById("value1").value);

  var pounds = amount * 0.86;
  var message = amount + ' euros converts to ' + pounds + ' sterling.';
  cansole.log(message);
  doc.getElementById("resultsentence").innerHTML = message;

]