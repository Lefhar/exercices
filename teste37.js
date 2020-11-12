var heure = parseInt(window.prompt("entrer une heure"))
var minute = parseInt(window.prompt("entrer une minute"))
if(isNaN(heure)||isNaN(minute)){
    document.write("vous n'avez pas correctement entré l'heure ou les minutes entrer par exemple 21 ensuite 32")
}else
if(heure >=0 && heure <=23&&minute >=0 &&minute <=59){
    var nminute = parseInt(minute)+1
    if(nminute > 1){ var pluriel ="s"}else{ var pluriel =""}
    if(nminute >= 0 && nminute< 10){ var mhor ="0"}else{ var mhor =""} 
    if(heure >= 0 && heure< 10){ var mhorh ="0"}else{ var mhorh =""} 
    document.write("dans une minute il sera "+mhorh+heure+"h"+mhor+nminute+"minute"+pluriel)
}else{
    document.write("vous n'avez pas correctement entré l'heure ou les minutes entrer par exemple 21 ensuite 32")
}
