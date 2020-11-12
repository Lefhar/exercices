var cand1 = parseFloat(window.prompt("Entré le pourcentage du candidat N°1"))
var cand2 = parseFloat(window.prompt("Entré le pourcentage du candidat N°2"))
var cand3 = parseFloat(window.prompt("Entré le pourcentage du candidat N°3"))
var cand4 = parseFloat(window.prompt("Entré le pourcentage du candidat N°4"))
if(cand1>50){// si supérieur à 50% il a gagné
    var result = "vous être élu"
}else if(cand2>50||cand3>50||cand4>50){//si l'un des candidats a plus de 50% il a perdu
    var result = "vous avez perdu"
}else if(cand1>=12.5){//si supérieur ou égal à 12.5 c'est favorable
    var result =" vous être en ballottage favorable"
}else{//sinon défavorable
    var result =" vous être en ballottage défavorable"
}
if(isNaN(cand1)||isNaN(cand2)||isNaN(cand3)||isNaN(cand4)){// on vérifie que tout a correctement était entré
   document.write("vous n'avez pas correctement entré les résultats de tout les candidat veuillez entrer que des chiffres")
}else{
    document.write(result)// on affiche le résultat
}