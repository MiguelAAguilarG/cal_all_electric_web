const AWG =  ['14', '12', '10', '8', '6', '4', '3', '2', '1', '1/0', '2/0', '3/0', '4/0', '250', '300', '350', '400', '500', '600', '700', '750', '800', '900', '1000', '1250', '1500', '1750', '2000'];
const mm2 = [2.08, 3.31, 5.26, 8.37, 13.3, 21.2, 26.7, 33.6, 42.4, 53.49, 67.43, 85.01, 107.2, 127, 152.0, 177, 203, 253, 304, 355, 380, 405, 456, 507, 633, 700, 887, 1013];

const tableFactorGrouping = {3:1, 6:0.8, 9:0.7, 20:0.5, 30:0.45, 40:0.4, 50:0.35};

const cooper60 = [15, 20, 30, 40, 55, 70, 85, 90, 110, 125, 145, 165, 195, 215, 240, 260, 280, 320, 350, 385, 400, 410, 435, 455, 495, 525, 545, 555];
const cooper75 = [20, 25, 35, 50, 65, 85, 100, 115, 130, 150, 175, 200, 230, 255, 285, 310, 335, 380, 420, 460, 475, 490, 520, 545, 590, 625, 650, 665];
const cooper90 = [25, 30, 40, 55, 75, 95, 115, 130, 145, 170, 195, 225, 260, 290, 320, 350, 380, 430, 475, 520, 535, 555, 585, 615, 665, 705, 735, 750];

const aluminium60 = [0, 15, 25, 35, 40, 55, 65, 75, 85, 100, 115, 130, 150, 170, 195, 210, 225, 260, 285, 315, 320, 330, 355, 375, 405, 435, 455, 470];
const aluminium75 = [0, 20, 30, 49, 50, 65, 75, 90, 100, 120, 135, 155, 180, 205, 230, 250, 270, 310, 340, 375, 385, 395, 425, 445, 485, 520, 545, 560];
const aluminium90 = [0, 25, 35, 45, 55, 75, 85, 100, 115, 135, 150, 175, 205, 230, 260, 280, 305, 350, 385, 425, 435, 445, 480, 500, 545, 585, 615, 630];

const XCuPVC = [0.19, 0.177, 0.164, 0.171, 0.167, 0.157, 0.154, 0.148, 0.151, 0.144, 0.141, 0.138, 0.135, 0.135, 0.135, 0.131, 0.131, 0.128, 0.128, 0.125, 0.121];
const XCuAl = [0.19, 0.177, 0.164, 0.171, 0.167, 0.157, 0.154, 0.148, 0.151, 0.144, 0.141, 0.138, 0.135, 0.135, 0.135, 0.131, 0.131, 0.128, 0.128, 0.125, 0.121];
const XCuFe = [0.24, 0.223, 0.207, 0.213, 0.21, 0.197, 0.194, 0.187, 0.187, 0.18, 0.177, 0.171, 0.167, 0.171, 0.167, 0.164, 0.161, 0.157, 0.157, 0.157, 0.151];

const XAlPVC = [0.19, 0.177, 0.164, 0.171, 0.167, 0.157, 0.154, 0.148, 0.151, 0.144, 0.141, 0.138, 0.135, 0.135, 0.135, 0.131, 0.131, 0.128, 0.128, 0.125, 0.121];
const XAlAl = [0.19, 0.177, 0.164, 0.171, 0.167, 0.157, 0.154, 0.148, 0.151, 0.144, 0.141, 0.138, 0.135, 0.135, 0.135, 0.131, 0.131, 0.128, 0.128, 0.125, 0.121];
const XAlFe = [0.24, 0.223, 0.207, 0.213, 0.21, 0.197, 0.194, 0.187, 0.187, 0.18, 0.177, 0.171, 0.167, 0.171, 0.167, 0.164, 0.161, 0.157, 0.157, 0.157, 0.151];

