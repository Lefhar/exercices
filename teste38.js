var heure = parseInt(window.prompt("entrer une heure"))
var minute = parseInt(window.prompt("entrer une minute"))
var seconde = parseInt(window.prompt("entrer une seconde"))
if(isNaN(heure)||isNaN(minute)||isNaN(seconde)){
    document.write("vous n'avez pas correctement entré l'heure ou les minutes entrer par exemple 21 ensuite 32 ensuite 27")
}else
if(heure >=0 && heure <=23&&minute >=0 &&minute <=59&&seconde >=0 &&seconde <=59){
    var nseconde = parseInt(seconde)+1
    if(nseconde > 1){ var pluriel ="s"}else{ var pluriel =""}
    if(minute > 1){ var pluriel1 ="s"}else{ var pluriel1 =""}
    if(minute >= 0 && minute< 10){ var mhor ="0"}else{ var mhor =""} 
    if(heure >= 0 && heure< 10){ var mhorh ="0"}else{ var mhorh =""}
    if(seconde >= 0 && seconde< 10){ var mhors ="0"}else{ var mhors =""}  
    document.write("dans une seconde il sera "+mhorh+heure+"h"+mhor+minute+"minute"+pluriel1+mhors+nseconde+"seconde"+pluriel)
}else{
    document.write("vous n'avez pas correctement entré l'heure ou les minutes entrer par exemple 21 ensuite 32 ensuite 27")
}
