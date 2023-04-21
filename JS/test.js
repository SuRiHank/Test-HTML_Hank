function show() {
	var p2=document.getElementById("para2");
	var p1=document.getElementById("para1");
	if (p2.innerHTML == "SHOW ALL") {
		p1.style.display="block";
		p2.innerHTML = "SHOW LESS";
	}else{
		p1.style.display="none";
		p2.innerHTML = "SHOW ALL";
	}
}

function Enroll(){
	var name=document.getElementById('t1').value; //name is the value that the user typed in the t1 filed
	var email=document.getElementById('t2').value; //email is the value that the user typed in the t2 field
	var pass=document.getElementById('t3').value;
	var repass=document.getElementById('t4').value;
	var op1=document.getElementById('t5').checked; //if we check the box t5, op1 will be true; if we don't check t5, op1 will be false
	var op2=document.getElementById('t6').checked;
	var op3=document.getElementById('t7').checked;
	//condition 1 
	if (name==''|| email==''|| pass=='' || repass==''){ //if AT LEAST A FIELD is empty
		alert("Please fill all fields");
	} else if (pass!=repass){ //once all the fields are filled, we check if pass and repass are the same
		alert("Password/Repassword is invalid");
		} else if (op1==false && op2==false && op3==false) { //once pass and repass are the same, we check the options: if no option is chosen, we ask the user to choose at least one of the options 
					var choice = confirm('Would you like to choose options?');
					if (choice==false){ //if user chooses "Cancel"
						alert('Start learning WED201C');
						//if user chooses OK, we do nothing
					}
			   }
}
function logo(){
	alert('Thank you');
}