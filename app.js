const AWG =  ['14', '12', '10', '8', '6', '4', '3', '2', '1', '1/0', '2/0', '3/0', '4/0', '250', '300', '350', '400', '500', '600', '700', '750', '800', '900', '1000', '1250', '1500', '1750', '2000'];
const mm2 = [2.08, 3.31, 5.26, 8.37, 13.3, 21.2, 26.7, 33.6, 42.4, 53.49, 67.43, 85.01, 107.2, 127, 152.0, 177, 203, 253, 304, 355, 380, 405, 456, 507, 633, 700, 887, 1013];
const cal = [2.08, 3.31, 5.26, 8.37, 13.3, 21.2, 26.7, 33.6, 42.4, 53.49, 67.43, 85.01, 107.2, 127, 152.0, 177, 203, 253, 304, 355, 380, 405, 456, 507, 633, 700, 887, 1013];

const tableFactorGrouping = {3:1, 6:0.8, 9:0.7, 20:0.5, 30:0.45, 40:0.4, 50:0.35};

const AmpacityTABLES = {
    310.16: {
        cooper60: {
            conductorMaterial: "Cu",
            Tinsulation: 60,
            Tambient: 30,
            grouping: 3,
            voltage: [0, 2000],
            AmpacityVALUES : [15, 20, 30, 40, 55, 70, 85, 95, 110, 125, 145, 165, 195, 215, 240, 260, 280, 320, 350, 385, 400, 410, 435, 455, 495, 525, 545, 555]
        },
        cooper75: {
            conductorMaterial: "Cu",
            Tinsulation: 75,
            Tambient: 30,
            grouping: 3,
            voltage: [0, 2000],
            AmpacityVALUES : [20, 25, 35, 50, 65, 85, 100, 115, 130, 150, 175, 200, 230, 255, 285, 310, 335, 380, 420, 460, 475, 490, 520, 545, 590, 625, 650, 665]
        },
        cooper90: {
            conductorMaterial: "Cu",
            Tinsulation: 90,
            Tambient: 30,
            grouping: 3,
            voltage: [0, 2000],
            AmpacityVALUES : [25, 30, 40, 55, 75, 95, 115, 130, 145, 170, 195, 225, 260, 290, 320, 350, 380, 430, 475, 520, 535, 555, 585, 615, 665, 705, 735, 750]
        },
        aluminium60: {
            conductorMaterial: "Al",
            Tinsulation: 60,
            Tambient: 30,
            grouping: 3,
            voltage: [0, 2000],
            AmpacityVALUES : [NaN, 15, 25, 35, 40, 55, 65, 75, 85, 100, 115, 130, 150, 170, 195, 210, 225, 260, 285, 315, 320, 330, 355, 375, 405, 435, 455, 470]
        },
        aluminium75: {
            conductorMaterial: "Al",
            Tinsulation: 75,
            Tambient: 30,
            grouping: 3,
            voltage: [0, 2000],
            AmpacityVALUES : [NaN, 20, 30, 49, 50, 65, 75, 90, 100, 120, 135, 155, 180, 205, 230, 250, 270, 310, 340, 375, 385, 395, 425, 445, 485, 520, 545, 560]
        },
        aluminium90: {
            conductorMaterial: "Al",
            Tinsulation: 90,
            Tambient: 30,
            grouping: 3,
            voltage: [0, 2000],
            AmpacityVALUES : [NaN, 25, 35, 45, 55, 75, 85, 100, 115, 135, 150, 175, 205, 230, 260, 280, 305, 350, 385, 425, 435, 445, 480, 500, 545, 585, 615, 630]
        }
    },
    310.17: {
        cooper60: {
            conductorMaterial: "Cu",
            Tinsulation: 60,
            Tambient: 30,
            voltage: [0, 2000],
            AmpacityVALUES : [25, 30, 40, 60, 80, 105, 120, 140, 165, 195, 225, 260, 300, 340, 375, 420, 455, 515, 575, 630, 655, 680, 730, 780, 890, 980, 1070, 1155]
        },
        cooper75: {
            conductorMaterial: "Cu",
            Tinsulation: 75,
            Tambient: 30,
            voltage: [0, 2000],
            AmpacityVALUES : [30, 35, 60, 70, 95, 125, 145, 170, 195, 230, 265, 310, 360, 405, 445, 505, 545, 620, 690, 755, 785, 815, 870, 935, 1065, 1175, 1280, 1385]
        },
        cooper90: {
            conductorMaterial: "Cu",
            Tinsulation: 90,
            Tambient: 30,
            voltage: [0, 2000],
            AmpacityVALUES : [35, 40, 55, 80, 105, 140, 165, 190, 220, 260, 300, 350, 405, 455, 500, 570, 615, 700, 780, 850, 885, 920, 980, 1055, 1200, 1325, 1445, 1560]
        },
        aluminium60: {
            conductorMaterial: "Al",
            Tinsulation: 60,
            Tambient: 30,
            voltage: [0, 2000],
            AmpacityVALUES : [25, 35, 45, 60, 80, 95, 110, 130, 150, 175, 200, 235, 265, 290, 330, 355, 405, 455, 500, 515, 535, 580, 625, 710, 795, 875, 960]
        },
        aluminium75: {
            conductorMaterial: "Al",
            Tinsulation: 75,
            Tambient: 30,
            voltage: [0, 2000],
            AmpacityVALUES : [30, 40, 55, 75, 100, 115, 135, 155, 180, 210, 240, 280, 315, 350, 395, 425, 485, 545, 595, 595, 620, 645, 700, 750, 855, 950, 1050, 1150]
        },
        aluminium90: {
            conductorMaterial: "Al",
            Tinsulation: 90,
            Tambient: 30,
            voltage: [0, 2000],
            AmpacityVALUES : [35, 45, 60, 85, 115, 130, 150, 175, 205, 235, 270, 315, 355, 395, 445, 480, 545, 615, 670, 700, 725, 790, 845, 965, 1070, 1185, 1295]
        }
    }
};

const cooper60_16 = [15, 20, 30, 40, 55, 70, 85, 95, 110, 125, 145, 165, 195, 215, 240, 260, 280, 320, 350, 385, 400, 410, 435, 455, 495, 525, 545, 555];
const cooper75_16 = [20, 25, 35, 50, 65, 85, 100, 115, 130, 150, 175, 200, 230, 255, 285, 310, 335, 380, 420, 460, 475, 490, 520, 545, 590, 625, 650, 665];
const cooper90_16 = [25, 30, 40, 55, 75, 95, 115, 130, 145, 170, 195, 225, 260, 290, 320, 350, 380, 430, 475, 520, 535, 555, 585, 615, 665, 705, 735, 750];

