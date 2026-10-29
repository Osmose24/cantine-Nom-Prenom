let nom = "Akissi";
let codeplat = 1;
let quantite = 3;
let montantverse = 5000;
let nomplat = "";
let prixUnitaire ;
let monnaie = 0;
let manquant = 0;

let conversion = Number(quantite);
const readline = require('readline').createInterface({
    input: process.stdin,
    output: process.stdout
});
readline.question("comment tu t'appelles?", function(nom) {
    readline.question("entrez un code de plat", function(codeplat) {
        readline.question("quelle est la quantité de ta commande?", function(quantite) {
            //readline.question("", function(usage) {
                readline.question("quel est le montant versé? ", function(montantverse) {
                    console.log(`Enchanté, ${nom}! Bienvenue dans notre restaurant!`);
                    nom = nom;
                    codeplat = Number(codeplat);
                    conversion = quantite;
                    montantverse = (montantverse);
                    console.log(`tu as choisi le plat numéro ${codeplat} et tu as commandé ${quantite} portions`);
                   
               
if(codeplat===1){
    nomplat = "attiéké-poisson";
    prixUnitaire = 1500;
}
else if(codeplat===2){
    nomplat = "Riz-poulet";
    prixUnitaire = 2000;
}
else if(codeplat===3){
    nomplat = "Alloco-oeuf";
    prixUnitaire = 1000;
}
else{
    console.log("plat non cuisiné");

}
function calculerTotal(prixUnitaire, quantite){
return prixUnitaire * quantite;
}
let Total = calculerTotal(prixUnitaire, quantite) ;

for(let i=1; i<= conversion; i++){
    console.log('portion ' + i + ': ' + nomplat + ', ' + prixUnitaire + ' FCFA');

}
//aconsole.log("le client se nomme: " + nom);
console.log("Total a payer est: " + Total + " FCFA");

if( montantverse >= Total){
                        monnaie = montantverse - Total;
    console.log('monnaie à rendre : ' + montantverse + ' - ' + Total + ' = ' + monnaie + ' FCFA' +' '+ "merci d'etre passé"); //
}
else{
    manquant = Total - montantverse;
    console.log('montant manquant: ' + Total + ' - ' + montantverse + ' = ' + manquant + ' FCFA');
    console.log("Merci d'avoir commandé chez nous! A bientôt!");
}
 readline.close();
 });
            });
        });
    //});
});
