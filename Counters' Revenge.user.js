// ==UserScript==
// @name         Counters' Revenge
// @namespace    http://tampermonkey.net/
// @version      1.0
// @author       S-e-r-g-i-o
// @match        https://aftlite-portal.amazon.com/bcc/enter-asin*
// @match        https://aftlite-na.amazon.com/bcc/enter-asin*
// @downloadURL  https://github.com/S-e-r-g-i-o/refactored-broccoli/blob/master/Counters'%20Revenge.js
// @icon         https://www.google.com/s2/favicons?domain=amazon.com
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// ==/UserScript==

(function() {
    'use strict';
    var storedXTest = GM_getValue("storedX");
    var asinQuantityTest = GM_getValue("asinQuantity");
    console.log(storedXTest +" test "+ asinQuantityTest);

    if(storedXTest!= null && storedXTest >= asinQuantityTest){
        deleteValues();
    }
    var runPrompt = GM_getValue("runPrompt");
    var ASIN;
    var asinQuantity;
    if(runPrompt == true || runPrompt == null){

        ASIN = prompt( "Please enter ASIN");
        asinQuantity = prompt("Please enter the quantity of ASIN " + ASIN);
        GM_setValue("ASIN",ASIN);
        GM_setValue("asinQuantity", asinQuantity);
        console.log("runPrompt set to false, values set for ASIN and asinQuantity and runPrompt");
        runPrompt = false;
        GM_setValue("runPrompt",runPrompt);
    }
    var storedX = GM_getValue("storedX");
    if(storedX == null){
        console.log("storedX set to 0 at line 31");
        storedX = 0;
    }
    if(asinQuantity == null){
        asinQuantity = GM_getValue("asinQuantity");
        asinQuantity = parseInt(asinQuantity);
        console.log("if asinq ran");

    }
    if(ASIN == null){
        ASIN = GM_getValue("ASIN");
        console.log("if asin ran");
    }

    if(storedX < asinQuantity){
        GM_deleteValue("storedX");
        storedX++;
        GM_setValue("storedX",storedX);
        document.getElementById('asin').value = ASIN;
        document.querySelector("input[type='submit']").click();
        console.log("storedx = " + storedX);

    }
    console.log(storedX +" "+ asinQuantity+" "+ASIN);

})();

// deletes all values and stops scripts.
function deleteValues(){
    try{
        GM_deleteValue("storedX");
        GM_deleteValue("runPrompt");
        GM_deleteValue("ASIN");
        GM_deleteValue("asinQuantity");
    } catch(err){"error in deletevalues"}
    console.log("deleteValues ran");
    return;
}
