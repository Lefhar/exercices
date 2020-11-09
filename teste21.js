function verif(){
    var societe = document.formulaire.societe.value;
    var pcontact = document.formulaire.pcontact.value;
    var cp = document.formulaire.cp.value;
var ville = document.formulaire.ville.value;
var tel = document.formulaire.tel.value;
var email = document.formulaire.email.value;
var verif 	= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,3}$/
if (verif.exec(email) == null){
    console.log(email)
    document.getElementById("demail").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer une email correct</div>";
    var controlmail = true;
}else{
 var controlmail = true;
} 
if(cp.length < 5 ){
    document.getElementById("dcp").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer 5 chiffres</div>";
    var controlcp = true;
}else{
 var controlcp = true;
}
if(pcontact.length < 1 ){
    document.getElementById("dpcontact").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Entrez le nom d'une personne à contacter</div>";
    var controlpcontact = false;
}else{
    var controlpcontact = true;
}
if(societe.length < 1 ){
    document.getElementById("dsociete").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Entrez le nom de la société</div>";
    var controlsociete = false;
}else{
    var controlsociete = true;
}
if(ville.length < 1 ){
    document.getElementById("dville").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Entrez le nom de votre ville</div>";
    var controlville = false;
}else{
    var controlville = true;
}
if(tel.length < 1 ){
    document.getElementById("dtel").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Entrez un numéro de téléphone correct</div>";
}else{
    var controltel = true;
}
if(controlcp == true  &&controlmail == true&&controlpcontact == true &&controlcp == true &&controlsociete == true &&controltel == true){
    return true;
}else{
    return false;
}
}