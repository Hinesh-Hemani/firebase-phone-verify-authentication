window.onload = function () {
    render();
};
let render = () => {
    window.recaptchaVerifier = new firebase.auth.RecaptchaVerifier('recaptcha-container');
    recaptchaVerifier.render();
}

let sendnumber = () => {
    let number1 = document.getElementById("num").value;
    console.log(number1)
    firebase.auth().signInWithPhoneNumber(number1, window.recaptchaVerifier)
        .then((confirmationResult) => {
            window.confirmationResult = confirmationResult;
            coderesult = confirmationResult;
            console.log(coderesult);
            alert("meessage send")
        }).catch((error) => {
alert(error.message)
 });

}
let verifyUser = () => {
let code = document.getElementById("verificationcode").value;
console.log(code)
coderesult.confirm(code).then(
    function(result){
        alert("succesfully registered");
        let user =result.user;
        console.log(user);

    }
).catch(function (error)
{
    alert(error.message)
})
};