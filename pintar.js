
//Constants del logo
const alcada = 245;
const diametre = 80;
const marge = 15;
const colorRectangle = "black";
const colorPunt = "Blue";

//obtenim les referèncias al canvas i al checkbox, i al color chooser
const canvas = document.getElementById("myCanvas");
const ctx = canvas.getContext("2d");
const check_pintar = document.getElementById("idPintar");
const chooser_color = document.getElementById("idColor");

//Funció inicial, que aniran pintant cadascuna de les peces
function pintar() {
    console.log("ho pintem tot");

    reset(ctx);
    pintarI(ctx);
    pintarP(ctx);
    pintarPuntFinal(ctx);
}


function pintarI(ctx) {
    console.log("pintem la I");

    //punt
    ctx.beginPath();
    ctx.fillStyle = colorPunt;
    ctx.lineWidth = 1;
    ctx.arc(marge + (diametre / 2), marge + (diametre / 2), diametre / 2, 0, 2 * Math.PI);
    ctx.fill();

    //cos
    ctx.beginPath();
    ctx.fillStyle = colorRectangle;
    ctx.fillRect(marge, marge + (diametre) + marge, diametre, alcada - diametre - marge);
    ctx.stroke();
}

function pintarP(ctx) {
    console.log("Pintem la P");

    ctx.beginPath();
    ctx.fillStyle = colorRectangle;
    ctx.fillRect(marge * 2 + diametre, marge, diametre, alcada);
    ctx.fillRect(marge * 3 + diametre * 2, marge, diametre, alcada - diametre - marge);
    ctx.stroke();
}

function pintarPuntFinal(ctx) {
    console.log("pintem el punt final");

    ctx.beginPath();
    ctx.fillStyle = colorPunt;
    ctx.arc(marge * 3 + diametre * 2 + (diametre / 2), marge + alcada - diametre / 2, diametre / 2, 0, 2 * Math.PI);
    ctx.fill();
}

/**
 * Pinta un rectangle blanc per esborrar tot el que ja hi hagi pintat
 * @param {*} ctx 
 */
function reset(ctx) {
    console.log("Esborrem el fons");

    ctx.beginPath();
    ctx.fillStyle = "white";
    ctx.fillRect(0, 0, 300, 300);
    ctx.fill();
}

//Es crida cada vegada que el ratolí es mou dins de l'element
function pintarRatoli(event) {
    console.log("ratoli");

    //Factor per fer més petit el punt quan estem pintem
    let factor;

    //Si no passa res, el color del punt serà l'original
    let colorTmp = colorPunt;

    //Afegim comprovació, i només esborrem si el check no està marcat
    if (check_pintar.checked) {
        //Quan estem pintant fem el punt 1/3 de la mida normal
        factor = 6;
        //pintem amb el color escollit
        colorTmp = chooser_color.value;
    } else {
        reset(ctx);
        pintarP(ctx);
        //Quan no estem pintant, el punt ha de ser normal, és a dir
        //el radi ha de ser la meitat del diametre "tipic"
        factor = 2;

    }

    ctx.beginPath();
    ctx.fillStyle = colorTmp;
    //event.clientX --> Coordenades respecte la finestra
    //even.offsetIX --> Coordenades respecte el canvas
    ctx.arc(event.offsetX, event.offsetY, diametre / factor, 0, 2 * Math.PI);
    ctx.fill();
    pintarI(ctx);
}

function sortida(event) {
    if (check_pintar.checked) {
    } else {
        pintar();
    }
}

console.log("Comencem a pintar");
pintar();
