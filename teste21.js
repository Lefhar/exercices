function verif(){
    var societe = document.formulaire.societe.value;
    var pcontact = document.formulaire.pcontact.value;
    var cp = document.formulaire.cp.value;
var ville = document.formulaire.ville.value;
var tel = document.formulaire.tel.value;
var email = document.formulaire.email.value;
var verif 	= /^[a-zA-Z0-9_.-]+@[a-zA-Z0-9-]{2,}[.][a-zA-Z]{2,4}$/
var ctrsociete = /^[a-zA-Z]{2,}$/
var ctrpcontact = /^[a-zA-Z]{2,}$/
var ctrville = /^[a-zA-Z]{2,}$/
var ctrcp 	= /^[0-9]{5,}$/
var ctrtel 	= /^[0-9]{10,}$/
if (verif.exec(email) == null){
    console.log(email)
    document.getElementById("demail").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer une email correct</div>";
    document.getElementById("email").className = "form-control is-invalid";
    var controlmail = false;
}else{
    document.getElementById("email").className = "form-control is-valid";
    document.getElementById("demail").style.display = 'none';
 var controlmail = true;
} 
if (ctrcp.exec(cp) == null){
    document.getElementById("dcp").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">vous devez entrer 5 chiffres</div>";
    var controlcp = false;
    document.getElementById("cp").className = "form-control is-invalid";
}else{
    document.getElementById("cp").className = "form-control is-valid";
    document.getElementById("dcp").style.display = 'none';
 var controlcp = true;
}
if (ctrpcontact.exec(pcontact) == null){
    document.getElementById("dpcontact").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Entrez le nom d'une personne à contacter</div>";
    var controlpcontact = false;
    document.getElementById("pcontact").className = "form-control is-invalid";
}else{
    document.getElementById("pcontact").className = "form-control is-valid";
    document.getElementById("dpcontact").style.display = 'none';
    var controlpcontact = true;
}
if (ctrsociete.exec(societe) == null){
    document.getElementById("dsociete").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Entrez le nom de la société</div>";
    var controlsociete = false;
    document.getElementById("societe").className = "form-control is-invalid";
}else{
    document.getElementById("societe").className = "form-control is-valid";
    document.getElementById("dsociete").style.display = 'none';
    var controlsociete = true;
}
 if (ctrville.exec(ville) == null){
    document.getElementById("dville").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Entrez le nom de votre ville</div>";
    var controlville = false;
    document.getElementById("ville").className = "form-control is-invalid";
}else{
    document.getElementById("ville").className = "form-control is-valid";
    document.getElementById("dville").style.display = 'none';
    var controlville = true;
}
if (ctrtel.exec(tel) == null){
    document.getElementById("dtel").innerHTML="<div class=\"alert alert-danger\" role=\"alert\">Entrez un numéro de téléphone correct</div>";
    document.getElementById("tel").className = "form-control is-invalid";
}else{
    document.getElementById("tel").className = "form-control is-valid";
    document.getElementById("dtel").style.display = 'none';
    var controltel = true;
}
if(controlcp == true  &&controlmail == true&&controlpcontact == true &&controlcp == true &&controlsociete == true &&controltel == true){
    return true;
}else{
    return false;
}
}