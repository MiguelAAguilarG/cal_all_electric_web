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
document.getElementById("formA").addEventListener("change", calc_main);
document.getElementById("formB").addEventListener("change", calc_main);

//document.getElementById("current").addEventListener("change", calc_NO_current);
//document.getElementById("realPower").addEventListener("change", calc_NO_realPower);
//document.getElementById("apparentPower").addEventListener("change", calc_NO_apparentPower);
//document.getElementById("pf").addEventListener("change", calc_NO_pf);

function currentFun(system, powerReal, pf) {

    let current;
    if (system === "single"){
        current = powerReal/(voltage*pf)
    }
    else if (system === 'three') {
        current = powerReal/(Math.sqrt(3)*voltage*pf);
    }

    return current;
}

function powerApparent(parameter) {

    let powerApparent = parameter.powerReal/parameter.pf;

    return powerApparent;
}

function powerReal(parameter) {

    let powerReal = parameter.powerApparent*parameter.pf;

    return powerReal;
}

function realPowerFun(system, powerReal, pf) {

    let current;
    if (system === "single"){
        current = powerReal/(voltage*pf)
    }
    else if (system === 'three') {
        current = powerReal/(Math.sqrt(3)*voltage*pf);
    }

    return current;
}

function apparentPower(system, powerReal, pf) {

    let current;
    if (system === "single"){
        current = powerReal/(voltage*pf)
    }
    else if (system === 'three') {
        current = powerReal/(Math.sqrt(3)*voltage*pf);
    }

    return current;
}

function pf(system, powerReal, pf) {

    let current;
    if (system === "single"){
        current = powerReal/(voltage*pf)
    }
    else if (system === 'three') {
        current = powerReal/(Math.sqrt(3)*voltage*pf);
    }

    return current;
}

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
    var length = Number.parseFloat(document.getElementById("length").value);
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
    //var current = current(numAWGTotal);
    var currentPerConductor = currentPerConductorFun(current, conductorsPerPhase);

    var factorTemperature = factorTemperatureFun(Tinsulation, Tambient);
    var factorGrouping = factorGroupingFun(tableFactorGrouping, conductorsPerConduit);
    var factorAdjustment = factorAdjustmentFun(factorTemperature, factorGrouping);

    var TableAmpacity = seacherTableAmpacityFun(Tinsulation, conductorMaterial);
    
    var AmpacityIndex = AmpacityIndexFun(TableAmpacity, currentPerConductor, 1);
    var AmpacityContinuousLoadIndex = AmpacityIndexFun(TableAmpacity, currentPerConductor*1.25, 1);
    var AmpacityFactorTemperatureIndex = AmpacityIndexFun(TableAmpacity, currentPerConductor, factorTemperature);
    var AmpacityFactorGroupingIndex = AmpacityIndexFun(TableAmpacity, currentPerConductor, factorGrouping);
    var AmpacityFactorAdjustmentIndex = AmpacityIndexFun(TableAmpacity, currentPerConductor, factorAdjustment);

    var Ampacity = TableAmpacity[AmpacityIndex];
    var AmpacityContinuousLoad = TableAmpacity[AmpacityContinuousLoadIndex];
    var AmpacityFactorTemperature = TableAmpacity[AmpacityFactorTemperatureIndex]*factorTemperature;
    var AmpacityFactorGrouping = TableAmpacity[AmpacityFactorGroupingIndex]*factorGrouping;
    var AmpacityFactorAdjustment = TableAmpacity[AmpacityFactorAdjustmentIndex]*factorAdjustment;

    var gaugeAmpacity = AWG[AmpacityIndex];
    var gaugeAmpacityContinuousLoad = AWG[AmpacityContinuousLoadIndex];
    var gaugeAmpacityFactorTemperature = AWG[AmpacityFactorTemperatureIndex];
    var gaugeAmpacityFactorGrouping = AWG[AmpacityFactorGroupingIndex];
    var gaugeAmpacityFactorAdjustment = AWG[AmpacityFactorAdjustmentIndex];
    
    /*results */
    document.getElementById("ContinuousLoad").value = current*1.25.toFixed(decimals);
    document.getElementById("currentPerConductor").value = currentPerConductor.toFixed(decimals);

    document.getElementById("factorTemperature").value = factorTemperature.toFixed(decimals);
    document.getElementById("factorGrouping").value = factorGrouping;
    document.getElementById("factorAdjustment").value = factorAdjustment.toFixed(decimals);

    document.getElementById("Ampacity").value = Ampacity.toFixed(decimals);
    document.getElementById("AmpacityContinuousLoad").value = AmpacityContinuousLoad.toFixed(decimals);
    document.getElementById("AmpacityFactorTemperature").value = AmpacityFactorTemperature.toFixed(decimals);
    document.getElementById("AmpacityFactorGrouping").value = AmpacityFactorGrouping.toFixed(decimals);
    document.getElementById("AmpacityFactorAdjustment").value = AmpacityFactorAdjustment.toFixed(decimals);

    document.getElementById("gaugeAmpacity").value = gaugeAmpacity;
    document.getElementById("gaugeAmpacityContinuousLoad").value = gaugeAmpacityContinuousLoad;
    document.getElementById("gaugeAmpacityFactorTemperature").value = gaugeAmpacityFactorTemperature;
    document.getElementById("gaugeAmpacityFactorGrouping").value = gaugeAmpacityFactorGrouping;
    document.getElementById("gaugeAmpacityFactorAdjustment").value = gaugeAmpacityFactorAdjustment;
    

}

