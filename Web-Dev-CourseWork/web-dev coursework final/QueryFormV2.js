/* Function for validation form*/

function validate(){
  var name = document.getElementById("name").value;
  var subject = document.getElementById("subject").value;
  var phone = document.getElementById("phone").value;
  var email = document.getElementById("email").value;
  var message = document.getElementById("message").value;
  var error_message = document.getElementById("error_message");
  
  error_message.style.padding = "10px";
  
  var text;
  if(name.length < 5){
    text = "Please Enter valid Name";
    error_message.innerHTML = text;
    return false;
  }
  if(subject.length < 10){
    text = "Please Enter Correct Subject";
    error_message.innerHTML = text;
    return false;
  }
  if(isNaN(phone) || phone.length != 11){
    text = "Please Enter valid Phone Number";
    error_message.innerHTML = text;
    return false;
  }
  if(email.indexOf("@") == -1 || email.length < 6){
    text = "Please Enter valid Email";
    error_message.innerHTML = text;
    return false;
  }
  if(message.length <= 140){
    text = "Please Enter More Than 140 Characters";
    error_message.innerHTML = text;
    return false;
  }
  alert("Form Submitted Successfully!");
  return true;
}


/* Function to open new window with the query*/

function display() {
	var DispWin = window.open()
  DispWin.document.writeln("<body bgcolor='#fece0c'>");
  DispWin.document.writeln("</body>");
  message = "<ol><li><b style='color:#005BBB';>Name: </b>" + document.myform.name.value;
  message += "<li><b style='color:#005BBB';>Subject: </b>" + document.myform.subject.value;
  message += "<li><b style='color:#005BBB';>Phone: </b>" + document.myform.phone.value;
  message += "<li><b style='color:#005BBB';>Email Address: </b>" + document.myform.email.value;
  message += "<li><b style='color:#005BBB';>Message: </b>" + document.myform.message.value + "</ol>";
  DispWin.document.write(message);
  
  
  DispWin.document.write('<button id="myBtn" style="background:#005BBB; color:#332902;text-transform: uppercase;font-weight: bold;border: 0px;margin-top: 15px;padding: 10px;text-align: center; border-radius: 25px;cursor: pointer;"> Send </button>');
  DispWin.document.getElementById("myBtn").onclick =
  function () { 
	  alert("The Message was Send Successfully!");
	  DispWin.close();
  }
   DispWin.document.write('<button id="myBtn1" style="background:#005BBB; color:#332902;text-transform: uppercase;font-weight: bold;border: 0px;margin-top: 15px;padding: 10px;text-align: center; border-radius: 25px;cursor: pointer;"> Edit </button>');
   DispWin.document.getElementById("myBtn1").onclick =
  function () {
	  DispWin.close();
  }
}


