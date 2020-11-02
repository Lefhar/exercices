
 let x = window.prompt("Entrez un nombre")
 let y = window.prompt("Entrez un multiplicateur")
produit(x, y)
function produit(x, y) {
 

    if (x != "" && y != "") {
        produit = x * y
    cube = x * x * x
        afficheImg("src/img/papillon.jpg")
        document.write("<p>le cube de " + x + " est égal à " + cube +"<p>")
        document.write("<p>le produit de " + x + " x " + y + " est égal à " + produit +"</p>")

}
}

function afficheImg(image) {

    document.write('<img src="' + image + ' ">');
}