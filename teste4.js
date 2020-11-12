// JavaScript source code
let age = window.prompt("entrez votre ann�e de naissance")
let b
age = 2020 - age 
if (age < 18) {
    b = "vous être mineur"
} else {
    b = "vous être majeur"
}
document.write(b)
console.log(age)