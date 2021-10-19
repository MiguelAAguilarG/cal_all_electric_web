const AWG =  ['14', '12', '10', '8', '6', '4', '3', '2', '1', '1/0', '2/0', '3/0', '4/0', '250', '300', '350', '400', '500', '600', '700', '750', '800', '900', '1000', '1250', '1500', '1750', '2000'];
const mm2 = [2.08, 3.31, 5.26, 8.37, 13.3, 21.2, 26.7, 33.6, 42.4, 53.49, 67.43, 85.01, 107.2, 127, 152.0, 177, 203, 253, 304, 355, 380, 405, 456, 507, 633, 700, 887, 1013];
const cal = [2.08, 3.31, 5.26, 8.37, 13.3, 21.2, 26.7, 33.6, 42.4, 53.49, 67.43, 85.01, 107.2, 127, 152.0, 177, 203, 253, 304, 355, 380, 405, 456, 507, 633, 700, 887, 1013];


const tableFactorGrouping = {3:1, 6:0.8, 9:0.7, 20:0.5, 30:0.45, 40:0.4, 50:0.35};

const cooper60 = [15, 20, 30, 40, 55, 70, 85, 95, 110, 125, 145, 165, 195, 215, 240, 260, 280, 320, 350, 385, 400, 410, 435, 455, 495, 525, 545, 555];
const cooper75 = [20, 25, 35, 50, 65, 85, 100, 115, 130, 150, 175, 200, 230, 255, 285, 310, 335, 380, 420, 460, 475, 490, 520, 545, 590, 625, 650, 665];
const cooper90 = [25, 30, 40, 55, 75, 95, 115, 130, 145, 170, 195, 225, 260, 290, 320, 350, 380, 430, 475, 520, 535, 555, 585, 615, 665, 705, 735, 750];

const aluminium60 = [NaN, 15, 25, 35, 40, 55, 65, 75, 85, 100, 115, 130, 150, 170, 195, 210, 225, 260, 285, 315, 320, 330, 355, 375, 405, 435, 455, 470];
const aluminium75 = [NaN, 20, 30, 49, 50, 65, 75, 90, 100, 120, 135, 155, 180, 205, 230, 250, 270, 310, 340, 375, 385, 395, 425, 445, 485, 520, 545, 560];
const aluminium90 = [NaN, 25, 35, 45, 55, 75, 85, 100, 115, 135, 150, 175, 205, 230, 260, 280, 305, 350, 385, 425, 435, 445, 480, 500, 545, 585, 615, 630];

const cooper60 = [25, 30, 40, 60, 80, 105, 120, 140, 165, 195, 225, 260, 300, 340, 375, 420, 455, 515, 575, 630, 655, 680, 730, 780, 890, 980, 1070, 1155];
const cooper75 = [30, 35, 60, 70, 95, 125, 145, 170, 195, 230, 265, 310, 360, 405, 445, 505, 545, 620, 690, 755, 785, 815, 870, 935, 1065, 1175, 1280, 1385];
const cooper90 = [35, 40, 55, 80, 105, 140, 165, 190, 220, 260, 300, 350, 405, 455, 500, 570, 615, 700, 780, 850, 885, 920, 980, 1055, 1200, 1325, 1445, 1560];

const aluminium60 = [25, 35, 45, 60, 80, 95, 110, 130, 150, 175, 200, 235, 265, 290, 330, 355, 405, 455, 500, 515, 535, 580, 625, 710, 795, 875, 960];
const aluminium75 = [30, 40, 55, 75, 100, 115, 135, 155, 180, 210, 240, 280, 315, 350, 395, 425, 485, 545, 595, 595, 620, 645, 700, 750, 855, 950, 1050, 1150];
const aluminium90 = [35, 45, 60, 85, 115, 130, 150, 175, 205, 235, 270, 315, 355, 395, 445, 480, 545, 615, 670, 700, 725, 790, 845, 965, 1070, 1185, 1295];

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

