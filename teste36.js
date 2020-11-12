var age = parseInt(window.prompt("veuillez entrer votre âge"))
if(age >= 6 && age <=7){
    var cat = "vous être dans la catégorie Poussin"
}else if(age >= 8 && age <=9){
    var cat = "vous être dans la catégorie Pipille"
}else if(age >= 10 && age <=11){
    var cat = "vous être dans la catégorie Minime"
}else if(age >= 12){
    var cat = "vous être dans la catégorie Cadet" 
}else{
    var cat =" catégorie inconnu veuillez entrer un âge supérieur ou égal à 6 ans"
}
document.write(cat)