const RCuPVC = [10.2, 6.6, 3.9, 2.56, 1.61, 1.02, 0.82, 0.62, 0.49, 0.39, 0.33, 0.253, 0.203, 0.171, 0.144, 0.125, 0.108, 0.089, 0.075, 0.062, 0.049];
const RCuAl = [10.2, 6.6, 3.9, 2.56, 1.61, 1.02, 0.82, 0.66, 0.52, 0.43, 0.33, 0.269, 0.22, 0.187, 0.161, 0.141, 0.125, 0.105, 0.092, 0.079, 0.062];
const RCuFe = [10.2, 6.6, 3.9, 2.56, 1.61, 1.02, 0.82, 0.66, 0.52, 0.39, 0.33, 0.259, 0.207, 0.177, 0.148, 0.128, 0.115, 0.095, 0.082, 0.069, 0.059];

const RAlPVC = [0.0, 0.0, 0.0, 0.0, 2.66, 1.67, 1.31, 1.05, 0.82, 0.66, 0.52, 0.43, 0.33, 0.279, 0.233, 0.2, 0.177, 0.141, 0.118, 0.095, 0.075];
const RAlAl = [0.0, 0.0, 0.0, 0.0, 2.66, 1.67, 1.31, 1.05, 0.85, 0.69, 0.52, 0.43, 0.36, 0.295, 0.249, 0.217, 0.194, 0.157, 0.135, 0.112, 0.089];
const RAlFe = [0.0, 0.0, 0.0, 0.0, 2.66, 1.67, 1.31, 1.05, 0.82, 0.66, 0.52, 0.43, 0.33, 0.282, 0.236, 0.207, 0.18, 0.148, 0.125, 0.102, 0.082];

