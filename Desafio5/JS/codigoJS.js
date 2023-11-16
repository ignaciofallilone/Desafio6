//Probando Comentarios en JS//

var cantidadDeGatos = 10;
var emoji = ``;
var contador = 1;

console.log("Ejercicio 1")
console.log("")

for (let i = 1; i <= cantidadDeGatos; i++) {

    const cat = "Gato #:";
    const catNumber = cat.concat(i);


    if (contador == 1) {
        emoji = `😺`;

    }
    else if (contador == 2) {
        emoji = `😸`;
    }
    else {
        emoji = `😹`
        contador = 0;
    }

    contador++;

    console.log(`${ catNumber } ${ emoji }`);
}

console.log("")
console.log("Ejercicio 2")
console.log("")

var cantidadDeGatos = 5;
var stepsNumber = 3;

for (let i = 1; i <= cantidadDeGatos; i++) {

    const cat = "Gato #:";
    const catNumber = cat.concat(i + ` 🐈`);
    let catSteps = catNumber;
    for (let y = 1; y <= stepsNumber; y++) {

        catSteps = catSteps.concat(`🐾`)

    }

    console.log(`${catSteps} `);
}

console.log("")
console.log("Ejercicio 3")
console.log("")

var cantidadDeGatos = 10;
var stepsNumber = 4;

for (let i = 1; i <= cantidadDeGatos; i++) {

    if (i % 2 == 0) {

        const cat = "Gato #:";
        const catNumber = cat.concat(i + ` 🐈‍⬛`);
        let catSteps = catNumber;
        for (let y = 1; y <= stepsNumber; y++) {

            catSteps = catSteps.concat(`🐾`)

        }

        console.log(`${catSteps} `);

    } else {

        const cat = "Gato #:";
        const catNumber = cat.concat(i + ` 🐈`);
        let catSteps = catNumber;
        for (let y = 1; y <= stepsNumber; y++) {

            catSteps = catSteps.concat(`🐾`)

        }

        console.log(`${catSteps} `);

    }




}