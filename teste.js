function generer(){
    var nom = window.prompt("entrer votre nom");
    var prenom = window.prompt("entrer votre prénom");
if(window.confirm("être vous un homme"))
{
var sexe = "h";
}else{
var sexe = "f";    
}
    if(nom != null && prenom!=null&&prenom !=""&&nom !=""&&sexe=='h' ){
alert("bonjour Monsieur " + nom +" "+ prenom + " Bienvenu sur notre site");
    }else if(nom != null && prenom!=null&&prenom !=""&&nom !=""&&sexe=='f'){
     alert("bonjour Madame " + nom +" "+ prenom + " Bienvenu sur notre site");
    }else{
        alert("vous n'avez pas entré toute les informations demandé veuillez recommencer");
        generer();
    }
    console.log(nom,prenom,sexe);
 }