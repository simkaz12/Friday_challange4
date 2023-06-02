console.clear();

const pirmas = "Scarlett Johansson";
const antras = "Emilija Klark";

if (pirmas.length > antras.length) {
    console.log(pirmas)
}
else 
    console.log(antras)

console.log("-----------------");


const vardas = "Simonas";
const pavarde = "Kazlauskas";
const gimimoMetai = "1994";
const dabartiniaiMetai = "2023";

const skirtumas = dabartiniaiMetai - gimimoMetai;

console.log(`Aš esu ${vardas} ${pavarde}. Man yra ${skirtumas} metai.`)


console.log("-----------------");

const aktoresVardas = "Scarlett";
const aktoresPavarde = "Johansson";

const vardoIndex = aktoresVardas.length;
const pavardeIndex = aktoresPavarde.length;



console.log(aktoresVardas[vardoIndex - 3] + aktoresVardas[vardoIndex - 2] + aktoresVardas[vardoIndex - 1] + " " + aktoresPavarde[pavardeIndex - 3] + aktoresPavarde[pavardeIndex - 2] + aktoresPavarde[pavardeIndex - 1]);


console.log("-----------------");


//Once upon a time in hollywood

let sak = "Once upon a time in hollywood";

let naujasSak = sak.replace(/o/gi, "\*")
console.log(naujasSak);


console.log("-----------------");


const skaicius1 = 0;
const skaicius2 = 1;
const skaicius3 = 2;
const skaicius4 = 2;

let suma0 = 0;
let suma1 = 0;
let suma2 = 0;

if (skaicius1 == 0) {
    suma0 = suma0 + 1;
}
else if (skaicius1 == 1) {
    suma1 = suma1 + 1;
}
else if (skaicius1 == 2) {
    suma2 = suma2 + 1;
}

if (skaicius2 == 0) {
    suma0 = suma0 + 1;
}
else if (skaicius2 == 1) {
    suma1 = suma1 + 1;
}
else if (skaicius2 == 2) {
    suma2 = suma2 + 1;
}

if (skaicius3 == 0) {
    suma0 = suma0 + 1;
}
else if (skaicius3 == 1) {
    suma1 = suma1 + 1;
}
else if (skaicius3 == 2) {
    suma2 = suma2 + 1;
}

if (skaicius4 == 0) {
    suma0 = suma0 + 1;
}
else if (skaicius4 == 1) {
    suma1 = suma1 + 1;
}
else if (skaicius4 == 2) {
    suma2 = suma2 + 1;
}




console.log("0 - kiekis:", suma0);
console.log("1 - kiekis:", suma1);
console.log("2 - kiekis:", suma2);