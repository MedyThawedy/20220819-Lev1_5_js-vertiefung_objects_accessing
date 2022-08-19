let unserLager = {
    schreibtisch: {
        schublade: "Hefter"
    },
    schrank: {
        "Obere Schublade": {
            Ordner1: "Dokumente",
            Ordner2: "Geheimnisse"
        },
        "Untere Schublade": "Cola"
    }
};
//Greife auf die Eigenschaften dieses Objekts zu und gib folgende Werte in der Konsole aus:
//Geheimnisse
let g = unserLager.schrank["Obere Schublade"].Ordner2;
console.log(g);
//Cola
let c = unserLager.schrank["Untere Schublade"];
console.log(c);
//Hefter
let h = unserLager.schreibtisch.schublade;
console.log(h);
