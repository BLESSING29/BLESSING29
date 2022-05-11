let nom=document.getElementById("nom")
let mail=document.getElementById("mail")
let satisfaction=document.getElementById("satisfaction")
let coach=document.getElementById("coach")
let message=document.getElementById("message")

let name=document.getElementById("name")
let email=document.getElementById("email")
let satisfact=document.getElementById("satisfact")
let coch=document.getElementById("coch")
let info=document.getElementById("info")

function afficher(){
    name.innerHTML=nom.value;
    email.innerHTML=mail.value;
    satisfact.innerHTML=satisfaction.value;
    coch.innerHTML=coach.value;
    info.innerHTML=message.value;

}