window.addEventListener("DOMContentLoaded", calc_main, false);
document.getElementById("form0").addEventListener("change", calc_main);
document.getElementById("form1").addEventListener("change", calc_main);
document.getElementById("form2").addEventListener("change", calc_main);
document.getElementById("form3").addEventListener("change", calc_main);
document.getElementById("form4").addEventListener("change", calc_main);
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
    var pf = Number.parseFloat(document.getElementById("pf").value);

    /**optionLoadArray **/
    var optionLoadArray = document.getElementsByName("optionLoad");
              
    for(i = 0; i < optionLoadArray.length; i++) { 
        if(optionLoadArray[i].checked) {
            var optionLoad = optionLoadArray[i].value;
            break;
        }
    }

    document.getElementById("realPower").className = "data";
    document.getElementById("current").className = "data";
    if (optionLoad === "optionLoadcurrent") {
        var current = Number.parseFloat(document.getElementById("current").value);

        var realPower = realPowerFun(system, voltage, current, pf);

        document.getElementById("realPower").className = "result";

    } else if (optionLoad === "optionLoadrealPower") {
        var realPower = Number.parseFloat(document.getElementById("realPower").value);

        var current = currentFun(system, voltage, realPower, pf);

        document.getElementById("current").className = "result";

    } else {
        
    }
    /**optionLoadArray **/

    /*form3 */
    var length = Number.parseFloat(document.getElementById("length").value);
    var voltageDropPercent = Number.parseFloat(document.getElementById("voltageDropPercent").value);
    var voltageDropVolts = Number.parseFloat(document.getElementById("voltageDropVolts").value);
    /*form4 */
    var Tambient = Number.parseFloat(document.getElementById("Tambient").value);
    var Tinsulation = Number.parseInt(document.getElementById("Tinsulation").value);
    var conductorMaterial = document.getElementById("conductorMaterial").value;
    var racewayMaterial = document.getElementById("racewayMaterial").value;
    /*formA */
    var conductorsPerConduit = Number.parseInt(document.getElementById("conductorsPerConduit").value);

    /**optionvoltageDropArray **/
    var optionvoltageDropArray = document.getElementsByName("optionvoltageDrop");
        
    for(i = 0; i < optionvoltageDropArray.length; i++) { 
        if(optionvoltageDropArray[i].checked) {
            var optionvoltageDrop = optionvoltageDropArray[i].value;
            break;
        }
    }

    document.getElementById("voltageDropPercent").className = "data";
    document.getElementById("voltageDropVolts").className = "data";
    var RArray = seacherTableRFun(racewayMaterial, conductorMaterial);
    var XArray = seacherTableXFun(racewayMaterial, conductorMaterial);

    var RTemp;
    var XL;
    var Ze;
    var voltageDropPercentResult;
    var voltageDropVoltsResult;
    if (optionvoltageDrop === "optionvoltageDropPercent") {
        var voltageDropPercent = Number.parseFloat(document.getElementById("voltageDropPercent").value);

        for (let index = 0; index < RArray.length; index++) {
            RTemp = RTempFun(RArray[index], Tinsulation);
            XL = XArray[index];
    
            Ze = ZeFun(RTemp, XL, pf);
            voltageDropPercentResult = voltageDropPercentFun(system, Ze, length, current, voltage, conductorsPerPhase);
            if (voltageDropPercentResult <= voltageDropPercent) {
                var voltageDropIndex = index;
                break;
            }

        }

        voltageDropVolts = voltageDropPercent*voltage/100;
        voltageDropVoltsResult = voltageDropPercentResult*voltage/100;
        document.getElementById("voltageDropVolts").className = "result";

    } else if (optionvoltageDrop === "optionvoltageDropVolts") {
        var voltageDropVolts = Number.parseFloat(document.getElementById("voltageDropVolts").value);

        voltageDropPercent = voltageDropVolts/voltage*100;
        for (let index = 0; index < RArray.length; index++) {
            RTemp = RTempFun(RArray[index], Tinsulation);
            XL = XArray[index];
    
            Ze = ZeFun(RTemp, XL, pf);
            voltageDropPercentResult = voltageDropPercentFun(system, Ze, length, current, voltage, conductorsPerPhase);
            if (voltageDropPercentResult <= voltageDropPercent) {
                var voltageDropIndex = index;
                break;
            }

        }
        voltageDropVoltsResult = voltageDropPercentResult*voltage/100;
        document.getElementById("voltageDropPercent").className = "result";

    } else {
        
    }
    /**optionvoltageDropArray **/
    console.log(Ze);
    if (voltage <= 0  || current  <= 0  || realPower <= 0  || length <= 0  || voltageDropPercent <= 0  || voltageDropVolts  <= 0  ) {
        voltage = 0.5;
        current = 0.5;
        realPower = 0.5;
        length = 0.5;
        voltageDropPercent = 0.1;
        voltageDropVolts = 0.1;

        document.getElementById("voltage").value = voltage.toFixed(decimals);
        document.getElementById("current").value = current.toFixed(decimals);
        document.getElementById("realPower").value = realPower.toFixed(decimals);
        document.getElementById("length").value = length.toFixed(decimals);
        document.getElementById("voltageDropPercent").value = voltageDropPercent.toFixed(decimals);
        document.getElementById("voltageDropVolts").value = voltageDropVolts.toFixed(decimals);
    } else {
        
    }

    /*computation */

    var currentPerConductor = currentPerConductorFun(current, conductorsPerPhase);

    var apparentPower = apparentPowerFun(realPower, pf);
    var reactivePower = reactivePowerFun(realPower, pf);

    var factorTemperature = factorTemperatureFun(Tinsulation, Tambient);
    var factorGrouping = factorGroupingFun(tableFactorGrouping, conductorsPerConduit);
    var factorAdjustment = factorAdjustmentFun(factorTemperature, factorGrouping);

    var AmpacityArray = seacherAmpacityArrayFun(Tinsulation, conductorMaterial);
    
    var AmpacityIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor, 1);
    var AmpacityContinuousLoadIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor*1.25, 1);
    var AmpacityFactorTemperatureIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor, factorTemperature);
    var AmpacityFactorGroupingIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor, factorGrouping);
    var AmpacityFactorAdjustmentIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor, factorAdjustment);

    var Ampacity = AmpacityArray[AmpacityIndex];
    var AmpacityContinuousLoad = AmpacityArray[AmpacityContinuousLoadIndex];
    var AmpacityFactorTemperature = AmpacityArray[AmpacityFactorTemperatureIndex]*factorTemperature;
    var AmpacityFactorGrouping = AmpacityArray[AmpacityFactorGroupingIndex]*factorGrouping;
    var AmpacityFactorAdjustment = AmpacityArray[AmpacityFactorAdjustmentIndex]*factorAdjustment;

    var sizeAmpacity = AWG[AmpacityIndex];
    var sizeAmpacityContinuousLoad = AWG[AmpacityContinuousLoadIndex];
    var sizeAmpacityFactorTemperature = AWG[AmpacityFactorTemperatureIndex];
    var sizeAmpacityFactorGrouping = AWG[AmpacityFactorGroupingIndex];
    var sizeAmpacityFactorAdjustment = AWG[AmpacityFactorAdjustmentIndex];

    var mm2Ampacity = mm2[AmpacityIndex];
    var mm2AmpacityContinuousLoad = mm2[AmpacityContinuousLoadIndex];
    var mm2AmpacityFactorTemperature = mm2[AmpacityFactorTemperatureIndex];
    var mm2AmpacityFactorGrouping = mm2[AmpacityFactorGroupingIndex];
    var mm2AmpacityFactorAdjustment = mm2[AmpacityFactorAdjustmentIndex];

    var AmpacityVoltageDrop = AmpacityArray[voltageDropIndex];
    var sizeAmpacityVoltageDrop = AWG[voltageDropIndex];
    var mm2AmpacityVoltageDrop = mm2[voltageDropIndex];
    
    /*results */
    document.getElementById("current").value = current.toFixed(decimals);
    document.getElementById("ContinuousLoad").value = (current*1.25).toFixed(decimals);
    document.getElementById("currentPerConductor").value = currentPerConductor.toFixed(decimals);
    document.getElementById("realPower").value = realPower.toFixed(decimals);
    document.getElementById("apparentPower").value = apparentPower.toFixed(decimals);
    document.getElementById("reactivePower").value = reactivePower.toFixed(decimals);

    document.getElementById("factorTemperature").value = factorTemperature.toFixed(decimals);
    document.getElementById("factorGrouping").value = factorGrouping;
    document.getElementById("factorAdjustment").value = factorAdjustment.toFixed(decimals);

    /** Ampacity **/
    document.getElementById("Ampacity").value = Ampacity.toFixed(decimals);
    document.getElementById("AmpacityContinuousLoad").value = AmpacityContinuousLoad.toFixed(decimals);
    document.getElementById("AmpacityFactorTemperature").value = AmpacityFactorTemperature.toFixed(decimals);
    document.getElementById("AmpacityFactorGrouping").value = AmpacityFactorGrouping.toFixed(decimals);
    document.getElementById("AmpacityFactorAdjustment").value = AmpacityFactorAdjustment.toFixed(decimals);

    document.getElementById("sizeAmpacity").value = sizeAmpacity;
    document.getElementById("sizeAmpacityContinuousLoad").value = sizeAmpacityContinuousLoad;
    document.getElementById("sizeAmpacityFactorTemperature").value = sizeAmpacityFactorTemperature;
    document.getElementById("sizeAmpacityFactorGrouping").value = sizeAmpacityFactorGrouping;
    document.getElementById("sizeAmpacityFactorAdjustment").value = sizeAmpacityFactorAdjustment;

    document.getElementById("mm2Ampacity").value = mm2Ampacity;
    document.getElementById("mm2AmpacityContinuousLoad").value = mm2AmpacityContinuousLoad;
    document.getElementById("mm2AmpacityFactorTemperature").value = mm2AmpacityFactorTemperature;
    document.getElementById("mm2AmpacityFactorGrouping").value = mm2AmpacityFactorGrouping;
    document.getElementById("mm2AmpacityFactorAdjustment").value = mm2AmpacityFactorAdjustment;
    /** Ampacity **/

    /** VoltageDrop **/
    document.getElementById("voltageDropVolts").value = voltageDropVolts.toFixed(decimals);
    document.getElementById("voltageDropPercent").value = voltageDropPercent.toFixed(decimals);

    document.getElementById("voltageDropPercentResult").value = voltageDropPercentResult.toFixed(decimals);
    document.getElementById("voltageDropVoltsResult").value = voltageDropVoltsResult.toFixed(decimals);

    var AmpacityVoltageDrop = AmpacityArray[voltageDropIndex];
    var sizeAmpacityVoltageDrop = AWG[voltageDropIndex];
    var mm2AmpacityVoltageDrop = mm2[voltageDropIndex];

    document.getElementById("AmpacityVoltageDrop").value = AmpacityVoltageDrop;
    document.getElementById("sizeAmpacityVoltageDrop").value = sizeAmpacityVoltageDrop;
    document.getElementById("mm2AmpacityVoltageDrop").value = mm2AmpacityVoltageDrop;

    document.getElementById("Lmax").value = (length*voltageDropPercent/voltageDropPercentResult).toFixed(decimals);
    document.getElementById("Imax").value = (current*voltageDropPercent/voltageDropPercentResult).toFixed(decimals);
    /** VoltageDrop **/
}

