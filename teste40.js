var age = parseInt(window.prompt("entrez votre âge"))// variable de l'âge
// si clique sur ok c'est un homme sinon c'est une femme
var sexe = window.confirm("si vous êtres un homme cliquez sur ok sinon cliquez sur annuler")
//on recupére la réponse pour savoir le sexe
if(sexe==true){
    var sexe ="h"
}else{
    var  sexe ="f"
    
}
//si c'est un homme est que sont âge est supérieur à 20 ans alors il paye
if(sexe =="h"&& age > 20){
    var result ="vous payez des impôts"
}else if(sexe =="f"&& age >= 18 && age <=35){// si sont âge est compris entre 18 et 35 et c'est une femme paye pas
    var result ="vous payez des impôts"
}else{//tout les autres ne paye pas d'impôt
    var result ="vous payez pas d'impôt"
}
if(isNaN(age)){//si la personne ne rentre pas correctement l'âge donc resultat NaN ben on affiche le message d'erreur
    document.write("entrez un âge correct merci")

}else{
    document.write(result)  
}