const aluminium60_16 = [NaN, 15, 25, 35, 40, 55, 65, 75, 85, 100, 115, 130, 150, 170, 195, 210, 225, 260, 285, 315, 320, 330, 355, 375, 405, 435, 455, 470];
const aluminium75_16 = [NaN, 20, 30, 49, 50, 65, 75, 90, 100, 120, 135, 155, 180, 205, 230, 250, 270, 310, 340, 375, 385, 395, 425, 445, 485, 520, 545, 560];
const aluminium90_16 = [NaN, 25, 35, 45, 55, 75, 85, 100, 115, 135, 150, 175, 205, 230, 260, 280, 305, 350, 385, 425, 435, 445, 480, 500, 545, 585, 615, 630];

const cooper60_17 = [25, 30, 40, 60, 80, 105, 120, 140, 165, 195, 225, 260, 300, 340, 375, 420, 455, 515, 575, 630, 655, 680, 730, 780, 890, 980, 1070, 1155];
const cooper75_17 = [30, 35, 60, 70, 95, 125, 145, 170, 195, 230, 265, 310, 360, 405, 445, 505, 545, 620, 690, 755, 785, 815, 870, 935, 1065, 1175, 1280, 1385];
const cooper90_17 = [35, 40, 55, 80, 105, 140, 165, 190, 220, 260, 300, 350, 405, 455, 500, 570, 615, 700, 780, 850, 885, 920, 980, 1055, 1200, 1325, 1445, 1560];

const aluminium60_17 = [25, 35, 45, 60, 80, 95, 110, 130, 150, 175, 200, 235, 265, 290, 330, 355, 405, 455, 500, 515, 535, 580, 625, 710, 795, 875, 960];
const aluminium75_17 = [30, 40, 55, 75, 100, 115, 135, 155, 180, 210, 240, 280, 315, 350, 395, 425, 485, 545, 595, 595, 620, 645, 700, 750, 855, 950, 1050, 1150];
const aluminium90_17 = [35, 45, 60, 85, 115, 130, 150, 175, 205, 235, 270, 315, 355, 395, 445, 480, 545, 615, 670, 700, 725, 790, 845, 965, 1070, 1185, 1295];

const XCuPVC = [0.19, 0.177, 0.164, 0.171, 0.167, 0.157, 0.154, 0.148, 0.151, 0.144, 0.141, 0.138, 0.135, 0.135, 0.135, 0.131, 0.131, 0.128, 0.128, NaN, 0.125, NaN, NaN, 0.121, NaN, NaN, NaN, NaN];
const XCuAl = [0.19, 0.177, 0.164, 0.171, 0.167, 0.157, 0.154, 0.148, 0.151, 0.144, 0.141, 0.138, 0.135, 0.135, 0.135, 0.131, 0.131, 0.128, 0.128, NaN, 0.125, NaN, NaN, 0.121, NaN, NaN, NaN, NaN];
const XCuFe = [0.24, 0.223, 0.207, 0.213, 0.21, 0.197, 0.194, 0.187, 0.187, 0.18, 0.177, 0.171, 0.167, 0.171, 0.167, 0.164, 0.161, 0.157, 0.157, NaN, 0.157, NaN, NaN, 0.151, NaN, NaN, NaN, NaN];

const XAlPVC = [0.19, 0.177, 0.164, 0.171, 0.167, 0.157, 0.154, 0.148, 0.151, 0.144, 0.141, 0.138, 0.135, 0.135, 0.135, 0.131, 0.131, 0.128, 0.128, NaN, 0.125, NaN, NaN, 0.121, NaN, NaN, NaN, NaN];
const XAlAl = [0.19, 0.177, 0.164, 0.171, 0.167, 0.157, 0.154, 0.148, 0.151, 0.144, 0.141, 0.138, 0.135, 0.135, 0.135, 0.131, 0.131, 0.128, 0.128, NaN, 0.125, NaN, NaN, 0.121, NaN, NaN, NaN, NaN];
const XAlFe = [0.24, 0.223, 0.207, 0.213, 0.21, 0.197, 0.194, 0.187, 0.187, 0.18, 0.177, 0.171, 0.167, 0.171, 0.167, 0.164, 0.161, 0.157, 0.157, NaN, 0.157, NaN, NaN, 0.151, NaN, NaN, NaN, NaN];

const RCuPVC = [10.2, 6.6, 3.9, 2.56, 1.61, 1.02, 0.82, 0.62, 0.49, 0.39, 0.33, 0.253, 0.203, 0.171, 0.144, 0.125, 0.108, 0.089, 0.075, NaN, 0.062, NaN, NaN, 0.049, NaN, NaN, NaN, NaN];
const RCuAl = [10.2, 6.6, 3.9, 2.56, 1.61, 1.02, 0.82, 0.66, 0.52, 0.43, 0.33, 0.269, 0.22, 0.187, 0.161, 0.141, 0.125, 0.105, 0.092, NaN, 0.079, NaN, NaN, 0.062, NaN, NaN, NaN, NaN];
const RCuFe = [10.2, 6.6, 3.9, 2.56, 1.61, 1.02, 0.82, 0.66, 0.52, 0.39, 0.33, 0.259, 0.207, 0.177, 0.148, 0.128, 0.115, 0.095, 0.082, NaN, 0.069, NaN, NaN, 0.059, NaN, NaN, NaN, NaN];

const RAlPVC = [0.0, 10.5, 6.6, 4.3, 2.66, 1.67, 1.31, 1.05, 0.82, 0.66, 0.52, 0.43, 0.33, 0.279, 0.233, 0.2, 0.177, 0.141, 0.118, NaN, 0.095, NaN, NaN, 0.075, NaN, NaN, NaN, NaN];
const RAlAl = [0.0, 10.5, 6.6, 4.3, 2.66, 1.67, 1.31, 1.05, 0.85, 0.69, 0.52, 0.43, 0.36, 0.295, 0.249, 0.217, 0.194, 0.157, 0.135, NaN, 0.112, NaN, NaN, 0.089, NaN, NaN, NaN, NaN];
const RAlFe = [0.0, 10.5, 6.6, 4.3, 2.66, 1.67, 1.31, 1.05, 0.82, 0.66, 0.52, 0.43, 0.33, 0.282, 0.236, 0.207, 0.18, 0.148, 0.125, NaN, 0.102, NaN, NaN, 0.082, NaN, NaN, NaN, NaN];

