"use strict";

const tableau = require("./tableaux.js");

console.log(tableau.tabNom);
console.log(tableau.tabPrenom);
console.log(tableau.tabTele);
console.log(tableau.tabEmail);

const maxNom = tableau.tabNom.length
const maxPrenom = tableau.tabPrenom.length
const maxTele = tableau.tabTele.length
const maxEmail = tableau.tabEmail.length
const peupler = () => {
	console.log('ok')
	let position = Math.floor(Math.random()*maxNom)
	let nom = tableau.tabNom[position]
	position = Math.floor(Math.random()*maxPrenom)
	let prenom = tableau.tabPrenom[position]
    position = Math.floor(Math.random()*maxTele)
	let telephone = tableau.tabTele[position]
    position = Math.floor(Math.random()*maxEmail)
	let email = tableau.tabEmail[position]

	return {
			prenom : prenom,
			nom : nom,
            telephone : telephone,
            email : email
			}
}


module.exports = peupler