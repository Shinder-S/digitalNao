let captchaRandom = (Math.floor(Math.random()*100) + 1);
document.getElementById('valueCaptcha').innerHTML = captchaRandom;

let infoForm = document.getElementById('form-contact').elements;
document.getElementById('submit').addEventListener("click", checkFields);

function checkFields(){
    if (infoForm[0].value == '' || infoForm[1].value == '' || infoForm[2].value == '' ||infoForm[3].value == '' || infoForm[4].value == '') {
        return alert('Fields with * are required. Complete to submit.')
    }
    if (infoForm[0].value == '' || infoForm[1].value !== '' || infoForm[2].value !== '' || infoForm[3].value !== '' || infoForm[4].value !== ''){
        choose();
    }
}

function choose(){
    let number = document.getElementById('captcha').value;
    if(number == captchaRandom)
        alert("Captcha Ok");
    else
        alert("Wrong captcha");
}