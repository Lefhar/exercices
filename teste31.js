var entrer = true
var nbr = 0
var resultht =0

while(entrer){
    var article = (window.prompt("entrer le prix du premier article HT cliquer sur annuler quand il y a plus d'article"))
    if(article !="" && article !=null){
   
    console.log(article)
        nbr++ 
    resultht += parseInt(article)+parseInt(resultht)
}else{
    entrer = false
    break
}




}
if(nbr > 1){ var pluriel = "s";}else{var pluriel = "";}
 var resulttc1 = parseInt(resultht)/100 *20
 var resulttc = parseInt(resulttc1)+parseInt(resultht);
 document.write("vous avez entré "+nbr+" article"+pluriel+" montant total HT "+resultht+"€ et TTC "+resulttc+"€")
