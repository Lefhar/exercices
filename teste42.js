//https://ncode.amorce.org/ressources/Pool/TB/Accueil_Ecrire_algorithme_1/Exercices4.pdf
var age = parseInt(window.prompt("entrer votre âge"))
var durpermis = parseInt(window.prompt("depuis combien de temps avez vous le permis ?"))
var accident = parseInt(window.prompt("entrer le nombre d'accident que vous avez déjà eu"))
var assu = parseInt(window.prompt("Entrez le nombre d'années d'assurance"))
if(accident ==true){
    var result= "vous être refusé"
}else if(age <25&&durpermis<2&&accident==0&&assu<1){
var result = "tarif rouge"
}else if(age <25&&durpermis<2&&accident==0&&assu>1){
    var result = "tarif vert"
}else if(age <25&&durpermis<2&&accident>0&&assu<1){
    var result = "vous être refusé"
}else if(age<25&&durpermis>2&&accident==0&&assu<1){
    var result = "tarif orange"
}else if(age<25&&durpermis>2&&accident==0&&assu>1){
    var result = "tarif vert"
}else if(age>25&&durpermis<2&&accident==0&&assu<1){
    var result = "tarif orange"
}else if(age>25&&durpermis<2&&accident==0&&assu>1){
    var result = "tarif vert"
}else if(age>25&&durpermis<2&&accident==0&&assu>1){
    var result = "tarif vert"
}else if(age >25&&durpermis<2&&accident==1&&assu<1){
    var result = "tarif rouge"
}else if(age>25&&durpermis<2&&accident==1&&assu>1){
    var result = "tarif vert"
}else if(age >25&&durpermis>2&&accident==0&&assu<1){
    var result = "tarif vert"
}else if(age >25&&durpermis>2&&accident==1&&assu<1){
    var result = "tarif orange"
}else if(age >25&&durpermis>2&&accident==2&&assu<1){
    var result = "tarif rouge"
}else if(age >25&&durpermis>2&&accident>2&&assu<1){
    var result = "vous être refusé"
}else{
    var result = "vous être refusé"
}
document.write(result)