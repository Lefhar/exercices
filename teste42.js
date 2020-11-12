//https://ncode.amorce.org/ressources/Pool/TB/Accueil_Ecrire_algorithme_1/Exercices4.pdf
var age = parseInt(window.prompt("entrer votre âge"))
var durpermis = parseInt(window.prompt("depuis combien de temps avez vous le permis ?"))
var accident = parseInt(window.prompt("entrer le nombre d'accident que vous avez déjà eu"))
if(accident ==true){
    var result= "vous être refusé"
}else if(age <25&&durpermis<2&&accident==0){
var result = "tarif rouge"
}else if(age<25&&durpermis>2&&accident==0){
    var result = "tarif orange"
}else if(age <25&&durpermis>2&&accident==0){
