var titulo = document.title;
console.log(`${titulo}`);


function createName(HTMLlist) {
    var nombre = "";
    for (let i = 0; i < HTMLlist.length; i++) {
        const element = HTMLlist[i];
        if (element.tagName === "DD" && element.innerText) {
            if (nombre) {
                nombre = nombre.concat(" ");
            }
            nombre = nombre.concat(`${element.innerText}`);
        }

    }

    return `"${nombre}"`;
}
function printList(list1, list2) {

    var string = "-----" + "\n";

    string = string.concat("Integrante 1: " +
        createName(list1) + "\n"
    )
    string = string.concat("Integrante 2: " +
        createName(list2) + "\n" + "-----"
    )

    return `${string}`;

}

function repeatName() {
    const array = document.getElementsByTagName("dd")
    const nameFirstperson = [];
    const nameSecondperson = [];
    var noHay = true;
    // debugger
    for (let i = 0; i < 2; i++) {
        nameFirstperson.push(array[i])
    }
    for (let i = 4; i < 6; i++) {
        nameSecondperson.push(array[i])
    }
    for (let i = 0; i < nameFirstperson.length; i++) {
        const name1 = nameFirstperson[i];
        for (let y = 0; y < nameSecondperson.length; y++) {
            const name2 = nameSecondperson[y];
            if (name1.innerText && name2.innerText) {
                if (name1.innerText === name2.innerText) {
                    console.log("Hay coincidencia")
                    color = window.prompt("Hubo una coincidencia!" + "\n" + "Elija un color")
                    name1.style =  `Color:${color}`
                    name2.style =  `Color:${color}`
                    noHay = false;

                }
            }
        }
    }

    if (noHay) {
        console.log("No hay coincidencias")
    }
    rta = confirm("¿Buscar coincidencias en apellidos?")
    if (rta) {
        const nameFirstperson = [];
        const nameSecondperson = [];
        var noHay = true;
        for (let i = 2; i < 4; i++) {
            nameFirstperson.push(array[i])
        }
        for (let i = 6; i < 8; i++) {
            nameSecondperson.push(array[i])
        }
        for (let i = 0; i < nameFirstperson.length; i++) {
            const name1 = nameFirstperson[i];
            for (let y = 0; y < nameSecondperson.length; y++) {
                const name2 = nameSecondperson[y];
                if (name1.innerText && name2.innerText) {
                    if (name1.innerText === name2.innerText) {
                        console.log("Hay coincidencia")
                        color = window.prompt("Hubo una coincidencia!" + "\n" + "Elija un color")
                        name1.style =  `Color:${color}`
                        name2.style =  `Color:${color}`
                        noHay = false;
                    }
                }
            }
        }
        if (noHay) {
            console.log("No hay coincidencias")
        }
    }
}


const list1 = document.getElementById("list1").children;
const list2 = document.getElementById("list2").children;



console.log(printList(list1, list2));
repeatName(list1, list2)