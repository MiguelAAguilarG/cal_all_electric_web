const AWG =  ['14', '12', '10', '8', '6', '4', '3', '2', '1', '1/0', '2/0', '3/0', '4/0', '250', '300', '350', '400', '500', '600', '700', '750', '800', '900', '1000', '1250', '1500', '1750', '2000'];
const mm2 = [2.08, 3.31, 5.26, 8.37, 13.3, 21.2, 26.7, 33.6, 42.4, 53.49, 67.43, 85.01, 107.2, 127, 152.0, 177, 203, 253, 304, 355, 380, 405, 456, 507, 633, 700, 887, 1013];

const tableFactorGrouping = {3:1, 6:0.8, 9:0.7, 20:0.5, 30:0.45, 40:0.4, 50:0.35};

const cooper60 = [15, 20, 30, 40, 55, 70, 85, 90, 110, 125, 145, 165, 195, 215, 240, 260, 280, 320, 350, 385, 400, 410, 435, 455, 495, 525, 545, 555];
const cooper75 = [20, 25, 35, 50, 65, 85, 100, 115, 130, 150, 175, 200, 230, 255, 285, 310, 335, 380, 420, 460, 475, 490, 520, 545, 590, 625, 650, 665];
const cooper90 = [25, 30, 40, 55, 75, 95, 115, 130, 145, 170, 195, 225, 260, 290, 320, 350, 380, 430, 475, 520, 535, 555, 585, 615, 665, 705, 735, 750];

const aluminium60 = [0, 15, 25, 35, 40, 55, 65, 75, 85, 100, 115, 130, 150, 170, 195, 210, 225, 260, 285, 315, 320, 330, 355, 375, 405, 435, 455, 470];
const aluminium75 = [0, 20, 30, 49, 50, 65, 75, 90, 100, 120, 135, 155, 180, 205, 230, 250, 270, 310, 340, 375, 385, 395, 425, 445, 485, 520, 545, 560];
const aluminium90 = [0, 25, 35, 45, 55, 75, 85, 100, 115, 135, 150, 175, 205, 230, 260, 280, 305, 350, 385, 425, 435, 445, 480, 500, 545, 585, 615, 630];

window.addEventListener("DOMContentLoaded", calc_main, false);
document.getElementById("form0").addEventListener("change", calc_main);
document.getElementById("form1").addEventListener("change", calc_main);
document.getElementById("form2").addEventListener("change", calc_main);
document.getElementById("form3").addEventListener("change", calc_main);
document.getElementById("form4").addEventListener("change", calc_main);
document.getElementById("form5").addEventListener("change", calc_main);
document.getElementById("formA").addEventListener("change", calc_main);
document.getElementById("formB").addEventListener("change", calc_main);

function calc_main() {
    console.log("cambio");

    /*data */
    /*form0 */
    var decimals = Number.parseInt(document.getElementById("decimals").value);
    /*form1 */
    var system = document.getElementById("system").value;
    var voltage = Number.parseFloat(document.getElementById("voltage").value);
    var conductorsPerPhase = Number.parseInt(document.getElementById("conductorsPerPhase").value);
    /*form2 */
    var current = Number.parseFloat(document.getElementById("current").value);
    var realPower = Number.parseFloat(document.getElementById("realPower").value);
    var apparentPower = Number.parseFloat(document.getElementById("apparentPower").value);
    var pf = Number.parseFloat(document.getElementById("pf").value);
    /*form3 */
    var lenght = Number.parseFloat(document.getElementById("lenght").value);
    var voltageDropPercent = Number.parseFloat(document.getElementById("realPower").value);
    var voltageDropVolts = Number.parseFloat(document.getElementById("apparentPower").value);
    /*form4 */
    var Tambient = Number.parseFloat(document.getElementById("Tambient").value);
    var Tinsulation = Number.parseInt(document.getElementById("Tinsulation").value);
    var conductorMaterial = document.getElementById("conductorMaterial").value;
    var racewayMaterial = document.getElementById("racewayMaterial").value;
    /*formA */
    var conductorsPerConduit = Number.parseInt(document.getElementById("conductorsPerConduit").value);

    /*computation */
    var current = current(numAWGTotal);
    console.log(returnfunCheckbox);

    /*results */
    let e = 0;
    for(let ii = 18; ii >= 6; ii = ii-2) {

        document.getElementById("numAWG" + String(ii)).innerHTML = numAWGTotal[e];

        document.getElementById("inAWG" + String(ii) + "Total").innerHTML = inAWGTotal[e].toFixed(decimals);
        document.getElementById("cmAWG" + String(ii) + "Total").innerHTML = cmAWGTotal[e].toFixed(decimals);

        document.getElementById("inResult").innerHTML = inTotal.toFixed(decimals);
        document.getElementById("cmResult").innerHTML = cmTotal.toFixed(decimals);
        e++;
    }
}

function funNum() {
    var numAWG = [];
    for(let i = 1; i <= 9; i++) {

        numAWG.push([])
        for(let ii = 18; ii >= 6; ii = ii-2) {
            numAWG[i-1].push(Number.parseInt(document.getElementById("item" + String(i) + "AWG" + String(ii)).value));
        }
    }

    numAWG.push([])
    for(let ii = 18; ii >= 6; ii = ii-2) {
        numAWG[9].push(Number.parseInt(document.getElementById("itemDeviceAWG" + String(ii)).value));
    }
    console.log(numAWG);

    var numAWGTotal = [];
    for(let ii = 0; ii < 7; ii++) {

        numAWGTotal.push(0);
        for(let i = 0; i < 10; i++) {
            numAWGTotal[ii] = numAWGTotal[ii] + numAWG[i][ii];
        }
    }
    console.log(numAWGTotal);

    return [numAWG, numAWGTotal];
}


function current(system, powerReal, pf) {

    let current;
    if (system === "single"){
        current = powerReal/(voltage*pf)
    }
    else if (system === 'three') {
        current = powerReal/(Math.sqrt(3)*voltage*pf);
    }

    return current;
}

function RTemp(R, Tinsulation) {

    let RTemp = R*(1 + 0.0039*(Tinsulation - 75));

    return RTemp;
}

function Ze(RTemp, XL, pf) {

    let Ze = (RTemp*pf + XL*Math.sin(Math.acos(pf)))/1000;

    return RTemp;
}

function voltageDropPercent(system, Ze, lenght, current, voltage, conductorsPerPhase) {

    let voltageDropPercent;
    if (system === "single"){
        voltageDropPercent = 2*Ze*lenght*current*100/(voltage*conductorsPerPhase);
    }
    else if (system === 'three') {
        voltageDropPercent = Math.sqrt(3)*Ze*lenght*current*100/(voltage*conductorsPerPhase);
    }

    return voltageDropPercent;
}
