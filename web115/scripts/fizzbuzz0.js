"use strict"


window.onload = function() {

   document.forms[0].onsubmit = function() {
	  document.getElementById("greeting").innerHTML= "Welcome to Cat Club in Charlotte.";
	  var first_name=document.getElementById("fName").value;
	  var middle_name=document.getElementById("mName").value;
	  var last_name=document.getElementById("lName").value;
	  var welcome=document.getElementById("greeting").textContent;

	  document.getElementById("greeting").innerHTML = welcome +" "+ first_name +" "+ middle_name + ". " + last_name;
	  var words = prompt("How high would you like to count " + first_name + "?" );
	  var expect = "";
	  for (var i = 1; i <= words; i++) {
		  if (i % 2 === 0 ) {
			  expect += i +". "+ "Meow.Miu - the number is even!<br>";
		}
		else {
			expect +=  i +". "+ "Miu.Meow - the number is odd!<br>";
		}
	  }

	  document.getElementById("displayR").innerHTML = expect;
	  return false;
   };
};

