'use strict'

let x = "";
let cant = 1;

for (let j = 0; j < 4; j++) {
    if (j == 3) {
        for (let i = 0; i < 3; i++) {
            x = x + "<p class='tronco'> ";
            for (let con = 0; con < 5; con++) {
                let num = Math.floor(Math.random() * 2);
                x = x + " " + num;
            }
            x = x + " </p>";
            cant = cant + 2;
        }
        cant = cant - 4;
    }

    else {
        for (let i = 0; i < 6; i++) {
            x = x + "<p class='cosa'> ";
            for (let con = 0; con < cant; con++) {
                let num = Math.floor(Math.random() * 2);
                let num2 = Math.floor(Math.random() * 4);
                x = x + "<span id='elemento" + j + "-" + i + "-" + con + "' class='color" + num2 + "'> " + num + " </span>";
            }
            x = x + " </p>";
            cant = cant + 2;
        }
        cant = cant - 4;
    }
}
let y = document.getElementById("arbol");
y.innerHTML = x;

setInterval(() => {    
let cant = 1;
    for (let j = 0; j < 3; j++) {
        for (let i = 0; i < 6; i++) {
            for (let con = 0; con < cant; con++) {
                let num = document.getElementById("elemento" + j + "-" + i + "-" + con + "");
                let num2 = Math.floor(Math.random() * 4);
                num.className = "color" + num2 + "";
            }            
            cant = cant + 2;
        }
        cant = cant - 4;
    }
}, 500);
setInterval(() => {  
    document.getElementById("estrella").className="material-icons estrella"+Math.floor(Math.random() * 4);
    }, 500);