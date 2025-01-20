
//Constants del logo
const alcada = 245;
const diametre = 80;
const marge = 15;

//Funció inicial, que aniran pintant cadascuna de les peces
function pintar() {
    console.log("pintem");
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    pintarI(ctx);
    pintarP(ctx);
    pintarPuntFinal(ctx);
}


function pintarI(ctx) {
    console.log("pintem la I");

    //punt
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.lineWidth = 1;
    ctx.arc(marge + (diametre / 2), marge + (diametre / 2), diametre / 2, 0, 2 * Math.PI);
    //ctx.stroke();

    //cos
    ctx.rect(marge, marge + (diametre) + marge, diametre, alcada - diametre - marge);
    ctx.stroke();
}

function pintarP(ctx) {
    console.log("Pintem la P");
    ctx.beginPath();
    ctx.strokeStyle = "green";

    ctx.rect(110, marge, diametre, alcada);

    ctx.rect(205, marge, diametre, alcada - diametre - marge);
    ctx.stroke();


}

function pintarPuntFinal(ctx) {
    ctx.beginPath();
    ctx.strokeStyle = "blue";
    ctx.arc(marge * 3 + diametre * 2 + (diametre / 2), marge + alcada - diametre / 2, diametre / 2, 0, 2 * Math.PI);
    ctx.stroke();
}

/*
//Es crida cada vegada que el ratolí es mou dins de l'element
function pintarRatoli(event) {
    console.log("ratoli");
    const canvas = document.getElementById("myCanvas");
    const ctx = canvas.getContext("2d");
    ctx.beginPath();
    ctx.fillStyle = "orange";
    ctx.strokeStyle = "black";
    ctx.arc(event.clientX, event.clientY, 20, 0, 2 * Math.PI);
    //ctx.stroke();
    ctx.fill();
    pintarI(ctx);
}
*/
console.log("Comencem a pintar");
pintar();
