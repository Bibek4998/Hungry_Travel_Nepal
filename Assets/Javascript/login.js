	function showPassword(){
			Password = document.getElementById("password");
            Check = document.getElementById("check");
            if (Check.checked) {
                Password.type = "text";
            } else {
                Password.type = "password";
            }
		}
		function data(){
			userName=document.getElementById('username').value;
			Password=document.getElementById('password').value;
			if(userName===""){
				document.getElementById('usernameError').textContent="Please enter your name";
				return false;
			}
			else if(/\d/.test(userName)){
				document.getElementById('usernameError').textContent="Username can't be in numbers";
				return false
			}
			else if(userName.length<=2||userName.length>20){
				document.getElementById('usernameError').textContent="Your name should be greater than 2  and less than 20";
				return false;
			}
				else{
					true;
				}
				if(Password===""){
					document.getElementById('passwordError').textContent="Please Enter your password";
					return false;
				}
				else if(Password.length<8){
					document.getElementById('passwordError').textContent="Your password must be 8 character long";
					return false;
				}
				else{
					alert(`Welcome ${userName}, Your form is submitted`);
					return true;
				}

			}