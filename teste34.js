var nombre = parseInt(window.prompt("entrer un nombre"))
if(nombre<0){
    var result = "votre nombre "+nombre+" est négatif"
}else if(nombre ==0){
    var result = "votre nombre "+nombre+" est neutre"
}else if(nombre>0){
    var result = "votre nombre "+nombre+" est positif"
}else{
    var result = "veuillez entrer un nombre correct"  
}

    document.write(result)

