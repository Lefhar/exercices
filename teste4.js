// JavaScript source code
let age = window.prompt("entrez votre ann�e de naissance")
let b
age = 2020 - age 
if (age < 18) {
    b = "vous �tre mineur"
} else {
    b = "vous �tre majeur"
}
document.write(b)
console.log(age)