function calc_main() {
    console.log("cambio");

    /*data */
    /*form0 */
    var decimals = Number.parseInt(document.getElementById("decimals").value);
    /*form1 */
    var system = document.getElementById("system").value;
    var voltage = Number.parseFloat(document.getElementById("voltage").value);
    var conductorsPerPhase = Number.parseInt(document.getElementById("conductorsPerPhase").value);
    var IndexCalibreCustom = Number.parseInt(document.getElementById("listCalibreCustom").value);

    /*form2 */
    var current = Number.parseFloat(document.getElementById("current").value);
    var realPower = Number.parseFloat(document.getElementById("realPower").value);
    var pf = Number.parseFloat(document.getElementById("pf").value);
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
    /*form6 */
    var Isc = Number.parseFloat(document.getElementById("Isc").value)*1000;
    var timeIsc = Number.parseFloat(document.getElementById("timeIsc").value);
    var temperature1 = Number.parseFloat(document.getElementById("temperature1").value);
    var temperature2 = Number.parseInt(document.getElementById("temperature2").value);

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
    } else {
        
    }

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
        current = Number.parseFloat(document.getElementById("current").value);

        realPower = realPowerFun(system, voltage, current, pf);

        document.getElementById("realPower").className = "result";

    } else if (optionLoad === "optionLoadrealPower") {
        realPower = Number.parseFloat(document.getElementById("realPower").value);

        current = currentFun(system, voltage, realPower, pf);

        document.getElementById("current").className = "result";

    } else {
        
    }
    /**optionLoadArray **/

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
                var voltageDropIndex = index;
                break;
            } else {
                
            }

        }

        voltageDropVolts = voltageDropPercent*voltage/100;
        voltageDropVoltsResult = voltageDropPercentResult*voltage/100;
        document.getElementById("voltageDropVolts").className = "result";

    } else if (optionvoltageDrop === "optionvoltageDropVolts") {
        var voltageDropVolts = Number.parseFloat(document.getElementById("voltageDropVolts").value);

        voltageDropPercent = voltageDropVolts/voltage*100;
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
                var voltageDropIndex = index;
                break;
            } else {
                
            }

        }
        voltageDropVoltsResult = voltageDropPercentResult*voltage/100;
        document.getElementById("voltageDropPercent").className = "result";

    } else {
        
    }
    /**optionvoltageDropArray **/

    /**optionIsc **/
    var AreaCircularMilIsc = AreaCircularMilIscFun(conductorMaterial, temperature2, temperature1, Isc, timeIsc);
    var mm2Isc = cmilToMm2(AreaCircularMilIsc);

    for (let index = 0; index < mm2.length; index++) {
        if (mm2Isc <= mm2[index]) {
            var IscIndex = index;
            break;
        }
    }

    var cmilIsc = mm2Tocmil(mm2[IscIndex]);

    var conductorIsc = conductorIscFun(conductorMaterial, temperature2, temperature1, timeIsc, cmilIsc)/1000;
    /**optionIsc **/



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
                var voltageDropIndex = index;
                break;
            } else {
                
            }

        }

        voltageDropVolts = voltageDropPercent*voltage/100;
        voltageDropVoltsResult = voltageDropPercentResult*voltage/100;
        document.getElementById("voltageDropVolts").className = "result";

    } else if (optionvoltageDrop === "optionvoltageDropVolts") {
        var voltageDropVolts = Number.parseFloat(document.getElementById("voltageDropVolts").value);

        voltageDropPercent = voltageDropVolts/voltage*100;
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
                var voltageDropIndex = index;
                break;
            } else {
                
            }

        }
        voltageDropVoltsResult = voltageDropPercentResult*voltage/100;
        document.getElementById("voltageDropPercent").className = "result";

    } else {
        
    }
    /**optionvoltageDropArray **/

    /**optionIsc **/
    var AreaCircularMilIsc = AreaCircularMilIscFun(conductorMaterial, temperature2, temperature1, Isc, timeIsc);
    var mm2Isc = cmilToMm2(AreaCircularMilIsc);

    for (let index = 0; index < mm2.length; index++) {
        if (mm2Isc <= mm2[index]) {
            var IscIndex = index;
            break;
        }
    }

    var cmilIsc = mm2Tocmil(mm2[IscIndex]);

    var conductorIsc = conductorIscFun(conductorMaterial, temperature2, temperature1, timeIsc, cmilIsc)/1000;
    /**optionIsc **/

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
                var voltageDropIndex = index;
                break;
            } else {
                
            }

        }

        voltageDropVolts = voltageDropPercent*voltage/100;
        voltageDropVoltsResult = voltageDropPercentResult*voltage/100;
        document.getElementById("voltageDropVolts").className = "result";

    } else if (optionvoltageDrop === "optionvoltageDropVolts") {
        var voltageDropVolts = Number.parseFloat(document.getElementById("voltageDropVolts").value);

        voltageDropPercent = voltageDropVolts/voltage*100;
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
                var voltageDropIndex = index;
                break;
            } else {
                
            }

        }
        voltageDropVoltsResult = voltageDropPercentResult*voltage/100;
        document.getElementById("voltageDropPercent").className = "result";

    } else {
        
    }
    /**optionvoltageDropArray **/

    /**optionIsc **/
    var AreaCircularMilIsc = AreaCircularMilIscFun(conductorMaterial, temperature2, temperature1, Isc, timeIsc);
    var mm2Isc = cmilToMm2(AreaCircularMilIsc);

    for (let index = 0; index < mm2.length; index++) {
        if (mm2Isc <= mm2[index]) {
            var IscIndex = index;
            break;
        }
    }

    var cmilIsc = mm2Tocmil(mm2[IscIndex]);

    var conductorIsc = conductorIscFun(conductorMaterial, temperature2, temperature1, timeIsc, cmilIsc)/1000;
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

    var indexCustom = IndexCalibreCustom;
    /**optionvoltageDropArrayCustom **/

    /**optionvoltageDropArrayCustom **/

    var RTempCustom;
    var XLCustom;
    var ZeCustom;
    var voltageDropPercentResultCustom;
    var voltageDropVoltsResultCustom;

    if (RArray[indexCustom] === NaN || XArray[indexCustom] === NaN) {
   
    }else {
        RTempCustom = RTempFun(RArray[indexCustom], Tinsulation);
        XLCustom = XArray[indexCustom];
    
        ZeCustom = ZeFun(RTempCustom, XLCustom, pf);
        voltageDropPercentResultCustom = voltageDropPercentFun(system, ZeCustom, length, current, voltage, conductorsPerPhase);
    
        voltageDropVoltsResultCustom = voltageDropPercentResultCustom*voltage/100;
    }
    /**optionvoltageDropArrayCustom **/

    /**optionIscCustom **/

    var cmilIscCustom = mm2Tocmil(mm2[indexCustom]);

    var conductorIscCustom = conductorIscFun(conductorMaterial, temperature2, temperature1, timeIsc, cmilIscCustom)/1000;
    /**optionIscCustom **/

    /*computation */

    var currentPerConductor = currentPerConductorFun(current, conductorsPerPhase);

    var apparentPower = apparentPowerFun(system, voltage, current, pf);
    var reactivePower = reactivePowerFun(system, voltage, current, pf);

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

    var AmpacityShortCircuit = AmpacityArray[IscIndex];
    var sizeAmpacityShortCircuit = AWG[IscIndex];
    var mm2AmpacityShortCircuit = mm2[IscIndex];

    /*custom*/
    var AmpacityCustom = AmpacityArray[indexCustom];
    var AmpacityContinuousLoadCustom = AmpacityArray[indexCustom];
    var AmpacityFactorTemperatureCustom = AmpacityArray[indexCustom]*factorTemperature;
    var AmpacityFactorGroupingCustom = AmpacityArray[indexCustom]*factorGrouping;
    var AmpacityFactorAdjustmentCustom = AmpacityArray[indexCustom]*factorAdjustment;

    var sizeAmpacityCustom = AWG[indexCustom];
    var sizeAmpacityContinuousLoadCustom = AWG[indexCustom];
    var sizeAmpacityFactorTemperatureCustom = AWG[indexCustom];
    var sizeAmpacityFactorGroupingCustom = AWG[indexCustom];
    var sizeAmpacityFactorAdjustmentCustom = AWG[indexCustom];

    var mm2AmpacityCustom = mm2[indexCustom];
    var mm2AmpacityContinuousLoadCustom = mm2[indexCustom];
    var mm2AmpacityFactorTemperatureCustom = mm2[indexCustom];
    var mm2AmpacityFactorGroupingCustom = mm2[indexCustom];
    var mm2AmpacityFactorAdjustmentCustom = mm2[indexCustom];

    var AmpacityVoltageDropCustom = AmpacityArray[indexCustom];
    var sizeAmpacityVoltageDropCustom = AWG[indexCustom];
    var mm2AmpacityVoltageDropCustom = mm2[indexCustom];

    var AmpacityShortCircuitCustom = AmpacityArray[indexCustom];
    var sizeAmpacityShortCircuitCustom = AWG[indexCustom];
    var mm2AmpacityShortCircuitCustom = mm2[indexCustom];
    /*custom*/

    /*results */
    document.getElementById("current").value = current.toFixed(decimals);
    document.getElementById("ContinuousLoad").value = (current*1.25).toFixed(decimals);
    document.getElementById("currentPerConductor").value = currentPerConductor.toFixed(decimals);
    document.getElementById("realPower").value = realPower.toFixed(decimals);
    document.getElementById("apparentPower").value = apparentPower.toFixed(decimals);
    document.getElementById("reactivePower").value = reactivePower.toFixed(decimals);

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

    var AmpacityVoltageDrop = AmpacityArray[voltageDropIndex];
    var sizeAmpacityVoltageDrop = AWG[voltageDropIndex];
    var mm2AmpacityVoltageDrop = mm2[voltageDropIndex];

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

    var AmpacityVoltageDropCustom = AmpacityArray[indexCustom];
    var sizeAmpacityVoltageDropCustom = AWG[indexCustom];
    var mm2AmpacityVoltageDropCustom = mm2[indexCustom];

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

function conductorIscFun(conductorMaterial, temperature2, temperature1, timeIsc, AreaCircularMil) {
    if (conductorMaterial == "Cu") {
        var conductorIsc = AreaCircularMil*Math.sqrt(0.0297*Math.log10((temperature2+234)/(temperature1+234))/timeIsc);
    }
    else if (conductorMaterial == "Al") {
        var conductorIsc = AreaCircularMil*Math.sqrt(0.0125*Math.log10((temperature2+228)/(temperature1+228))/timeIsc);
    } else {
        alert("Error_conductorIsc");
    }

    return conductorIsc
}

function AreaCircularMilIscFun(conductorMaterial, temperature2, temperature1, Isc, timeIsc) {
    if (conductorMaterial == "Cu") {
        var AreaCircularMil = Isc*Math.sqrt(timeIsc/(0.0297*Math.log10((temperature2+234)/(temperature1+234))));
    }
    else if (conductorMaterial == "Al") {
        var AreaCircularMil = Isc*Math.sqrt(timeIsc/(0.0125*Math.log10((temperature2+228)/(temperature1+228))));
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
    