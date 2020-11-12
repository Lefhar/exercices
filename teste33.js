var prenom1 = window.prompt("entrer un prénom n°1")
var prenom2 = window.prompt("entrer un prénom n°2")
var prenom3 = window.prompt("entrer un prénom  n°3")

if(prenom1<prenom2&&prenom2< prenom3){
    document.write("les prénoms "+prenom1+ " et "+prenom2+ " et "+prenom3+" sont dans l'ordre alphabétique")
}else{
    document.write("les prénoms "+prenom1+ " et "+prenom2+ " et "+prenom3+" sont pas l'ordre alphabétique")
}



