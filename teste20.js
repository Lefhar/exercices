var nbmin = 0//nombre minimum
var nbmax =10//nombre maximum
var nbmagique = parseInt(Math.random() * (nbmax - nbmin) + nbmin);//on générer un nombre maximum entre 0 et 10
console.log(nbmagique)
function verif(){
var element = document.getElementById("textBox1").value;//on recupére la valeur de l'input textbox1
if(element > nbmagique ){//on compare si element est supérieur a nbmagique 
    document.getElementById("label1").innerHTML="Bien tenté le nombre magique est plus petit que "+element;//on envoi notre text dans la div label1
}else if(element < nbmagique ){//on compare si element est inférieur a nbmagique 
    document.getElementById("label1").innerHTML="Bien tenté le nombre magique est plus grand que "+element;//on envoi notre text dans la div label1
}else
if(element == nbmagique ){//on compare si nbmagique et element sont égal
    document.getElementById("label1").innerHTML="Bien joué !! Vous avez trouvé le Nombre magique est bien "+nbmagique;//on envoi notre text dans la div label1
}
}