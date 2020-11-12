var nbr1 = parseInt(window.prompt("veuillez entrer le nombre N°1"))
var nbr2 = parseInt(window.prompt("veuillez entrer le nombre N°2"))
if (nbr1 < 0 && nbr2 <0){
    var produit ="négatif"
}else if(nbr1>0 ||nbr2>0){
    var produit ="positif"
var valide = true
}else if(nbr1==0&&nbr2==0){
    var produit ="votre produit est null"
    var valide = true
}else{
    var produit = "vous n'avez pas correctement entré les deux valeur demandé"
    var valide = false
}
if(valide){
    document.write("la valeurs du produit est " +produit)
}else{
    document.write(produit)
}