function currentFun(system, voltage, realPower, pf) {

    let current;
    if (system === "single"){
        current = realPower/(voltage*pf)
    }
    else if (system === 'three') {
        current = realPower/(Math.sqrt(3)*voltage*pf);
    }

    return current;
}

function realPowerFun(system, voltage, current, pf) {

    let realPower;
    if (system === "single"){
        realPower = current*voltage*pf;
    }
    else if (system === 'three') {
        realPower = current*Math.sqrt(3)*voltage*pf;
    }

    return realPower;
}

function apparentPowerFun(realPower, pf) {

    return apparentPower = realPower/pf;
}

function reactivePowerFun(realPower, pf) {

    return apparentPower = realPower*Math.tan(Math.acos(pf));
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

    return Ze;
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

    return factorAdjustment = factorTemperature*factorGrouping;
}

function seacherAmpacityArrayFun(Tinsulation, conductorMaterial) {

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

function AmpacityIndexFun(AmpacityArray, current, factorAmpacity) {

    for (let index = 0; index < AmpacityArray.length; index++) {
        if (current <= AmpacityArray[index]*factorAmpacity) {
            return index;
        } else {
            
        }  
    }
}

function seacherTableXFun(racewayMaterial, conductorMaterial) {
    if (conductorMaterial === "Cu") {
        if (racewayMaterial === "PVC") {
            return XCuPVC;
        } else if (racewayMaterial === "Al") {
            return XCuAl;
        } else if (racewayMaterial === "Fe") {
            return XCuFe;
        } else{
    
        }
        
    } else if (conductorMaterial === "Al") {
        if (racewayMaterial === "PVC") {
            return XAlPVC;
        } else if (racewayMaterial === "Al") {
            return XAlAl;
        } else if (racewayMaterial === "Fe") {
            return XAlFe;
        } else{
    
        }
    } else{

    }
}

function seacherTableRFun(racewayMaterial, conductorMaterial) {
    if (conductorMaterial === "Cu") {
        if (racewayMaterial === "PVC") {
            return RCuPVC;
        } else if (racewayMaterial === "Al") {
            return RCuAl;
        } else if (racewayMaterial === "Fe") {
            return RCuFe;
        } else{
    
        }
        
    } else if (conductorMaterial === "Al") {
        if (racewayMaterial === "PVC") {
            return RAlPVC;
        } else if (racewayMaterial === "Al") {
            return RAlAl;
        } else if (racewayMaterial === "Fe") {
            return RAlFe;
        } else{
    
        }
    } else{

    }
}

function voltageDropIndexFun(AmpacityArray, current, factorAmpacity) {

    for (let index = 0; index < AmpacityArray.length; index++) {
        if (current <= AmpacityArray[index]*factorAmpacity) {
            return index;
        } else {
            
        }  
    }
}
    