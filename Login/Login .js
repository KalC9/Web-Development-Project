
        function check(){

            let email = document.getElementById("email").value ;


            if(email === ''){
                document.getElementById("msg").innerHTML = "Insert E-mail address.";
                return false;
            }
        }