window.addEventListener("DOMContentLoaded", calc_main, false);
document.getElementById("form0").addEventListener("change", calc_main);
document.getElementById("form1").addEventListener("change", calc_main);
document.getElementById("form2").addEventListener("change", calc_main);
document.getElementById("form3").addEventListener("change", calc_main);
document.getElementById("form4").addEventListener("change", calc_main);
document.getElementById("formA").addEventListener("change", calc_main);
document.getElementById("form6").addEventListener("change", calc_main);
document.getElementById("formTA").addEventListener("change", calc_main);
document.getElementById("formF").addEventListener("change", calc_main);

function calc_main() {
    console.log("cambio");

    /*data */
    /*form0 */
    let decimals = Number.parseInt(document.getElementById("decimals").value);
    /*form1 */
    let system = document.getElementById("system").value;
    let voltage = Number.parseFloat(document.getElementById("voltage").value);
    let conductorsPerPhase = Number.parseInt(document.getElementById("conductorsPerPhase").value);
    let IndexCalibreCustom = Number.parseInt(document.getElementById("listCalibreCustom").value);
    /*form2 */
    let current = Number.parseFloat(document.getElementById("current").value);
    let realPower = Number.parseFloat(document.getElementById("realPower").value);
    let pf = Number.parseFloat(document.getElementById("pf").value);
    /*form3 */
    let length = Number.parseFloat(document.getElementById("length").value);
    let voltageDropPercent = Number.parseFloat(document.getElementById("voltageDropPercent").value);
    let voltageDropVolts = Number.parseFloat(document.getElementById("voltageDropVolts").value);
    /*form4 */
    let Tambient = Number.parseFloat(document.getElementById("Tambient").value);
    let Tinsulation = Number.parseInt(document.getElementById("Tinsulation").value);
    let conductorMaterial = document.getElementById("conductorMaterial").value;
    let racewayMaterial = document.getElementById("racewayMaterial").value;
    /*formA */
    let conductorsPerConduit = Number.parseInt(document.getElementById("conductorsPerConduit").value);
    /*form6 */
    let Isc = Number.parseFloat(document.getElementById("Isc").value)*1000;
    let timeIsc = Number.parseFloat(document.getElementById("timeIsc").value);
    let temperature1 = Number.parseFloat(document.getElementById("temperature1").value);
    let temperature2 = Number.parseInt(document.getElementById("temperature2").value);
    /*formTA */
    let AmpacityTABLE = document.getElementById("AmpacityTABLE").value;
    let AmpacityFactorTABLE = Number.parseFloat(document.getElementById("AmpacityFactorTABLE").value)/100;
    /*formF */
    let optioncurrentFactor = document.getElementsByName("optioncurrentFactor");
    
    let optioncurrentFactorArrayChecked = [];
    for(i = 0; i < optioncurrentFactor.length; i++) { 
        if(optioncurrentFactor[i].checked) {
            optioncurrentFactorArrayChecked.push(true);
        } else {
            optioncurrentFactorArrayChecked.push(false);
        }
    }

    let currentArray = ["current", "currentContinuousLoad", "currentVoltageDrop", "currentShortCircuit", "currentFactorTemperature", "currentFactorGrouping","currentFactorAdjustment"];

    let currentFactors = {};
    for (const current of currentArray) {
        currentFactors[current] = [[]]; // [[currentFactors], currentFactor]
        for (let index = 1; index <= 4; index++) {
            let currentFactor = Number.parseFloat(document.getElementById(current + "Factor" + index).value);
            if (currentFactor <= 0 ) {
                currentFactor = 0.05;
            }
            currentFactors[current][0].push(currentFactor);
        }

        currentFactors[current][1] = resultFactor(currentFactors[current][0]);
    }

    let currentFactorsGroup = [];
    for (let index = 0; index < optioncurrentFactorArrayChecked.length; index++) {
        currentFactorsGroup.push(Number.parseFloat(document.getElementById("currentFactorGroup" + (index+1)).value));
        if (currentFactorsGroup[index] <= 0 ) {
            currentFactorsGroup[index] = 0.05;
        }

        for (const current of currentArray) {
            if (optioncurrentFactorArrayChecked[index]) {
                currentFactors[current][0][index] = currentFactorsGroup[index];
                document.getElementById(current + "Factor" + (index+1)).className = "result";
            } else {
                document.getElementById(current + "Factor" + (index+1)).className = "data";
            }
            document.getElementById(current + "Factor" + (index+1)).value = currentFactors[current][0][index].toFixed(decimals+2);
        }
        
    }

    for (const current of currentArray) {
        currentFactors[current][1] = resultFactor(currentFactors[current][0]);
        document.getElementById(current + "Factor").value = currentFactors[current][1].toFixed(decimals+2);
    }

    let currentFactor = currentFactors["current"][1];
    let currentFactorContinuousLoad = currentFactors["currentContinuousLoad"][1];
    let currentFactorVoltageDrop = currentFactors["currentVoltageDrop"][1];
    let currentFactorShortCircuit = currentFactors["currentShortCircuit"][1];
    let currentFactorTemperature = currentFactors["currentFactorTemperature"][1];
    let currentFactorGrouping = currentFactors["currentFactorGrouping"][1];
    let currentFactorAdjustment = currentFactors["currentFactorAdjustment"][1];

    /*flag */
    let flag = 0;
    if (voltage <= 0 ) {
        voltage = 0.5;
        flag = 1;
    } if (current <= 0) {
        current = 0.5;
        flag = 1;
    } if (realPower <= 0) {
        realPower = 0.5;
        flag = 1;
    } if (pf < 0 || pf > 1) {
        pf = 0.9;
        flag = 1;
    } if (length <= 0 ) {
        length = 0.5;
        flag = 1;
    } if (voltageDropPercent <= 0  || voltageDropPercent > 100) {
        voltageDropPercent = 0.1;
        flag = 1;
    } if (voltageDropVolts  <= 0  || voltageDropVolts > voltage) {
        voltageDropVolts = 0.1;
        flag = 1;
    } if (Isc <= 0) {
        Isc = 1;
        flag = 1;
    } if (timeIsc <= 0) {
        timeIsc = 0.001;
        flag = 1;
    } if (AmpacityFactorTABLE <= 0) {
        AmpacityFactorTABLE = 0.01;
        flag = 1;
    }
    
    if ( flag === 1 ) {
        document.getElementById("voltage").value = voltage.toFixed(decimals);
        document.getElementById("current").value = current.toFixed(decimals);
        document.getElementById("realPower").value = realPower.toFixed(decimals);
        document.getElementById("pf").value = pf.toFixed(decimals+2);
        document.getElementById("length").value = length.toFixed(decimals);
        document.getElementById("voltageDropPercent").value = voltageDropPercent.toFixed(decimals+2);
        document.getElementById("voltageDropVolts").value = voltageDropVolts.toFixed(decimals+2);
        document.getElementById("Isc").value = (Isc/1000).toFixed(decimals);
        document.getElementById("timeIsc").value = timeIsc.toFixed(decimals+3);
        document.getElementById("AmpacityFactorTABLE").value = (AmpacityFactorTABLE*100).toFixed(decimals);
    } else {
        
    }

    /**optionLoadArray **/
    let optionLoadArray = document.getElementsByName("optionLoad");
    
    let optionLoadArrayChecked = [];
    let optionLoadArrayNotChecked = [];
    for(i = 0; i < optionLoadArray.length; i++) { 
        if(optionLoadArray[i].checked) {
            optionLoadArrayChecked.push(optionLoadArray[i].value);
        } else {
            optionLoadArrayNotChecked.push(optionLoadArray[i].value);
        }
    }

    if (optionLoadArrayChecked.length > 2) {
        optionLoadArrayNotChecked.map(optionLoad => document.getElementById(optionLoad).disabled = true);
        
        optionLoadArrayNotChecked.map(optionLoad => optionLoad.slice(10)).map(optionLoad => document.getElementById(optionLoad).className = "result");
        optionLoadArrayChecked.map(optionLoad => optionLoad.slice(10)).map(optionLoad => document.getElementById(optionLoad).className = "data");

        if (optionLoadArrayChecked.filter(optionLoad => ["optionLoadapparentPower", "optionLoadcurrent", "optionLoadpf"].indexOf(optionLoad) !== -1).length >= 3) {
        } else {
            return;
        }

        
    } else if (optionLoadArrayChecked.length === 2){
        if (optionLoadArrayChecked.filter(optionLoad => ["optionLoadapparentPower", "optionLoadcurrent"].indexOf(optionLoad) !== -1).length == 2) {
            optionLoadArrayChecked.push("optionLoadpf");
            optionLoadArrayNotChecked.splice(optionLoadArrayNotChecked.indexOf("optionLoadpf"),1);
            document.getElementById("optionLoadpf").checked = true;
            document.getElementById("optionLoadpf").disabled = false;

        } else {
            
        }

        optionLoadArrayNotChecked.map(optionLoad => document.getElementById(optionLoad).disabled = true);

        optionLoadArrayNotChecked.map(optionLoad => optionLoad.slice(10)).map(optionLoad => document.getElementById(optionLoad).className = "result");
        optionLoadArrayChecked.map(optionLoad => optionLoad.slice(10)).map(optionLoad => document.getElementById(optionLoad).className = "data");
    } else {
        optionLoadArrayNotChecked.map(optionLoad => document.getElementById(optionLoad).disabled = false);
        optionLoadArrayChecked.map(optionLoad => document.getElementById(optionLoad).disabled = false);

        optionLoadArrayNotChecked.map(optionLoad => optionLoad.slice(10)).map(optionLoad => document.getElementById(optionLoad).className = "result");
        optionLoadArrayChecked.map(optionLoad => optionLoad.slice(10)).map(optionLoad => document.getElementById(optionLoad).className = "data");
        return;
    }

    let electricParameters = {
        A: 0,
        S: 0,
        Q: 0,
        P: 0,
        I: 0
    };

    let phases;
    if (system === "single") {
        phases = 1;
    } else if (system === "three") {
        phases = 3;
    } else {

    }
    let V = voltage;

    let Vars = [];
    for (let index = 0; index < optionLoadArrayChecked.length; index++) {
        const optionLoad = optionLoadArrayChecked[index];

        if (optionLoad === "optionLoadcurrent") {
            current = Number.parseFloat(document.getElementById("current").value);
    
            electricParameters["I"] = current;
            Vars.push("I");

        } else if (optionLoad === "optionLoadrealPower") {
            realPower = Number.parseFloat(document.getElementById("realPower").value);
    
            electricParameters["P"] = realPower;
            Vars.push("P");

        } else if (optionLoad === "optionLoadpf") {
            pf = Number.parseFloat(document.getElementById("pf").value);
    
            electricParameters["A"] = Math.acos(pf);
            Vars.push("A");
            
        } else if (optionLoad === "optionLoadapparentPower") {
            apparentPower = Number.parseFloat(document.getElementById("apparentPower").value);
    
            electricParameters["S"] = apparentPower;
            Vars.push("S");

        } else if (optionLoad === "optionLoadreactivePower") {
            reactivePower = Number.parseFloat(document.getElementById("reactivePower").value);
    
            electricParameters["Q"] = reactivePower;
            Vars.push("Q");

        } else {
            
        }
        
    }
    
    const Pars = ["A", "S", "Q", "P", "I"];
    const Fors = {
        /*ForKey*/A: ["PS"/*ForPar*/, "QS", "QP", "PI", "QI"]/*ForPars*/,
        S: ["PQ", "PA", "QA"],
        Q: ["IA"],
        P: ["IA", "AS"],
        I: ["PA"]
    };

    const ForsMemsUsed = JSON.parse(JSON.stringify(Fors));

    for (const key in ForsMemsUsed) {
        ForsMemsUsed[key] = ForsMemsUsed[key].map(element => element = []);
    }

    let Ques = Pars.filter(Que => Vars.indexOf(Que) === -1);

    let Que = Ques[0];
    while (Ques.length > 0) {
        let ForKey = Object.keys(Fors).find(ForKey => ForKey === Que);
        let ForsPars = Fors[ForKey];

        for (let ForsParsindex = 0; ForsParsindex < ForsPars.length; ForsParsindex++) {
            let ForPars = ForsPars[ForsParsindex];

            let ForParsInVars = ForPars.split("").filter(ForPar => Vars.indexOf(ForPar) !== -1);
            let ForParsOutVars = ForPars.split("").filter(ForPar => Vars.indexOf(ForPar) === -1);
            ForsMemsUsed[ForKey][ForsParsindex].push(ForParsInVars);
            ForsMemsUsed[ForKey][ForsParsindex].push(ForParsOutVars);

            if (ForParsInVars.length === 2) {

                electricParameters[ForKey] = searcherElectricParameters(ForKey, ForParsInVars[0] + ForParsInVars[1], phases, V, electricParameters);
                Vars.push(ForKey);

                for (const key in ForsMemsUsed) {
                    ForsMemsUsed[key] = ForsMemsUsed[key].map(element => element = []);
                }

                Ques = Ques.filter(Que => ForKey !== Que);
                Que = Ques[0];
                if (Ques.length <= 0) {
                    break;
                } else {
                    
                }
            } else if (ForParsInVars.length === 1) {
                if (ForsMemsUsed[ForKey][ForsParsindex][2]) {
                    break;
                } else {
                    ForsMemsUsed[ForKey][ForsParsindex].push(ForPars);
                    Que = ForsMemsUsed[ForKey][ForsParsindex][1][0];
                }
            } else {
                
            }
            
        }

    }

    current = electricParameters["I"];
    realPower = electricParameters["P"];
    pf = Math.cos(electricParameters["A"]);
    apparentPower = electricParameters["S"];
    reactivePower = electricParameters["Q"];
    /**optionLoadArray **/

    /**optionvoltageDropArray **/
    let optionvoltageDropArray = document.getElementsByName("optionvoltageDrop");
    
    let optionvoltageDrop;
    //Array.prototype.find()
    for(i = 0; i < optionvoltageDropArray.length; i++) { 
        if(optionvoltageDropArray[i].checked) {
            optionvoltageDrop = optionvoltageDropArray[i].value;
            break;
        }
    }

    document.getElementById("voltageDropPercent").className = "data";
    document.getElementById("voltageDropVolts").className = "data";
    let RArray = searcherTableRFun(racewayMaterial, conductorMaterial);
    let XArray = searcherTableXFun(racewayMaterial, conductorMaterial);

    let voltageDropIndex;
    let RTemp;
    let XL;
    let Ze;
    let voltageDropPercentResult;
    let voltageDropVoltsResult;
    if (optionvoltageDrop === "optionvoltageDropPercent") {
        voltageDropPercent = Number.parseFloat(document.getElementById("voltageDropPercent").value);

        voltageDropVolts = voltageDropPercent*voltage/100;
        document.getElementById("voltageDropVolts").className = "result";

    } else if (optionvoltageDrop === "optionvoltageDropVolts") {
        voltageDropVolts = Number.parseFloat(document.getElementById("voltageDropVolts").value);

        voltageDropPercent = voltageDropVolts/voltage*100;
        document.getElementById("voltageDropPercent").className = "result";
        
    } else {
        
    }
    voltageDropIndex = voltageDropIndexFun(RArray, XArray, Tinsulation, pf, system, length, current*currentFactorVoltageDrop, voltage, conductorsPerPhase, conductorMaterial, voltageDropPercent)

    RTemp = RTempFun(RArray[voltageDropIndex], Tinsulation);
    XL = XArray[voltageDropIndex];

    Ze = ZeFun(RTemp, XL, pf);
    voltageDropPercentResult = voltageDropPercentFun(system, Ze, length, current*currentFactorVoltageDrop, voltage, conductorsPerPhase);
    voltageDropVoltsResult = voltageDropPercentResult*voltage/100;

    /**optionvoltageDropArray **/

    /**optionIsc **/
    let AreaCircularMilIsc = AreaCircularMilIscFun(conductorMaterial, temperature2, temperature1, Isc*currentFactorShortCircuit, timeIsc);
    let mm2Isc = cmilToMm2(AreaCircularMilIsc);

    let IscIndex;
    for (let index = 0; index < mm2.length; index++) {
        if (mm2Isc <= mm2[index]) {
            IscIndex = index;
            break;
        }
    }

    let cmilIsc = mm2Tocmil(mm2[IscIndex]);

    let conductorIsc = conductorIscFun(conductorMaterial, temperature2, temperature1, timeIsc, cmilIsc)/1000;
    /**optionIsc **/

    /**optionvoltageDropArrayCustom **/
    if (IndexCalibreCustom === -1) {
        IndexCalibreCustom = 0;
        document.getElementById("box-data-listCalibreCustom").className = "box-data";

        document.getElementById("box-container-custom-formCustom").style.display = "none";
        document.getElementById("box-container-custom-formBCustom").style.display = "none";
    } else {
        document.getElementById("box-data-listCalibreCustom").className = "box-data-custom";

        document.getElementById("box-container-custom-formCustom").style.display = "flex";
        document.getElementById("box-container-custom-formBCustom").style.display = "flex";
    }

    let indexCustom = IndexCalibreCustom;
    /**optionvoltageDropArrayCustom **/

    /**optionvoltageDropArrayCustom **/

    let RTempCustom;
    let XLCustom;
    let ZeCustom;
    let voltageDropPercentResultCustom;
    let voltageDropVoltsResultCustom;

    if (RArray[indexCustom] === NaN || XArray[indexCustom] === NaN) {
   
    }else {
        RTempCustom = RTempFun(RArray[indexCustom], Tinsulation);
        XLCustom = XArray[indexCustom];
    
        ZeCustom = ZeFun(RTempCustom, XLCustom, pf);
        voltageDropPercentResultCustom = voltageDropPercentFun(system, ZeCustom, length, current*currentFactorVoltageDrop, voltage, conductorsPerPhase);
    
        voltageDropVoltsResultCustom = voltageDropPercentResultCustom*voltage/100;
    }
    /**optionvoltageDropArrayCustom **/

    /**optionIscCustom **/

    let cmilIscCustom = mm2Tocmil(mm2[indexCustom]);

    let conductorIscCustom = conductorIscFun(conductorMaterial, temperature2, temperature1, timeIsc, cmilIscCustom)/1000;
    /**optionIscCustom **/

    /*computation */

    let currentPerConductor = currentPerConductorFun(current, conductorsPerPhase);

    let factorTemperature = factorTemperatureFun(Tinsulation, Tambient);
    let factorGrouping = factorGroupingFun(tableFactorGrouping, conductorsPerConduit);
    let factorAdjustment = factorAdjustmentFun(factorTemperature, factorGrouping);

    /**Data **/
    let parameters = {};
    if (AmpacityTABLE === "310.16") {
        parameters = {
            conductorMaterial: conductorMaterial,
            Tinsulation: Tinsulation,
            Tambient: 30,
            grouping: 3
        }
    } else if (AmpacityTABLE === "310.17") {
        parameters = {
            conductorMaterial: conductorMaterial,
            Tinsulation: Tinsulation,
            Tambient: 30
        }
    } else{
        
    }
    /**Data **/

    let AmpacityArray = searcherAmpacityArrayFun(AmpacityTABLES, parameters);
    AmpacityArray = AmpacityArray.map(Ampacity =>  AmpacityFactorTABLE*Ampacity);

    let AmpacityIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor*currentFactor, 1);
    let AmpacityContinuousLoadIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor*1.25*currentFactorContinuousLoad, 1);
    let AmpacityFactorTemperatureIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor*currentFactorTemperature, factorTemperature);
    let AmpacityFactorGroupingIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor*currentFactorGrouping, factorGrouping);
    let AmpacityFactorAdjustmentIndex = AmpacityIndexFun(AmpacityArray, currentPerConductor*currentFactorAdjustment, factorAdjustment);

    let Ampacity = AmpacityArray[AmpacityIndex];
    let AmpacityContinuousLoad = AmpacityArray[AmpacityContinuousLoadIndex];
    let AmpacityFactorTemperature = AmpacityArray[AmpacityFactorTemperatureIndex]*factorTemperature;
    let AmpacityFactorGrouping = AmpacityArray[AmpacityFactorGroupingIndex]*factorGrouping;
    let AmpacityFactorAdjustment = AmpacityArray[AmpacityFactorAdjustmentIndex]*factorAdjustment;

    let sizeAmpacity = AWG[AmpacityIndex];
    let sizeAmpacityContinuousLoad = AWG[AmpacityContinuousLoadIndex];
    let sizeAmpacityFactorTemperature = AWG[AmpacityFactorTemperatureIndex];
    let sizeAmpacityFactorGrouping = AWG[AmpacityFactorGroupingIndex];
    let sizeAmpacityFactorAdjustment = AWG[AmpacityFactorAdjustmentIndex];

    let mm2Ampacity = mm2[AmpacityIndex];
    let mm2AmpacityContinuousLoad = mm2[AmpacityContinuousLoadIndex];
    let mm2AmpacityFactorTemperature = mm2[AmpacityFactorTemperatureIndex];
    let mm2AmpacityFactorGrouping = mm2[AmpacityFactorGroupingIndex];
    let mm2AmpacityFactorAdjustment = mm2[AmpacityFactorAdjustmentIndex];

    let AmpacityVoltageDrop = AmpacityArray[voltageDropIndex];
    let sizeAmpacityVoltageDrop = AWG[voltageDropIndex];
    let mm2AmpacityVoltageDrop = mm2[voltageDropIndex];

    let AmpacityShortCircuit = AmpacityArray[IscIndex];
    let sizeAmpacityShortCircuit = AWG[IscIndex];
    let mm2AmpacityShortCircuit = mm2[IscIndex];

    /*custom*/
    let AmpacityCustom = AmpacityArray[indexCustom];
    let AmpacityContinuousLoadCustom = AmpacityArray[indexCustom];
    let AmpacityFactorTemperatureCustom = AmpacityArray[indexCustom]*factorTemperature;
    let AmpacityFactorGroupingCustom = AmpacityArray[indexCustom]*factorGrouping;
    let AmpacityFactorAdjustmentCustom = AmpacityArray[indexCustom]*factorAdjustment;

    let sizeAmpacityCustom = AWG[indexCustom];
    let sizeAmpacityContinuousLoadCustom = AWG[indexCustom];
    let sizeAmpacityFactorTemperatureCustom = AWG[indexCustom];
    let sizeAmpacityFactorGroupingCustom = AWG[indexCustom];
    let sizeAmpacityFactorAdjustmentCustom = AWG[indexCustom];

    let mm2AmpacityCustom = mm2[indexCustom];
    let mm2AmpacityContinuousLoadCustom = mm2[indexCustom];
    let mm2AmpacityFactorTemperatureCustom = mm2[indexCustom];
    let mm2AmpacityFactorGroupingCustom = mm2[indexCustom];
    let mm2AmpacityFactorAdjustmentCustom = mm2[indexCustom];

    let AmpacityVoltageDropCustom = AmpacityArray[indexCustom];
    let sizeAmpacityVoltageDropCustom = AWG[indexCustom];
    let mm2AmpacityVoltageDropCustom = mm2[indexCustom];

    let AmpacityShortCircuitCustom = AmpacityArray[indexCustom];
    let sizeAmpacityShortCircuitCustom = AWG[indexCustom];
    let mm2AmpacityShortCircuitCustom = mm2[indexCustom];
    /*custom*/

    /*results */
    document.getElementById("current").value = current.toFixed(decimals);
    document.getElementById("pf").value = pf.toFixed(decimals+2);
    document.getElementById("realPower").value = realPower.toFixed(decimals);
    document.getElementById("apparentPower").value = apparentPower.toFixed(decimals);
    document.getElementById("reactivePower").value = reactivePower.toFixed(decimals);

    let LoadArray = [current, pf, realPower, apparentPower, reactivePower];
    let LoadArrayId = ["current", "pf", "realPower", "apparentPower", "reactivePower"];

    for(i = 0; i < LoadArrayId.length; i++) { 
        if (document.getElementById(LoadArrayId[i]).className === "result") {
            document.getElementById(LoadArrayId[i]).value = LoadArray[i].toFixed(decimals+2);
        } else {
        }
    }
    
    document.getElementById("ContinuousLoad").value = (current*1.25).toFixed(decimals);
    document.getElementById("currentPerConductor").value = currentPerConductor.toFixed(decimals);

    document.getElementById("factorTemperature").value = factorTemperature.toFixed(decimals+2);
    document.getElementById("factorGrouping").value = factorGrouping;
    document.getElementById("factorAdjustment").value = factorAdjustment.toFixed(decimals+2);

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
    document.getElementById("voltageDropVolts").value = voltageDropVolts.toFixed(decimals+2);
    document.getElementById("voltageDropPercent").value = voltageDropPercent.toFixed(decimals+2);

    document.getElementById("voltageDropPercentResult").value = voltageDropPercentResult.toFixed(decimals+2);
    document.getElementById("voltageDropVoltsResult").value = voltageDropVoltsResult.toFixed(decimals+2);

    AmpacityVoltageDrop = AmpacityArray[voltageDropIndex];
    sizeAmpacityVoltageDrop = AWG[voltageDropIndex];
    mm2AmpacityVoltageDrop = mm2[voltageDropIndex];

    document.getElementById("AmpacityVoltageDrop").value = AmpacityVoltageDrop;
    document.getElementById("sizeAmpacityVoltageDrop").value = sizeAmpacityVoltageDrop;
    document.getElementById("mm2AmpacityVoltageDrop").value = mm2AmpacityVoltageDrop;

    document.getElementById("mm2AmpacityVoltageDropRatio").value = (mm2AmpacityVoltageDrop/mm2Ampacity).toFixed(decimals+2);

    document.getElementById("Lmax").value = (length*voltageDropPercent/voltageDropPercentResult).toFixed(decimals);
    document.getElementById("Imax").value = (current*voltageDropPercent/voltageDropPercentResult).toFixed(decimals);
    /** VoltageDrop **/

    /** Isc **/
    document.getElementById("conductorIsc").value = conductorIsc.toFixed(decimals+3);

    document.getElementById("AmpacityShortCircuit").value = AmpacityShortCircuit;
    document.getElementById("sizeAmpacityShortCircuit").value = sizeAmpacityShortCircuit;
    document.getElementById("mm2AmpacityShortCircuit").value = mm2AmpacityShortCircuit;

    document.getElementById("mm2AmpacityShortCircuitRatio").value = (mm2AmpacityShortCircuit/mm2Ampacity).toFixed(decimals+2);
    /** Isc **/

    /** AmpacityCustom **/
    document.getElementById("AmpacityCustom").value = AmpacityCustom.toFixed(decimals);
    document.getElementById("AmpacityContinuousLoadCustom").value = AmpacityContinuousLoadCustom.toFixed(decimals);
    document.getElementById("AmpacityFactorTemperatureCustom").value = AmpacityFactorTemperatureCustom.toFixed(decimals);
    document.getElementById("AmpacityFactorGroupingCustom").value = AmpacityFactorGroupingCustom.toFixed(decimals);
    document.getElementById("AmpacityFactorAdjustmentCustom").value = AmpacityFactorAdjustmentCustom.toFixed(decimals);

    document.getElementById("sizeAmpacityCustom").value = sizeAmpacityCustom;
    document.getElementById("sizeAmpacityContinuousLoadCustom").value = sizeAmpacityContinuousLoadCustom;
    document.getElementById("sizeAmpacityFactorTemperatureCustom").value = sizeAmpacityFactorTemperatureCustom;
    document.getElementById("sizeAmpacityFactorGroupingCustom").value = sizeAmpacityFactorGroupingCustom;
    document.getElementById("sizeAmpacityFactorAdjustmentCustom").value = sizeAmpacityFactorAdjustmentCustom;

    document.getElementById("mm2AmpacityCustom").value = mm2AmpacityCustom;
    document.getElementById("mm2AmpacityContinuousLoadCustom").value = mm2AmpacityContinuousLoadCustom;
    document.getElementById("mm2AmpacityFactorTemperatureCustom").value = mm2AmpacityFactorTemperatureCustom;
    document.getElementById("mm2AmpacityFactorGroupingCustom").value = mm2AmpacityFactorGroupingCustom;
    document.getElementById("mm2AmpacityFactorAdjustmentCustom").value = mm2AmpacityFactorAdjustmentCustom;
    /** AmpacityCustom **/

    /** VoltageDropCustom **/
    document.getElementById("voltageDropPercentResultCustom").value = voltageDropPercentResultCustom.toFixed(decimals+2);
    document.getElementById("voltageDropVoltsResultCustom").value = voltageDropVoltsResultCustom.toFixed(decimals+2);

    AmpacityVoltageDropCustom = AmpacityArray[indexCustom];
    sizeAmpacityVoltageDropCustom = AWG[indexCustom];
    mm2AmpacityVoltageDropCustom = mm2[indexCustom];

    document.getElementById("AmpacityVoltageDropCustom").value = AmpacityVoltageDropCustom;
    document.getElementById("sizeAmpacityVoltageDropCustom").value = sizeAmpacityVoltageDropCustom;
    document.getElementById("mm2AmpacityVoltageDropCustom").value = mm2AmpacityVoltageDropCustom;

    document.getElementById("mm2AmpacityVoltageDropRatioCustom").value = (mm2AmpacityVoltageDropCustom/mm2Ampacity).toFixed(decimals+2);

    document.getElementById("LmaxCustom").value = (length*voltageDropPercent/voltageDropPercentResultCustom).toFixed(decimals);
    document.getElementById("ImaxCustom").value = (current*voltageDropPercent/voltageDropPercentResultCustom).toFixed(decimals);
    /** VoltageDropCustom **/

    /** IscCustom **/
    document.getElementById("conductorIscCustom").value = conductorIscCustom.toFixed(decimals+3);

    document.getElementById("AmpacityShortCircuitCustom").value = AmpacityShortCircuitCustom;
    document.getElementById("sizeAmpacityShortCircuitCustom").value = sizeAmpacityShortCircuitCustom;
    document.getElementById("mm2AmpacityShortCircuitCustom").value = mm2AmpacityShortCircuitCustom;

    document.getElementById("mm2AmpacityShortCircuitRatioCustom").value = (mm2AmpacityShortCircuitCustom/mm2Ampacity).toFixed(decimals+2);
    /** IscCustom **/
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

