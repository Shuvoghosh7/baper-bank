document.getElementById('login-submit').addEventListener('click',function(){
    const emailfiled = document.getElementById('user-email');
    const emailfiledValue = emailfiled.value;
    const passwordfilde = document.getElementById("user-password")
    const passwordfildeValue = passwordfilde.value;
    if(emailfiledValue == "shuvo" && passwordfildeValue == "123" ){
        window.location.href="banking.html";
    }
    
})