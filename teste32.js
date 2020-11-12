var nbr1 =parseInt(window.prompt("entrer un nombre"))
var nbr2 =parseInt(window.prompt("entrer un nombre"))
if (nbr1 < 0 && nbr2 <0){
    var produit ="négatif"
}else if(nbr1>0 ||nbr2>0){
    var produit ="positif"

}else{
    var produit = "vous n'avez pas correctement entré les deux valeur demandé"
}
document.write("la valeur du produit est " +produit)