function currentFun(system, powerReal, pf) {

    let current;
    if (system === "single"){
        current = powerReal/(voltage*pf)
    }
    else if (system === 'three') {
        current = powerReal/(Math.sqrt(3)*voltage*pf);
    }

    return current;
}

function currentPerConductorFun(current, conductorsPerPhase) {

    return currentPerConductor = current/conductorsPerPhase;
}

function RTempFun(R, Tinsulation) {

    let RTemp = R*(1 + 0.0039*(Tinsulation - 75));

    return RTemp;
}

function ZeFun(RTemp, XL, pf) {

    let Ze = (RTemp*pf + XL*Math.sin(Math.acos(pf)))/1000;

    return RTemp;
}

function voltageDropPercentFun(system, Ze, length, current, voltage, conductorsPerPhase) {

    let voltageDropPercent;
    if (system === "single"){
        voltageDropPercent = 2*Ze*length*current*100/(voltage*conductorsPerPhase);
    }
    else if (system === 'three') {
        voltageDropPercent = Math.sqrt(3)*Ze*length*current*100/(voltage*conductorsPerPhase);
    }

    return voltageDropPercent;
}

function factorTemperatureFun(Tinsulation, Tambient) {

    let factorTemperature = Math.sqrt((Tinsulation - Tambient)/(Tinsulation - 30));

    return factorTemperature;
}

function factorGroupingFun(tableFactorGrouping, conductorsPerConduit) {

    for (const property in tableFactorGrouping) {
        if (property >= conductorsPerConduit) {
            return factorGrouping = tableFactorGrouping[property];
        } else {
            
        }
    }
}

function factorAdjustmentFun(factorTemperature, factorGrouping) {

    return factorAdjustment = factorTemperature *factorGrouping;
}

function seacherTableAmpacityFun(Tinsulation, conductorMaterial) {

    if (conductorMaterial === "Cu") {
        if (Tinsulation === 60) {
            return cooper60;
        } else if (Tinsulation === 75) {
            return cooper75;
        } else if (Tinsulation === 90) {
            return cooper90;
        } else{
    
        }
        
    } else if (conductorMaterial === "Al") {
        if (Tinsulation === 60) {
            return aluminium60;
        } else if (Tinsulation === 75) {
            return aluminium75;
        } else if (Tinsulation === 90) {
            return aluminium90;
        } else{
    
        }
    } else{

    }
}

function AmpacityIndexFun(TableAmpacity, current, factorAmpacity) {

    for (let index = 0; index < TableAmpacity.length; index++) {
        if (current <= TableAmpacity[index]*factorAmpacity) {
            return index;
        } else {
            
        }  
    }
}
    