function apparentPowerFun(system, voltage, current, pf) {

    let apparentPower;
    if (system === "single"){
        apparentPower = current*voltage;
    }
    else if (system === 'three') {
        apparentPower = current*Math.sqrt(3)*voltage;
    }

    return apparentPower;
}

function reactivePowerFun(system, voltage, current, pf) {

    let reactivePower;
    if (system === "single"){
        reactivePower = current*voltage*Math.sin(Math.acos(pf));
    }
    else if (system === 'three') {
        reactivePower = current*Math.sqrt(3)*voltage*Math.sin(Math.acos(pf));
    }

    return reactivePower;
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

function searcherAmpacityArrayFun(AmpacityTABLES, parameters) {

    for (const TABLE in AmpacityTABLES) {
        for (const element in AmpacityTABLES[TABLE]) {
            let elementParametersDelete = ["voltage", "AmpacityVALUES"];

            let elementParameters = Object.keys(AmpacityTABLES[TABLE][element]);
            
            for (const parameterDelete of elementParametersDelete) {
                let parameterDeleteIndex = elementParameters.indexOf(parameterDelete);
                elementParameters.splice(parameterDeleteIndex, 1);
            }

            let parametersLength = 0;
            for (const parameter of elementParameters) {

                if (Object.keys(parameters).indexOf(parameter) !== -1) {
                    if (AmpacityTABLES[TABLE][element][parameter] === parameters[parameter]) {
                        parametersLength ++;
                    } else {
                        
                    }
                } else {
                    
                }
            }

            if (parametersLength === Object.keys(parameters).length && elementParameters.length === Object.keys(parameters).length) {
                return AmpacityTABLES[TABLE][element]["AmpacityVALUES"];
            } else {

            }
        }
    }

}

function AmpacityIndexFun(AmpacityArray, current, Ampacityfactor) {
    //Array.prototype.findIndex()
    for (let index = 0; index < AmpacityArray.length; index++) {
        if (current <= AmpacityArray[index]*Ampacityfactor) {
            return index;
        } else {
            
        }  
    }
}

function searcherElectricParameters(ForKey, ForPar, phases, V, electricParameters) {
    let A = electricParameters["A"];
    let S = electricParameters["S"];
    let Q = electricParameters["Q"];
    let P = electricParameters["P"];
    let I = electricParameters["I"];

    if (ForKey === "A") {
        if (ForPar === "PS" || ForPar === "SP") {
            function APS(P,S) {
                return Math.acos(P/S)
            };
            return APS(P,S);
        } else if (ForPar === "QS" || ForPar === "SQ") {
            function AQS(Q,S) {
                return Math.asin(Q/S)
            };
            return AQS(Q,S);
        } else if (ForPar === "QP" || ForPar === "PQ") {
            function AQP(Q,P) {
                return Math.atan(Q/P)
            };
            return AQP(Q,P);
        } else if (ForPar === "PI" || ForPar === "IP") {
            function API(P,V,I,phases) {
                return Math.acos(P/(V*I*Math.sqrt(phases)))
            }
            return API(P,V,I,phases);
        } else if (ForPar === "QI" || ForPar === "IQ") {
            function AQI(Q,V,I,phases) {
                return Math.asin(Q/(V*I*Math.sqrt(phases)))
            }
            return AQI(Q,V,I,phases);
        } else {
            
        }
    } else if (ForKey === "S") {
        if (ForPar === "PQ" || ForPar === "QP") {
            function SPQ(P,Q) {
                return S = Math.sqrt(P*P + Q*Q)
            };
            return SPQ(P,Q);
        } else if (ForPar === "PA" || ForPar === "AP") {
            function SPA(P,A) {
                return P/Math.cos(A)
            };
            return SPA(P,A);
        } else if (ForPar === "QA" || ForPar === "AQ") {
            function SQA(Q,A) {
                return Q/Math.sin(A)
            };
            return SQA(Q,A);
        }else {
            
        }
    } else if (ForKey === "Q") {
        if (ForPar === "IA" || ForPar === "AI") {
            function QIA(I,A,V,phases) {
                return Q = V*I*Math.sin(A)*Math.sqrt(phases)
            };
            return QIA(I,A,V,phases);
        } else {
            
        }
    } else if (ForKey === "P") {
        if (ForPar === "IA" || ForPar === "AI") {
            function PIA(I,A,V,phases) {
                return P = V*I*Math.cos(A)*Math.sqrt(phases)
            };
            return PIA(I,A,V,phases);
        } else if (ForPar === "AS" || ForPar === "SA") {
            function PAS(A,S) {
                return S*Math.cos(A)
            };
            return PAS(A,S);
        } else {
            
        }
    } else if (ForKey === "I") {
        if (ForPar === "PA" || ForPar === "AP") {
            function IPA(P,A,V,phases) {
                return I = P/(V*Math.cos(A)*Math.sqrt(phases))
            };
            return IPA(P,A,V,phases);
        } else {
            
        }
    } else {
        
    }
}

function searcherTableXFun(racewayMaterial, conductorMaterial) {
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

function searcherTableRFun(racewayMaterial, conductorMaterial) {
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

function voltageDropIndexFun(RArray, XArray, Tinsulation, pf, system, length, current, voltage, conductorsPerPhase, conductorMaterial, voltageDropPercent) {

    let RTemp;
    let XL;

    let Ze;
    let voltageDropPercentResult;

    for (let index = 0; index < RArray.length; index++) {
        if (RArray[index] === NaN || XArray[index] === NaN) {
            break;
        } else {
            
        }
        RTemp = RTempFun(RArray[index], Tinsulation);
        XL = XArray[index];

        Ze = ZeFun(RTemp, XL, pf);
        voltageDropPercentResult = voltageDropPercentFun(system, Ze, length, current, voltage, conductorsPerPhase);

        if (conductorMaterial === "Al" && index === 0) {
            continue;
        } else if (voltageDropPercentResult <= voltageDropPercent) {
            return index;
            //break;
        } else {
            
        }

    }
}

function conductorIscFun(conductorMaterial, temperature2, temperature1, timeIsc, AreaCircularMil) {
    let conductorIsc;
    if (conductorMaterial == "Cu") {
        conductorIsc = AreaCircularMil*Math.sqrt(0.0297*Math.log10((temperature2+234)/(temperature1+234))/timeIsc);
    }
    else if (conductorMaterial == "Al") {
        conductorIsc = AreaCircularMil*Math.sqrt(0.0125*Math.log10((temperature2+228)/(temperature1+228))/timeIsc);
    } else {
        alert("Error_conductorIsc");
    }

    return conductorIsc
}

function AreaCircularMilIscFun(conductorMaterial, temperature2, temperature1, Isc, timeIsc) {
    let AreaCircularMil;
    if (conductorMaterial == "Cu") {
        AreaCircularMil = Isc*Math.sqrt(timeIsc/(0.0297*Math.log10((temperature2+234)/(temperature1+234))));
    }
    else if (conductorMaterial == "Al") {
        AreaCircularMil = Isc*Math.sqrt(timeIsc/(0.0125*Math.log10((temperature2+228)/(temperature1+228))));
    } else {
        alert("Error_AreaCircularMil");
    }

    return AreaCircularMil
}

function cmilToMm2(cmil) {
    return cmil*0.25*Math.PI*25.4*25.4e-6
}

function mm2Tocmil(mm2) {
    return mm2/(0.25*Math.PI*25.4*25.4e-6)
}

function resultFactor(currentFactors) {
    let Factor = 1;
    for (const factor of currentFactors) {
        Factor = Factor*factor;
    }

    return Factor
}
