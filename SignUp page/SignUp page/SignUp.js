function checkNames() {
    let fName = document.getElementById("fName").value;
    let lName = document.getElementById("lName").value;

    if (fName === '' && lName !== '') {
        alert("Enter first name before last name.");
    }
}

function checklname() {
    let lName = document.getElementById("lName").value;
    let Email = document.getElementById("email").value;

    if (lName === '' && Email !== '') {
        alert("Enter name before email");
    }
}

function checkemail() {
    let email = document.getElementById("email").value;
    let add = document.getElementById("add").value;

    if (email === '' && add !== '') {
        alert("Enter email before address.");
    }
}

function checkadd() {
    let add = document.getElementById("add").value;
    let telNo = document.getElementById("telNo").value;

    if (add === '' && telNo !== '') {
        alert("Enter Address before telephone number.");
    }
}

function checkTell() {
    let telNo = document.getElementById("telNo").value;
    let uname = document.getElementById("username").value;

    if (telNo === '' && uname !== '') {
        alert("Enter telephone number before username.");
    }
}

function checkuname() {
    let uname = document.getElementById("username").value;
    let pwd = document.getElementById("pwd1").value;

    if (uname === '' && pwd !== '') {
        alert("Enter username before password.");
    }
}

function checkpwd() {
    let pwd1= document.getElementById("pwd1").value;
    let pwd2 = document.getElementById("pwd2").value;

    if (pwd1 === '' && pwd2 !== '') {
        alert("Enter password before re-enter.");
    }
}

function reEnter(){
    let pwd1 = document.getElementById("pwd1").value;
    let pwd2 = document.getElementById("pwd2").value;

    if(pwd1 !== pwd2){
        document.getElementById("err").innerHTML = "Passswords are not matching.";
    }
    else{
        document.getElementById("err").innerHTML = "";
    }
}