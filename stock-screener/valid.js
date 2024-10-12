function myfun(){
    alert("hii")
}


function submitfun(){
    var password = document.getElementById("password");

    if(password.value.length >= 8){
        alert('login Successfull');
        window.location.replace("index.html");
        return false;
    }
    else{
        alert("login failed");
    }
}