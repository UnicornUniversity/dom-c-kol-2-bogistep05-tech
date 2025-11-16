
// Funkce pro převod čísla z binární soustavy do desítkové
function binToDec(binaryString) {
    // Kontrola platnosti vstupu
    for (let i = 0; i < binaryString.length; i++) {
        if (binaryString[i] !== '0' && binaryString[i] !== '1') {
            return "Neplatný vstup - číslo není dvojkové";
        }
    }

    let vysledek = 0;
    let mocnina = 0;

    // Procházíme číslicemi zprava doleva
    for (let i = binaryString.length - 1; i >= 0; i--) {
        let cislice = Number(binaryString[i]);
        vysledek += cislice * Math.pow(2, mocnina);
        mocnina++;
    }

    return vysledek;
}

// Test funkce
console.log(binToDec("11011000111")); // Výstup: 1735

// Export pro automatické testy
export { binToDec };
