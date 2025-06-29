function displayPassword(){
			passWord = document.getElementById('Password');
			checkBox = document.getElementById('showPassword');
			if(checkBox.checked){
				passWord.type="text";
			}
			else{
				passWord.type="password";
			}
		};


		function data(){
			firstName=document.getElementById('firstname').value;
			lastName=document.getElementById('lastname').value;
			Password=document.getElementById('Password').value;
			Email=document.getElementById('Email').value;

			if(firstName===""){
				document.getElementById('firstnameError').textContent="Please enter your name";
				return false;
			}
			else if(/\d/.test(firstName)){
				document.getElementById('firstnameError').textContent="User name can not be in digits";
				return false;
			}
			else if(firstName.length<=2){
				document.getElementById('firstnameError').textContent="Your name must contain atleast 3 character ";
				return false;
			}
			else if(firstName.length>=15) {
				document.getElementById('firstnameError').textContent="Your name should be smaller than 15 character";
				return false;
			}
			else{
				document.getElementById('firstnameError').textContent="";
				 true;
			}
			if(lastName==""){
				document.getElementById('lastnameError').textContent="Please enter your lastname";
				return false;
			}
			else if(/\d/.test(lastName)){
				document.getElementById('lastnameError').textContent="User name can not be in digits";
				return false;
			}
			else if(lastName.length<=2){
				document.getElementById('lastnameError').textContent="User name must be atleast 3 character long";
				return false;
			}
			else if(lastName.length>15){
				document.getElementById('lastnameError').textContent="User name must be less than 15 character";
				return false;
			}
			else{
				document.getElementById('lastnameError').textContent="";
				 true;
			}
			if(Email==""){
				document.getElementById('emailError').textContent="Please Enter your email";
				return false;
			}
			else{
				document.getElementById('emailError').textContent="";
				 true;
			}
			if(Password==""){
				document.getElementById('passwordError').textContent="Please enter your password";
				return false;
			}
			else if(Password.length<8){
				document.getElementById('passwordError').textContent="Your password must be atleast 8 character long";
				return false;
			}
			else if(!/\d/.test(Password)){
				document.getElementById("passwordError").textContent="Password must contain atleast 1 integer";
				return false;
			}
			else{
				document.getElementById('passwordError').textContent="";
				true;
			}
		}