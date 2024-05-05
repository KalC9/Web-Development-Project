
        function checkEmail(){

            let email = document.getElementById("email").value ;


            if(email === ''){
                document.getElementById("msg1").innerHTML = "Insert E-mail address.";
                return false;
                
            
        }
        else{
            document.getElementById("msg1").innerHTML = '';
            
        }
    }

        function checkPwd(){
        
            let pwd = document.getElementById("pwd").value ;

        if(pwd === ''){
            document.getElementById("msg2").innerHTML = "Insert Password";
            return false;
        
        }
        else{
            document.getElementById("msg2").innerHTML = '';
            
        }
    }


