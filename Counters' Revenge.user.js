// ==UserScript==
// @name         Counters' Revenge
// @namespace    http://tampermonkey.net/
// @version      0.03.02.21 - 11:00PM
// @author       S-e-r-g-i-o
// @match        https://aftlite-portal.amazon.com/bcc/enter-asin*
// @match        https://aftlite-na.amazon.com/bcc/enter-asin*
// @downloadURL  https://github.com/S-e-r-g-i-o/refactored-broccoli/blob/master/Counters'%20Revenge.js
// @grant        GM_setValue
// @grant        GM_getValue
// @grant        GM_deleteValue
// ==/UserScript==


(function() {
    'use strict';

    // get input for the length of list or array needed.
    /*    var ASINS = prompt("How many different ASINS are in the bin? Enter 0 to end script.");
    if(ASINS == 0){
        return;
    }
*/
    var ASINS = 3

    // undefined array of ASINS length, stores ASINS.
    var asinArray = Array.apply(null, Array(ASINS)).map(function () {})

    // undefined array of ASINS length, stores quantity.
    var quantityArray = Array.apply(null, Array(ASINS)).map(function () {})

    asinArray[0] = "ASIN0";
    asinArray[1] = "ASIN1";
    asinArray[2] = "ASIN2";
    asinArray[3] = "ASIN3";
    quantityArray[0] = "QUANTITY0";
    quantityArray[1] = "QUANTITY1";
    quantityArray[2] = "QUANTITY2";
    quantityArray[3] = "QUANTITY3";


    /*
    // populates asinArray with ASINS, quantityArray with asin quantities
    for(var i = 0; i < ASINS; i++){

        //i+1 to avoid user confusion from 0.
        asinArray[i] = prompt ("Please type ASIN #" + (i+1) +" out of " + (ASINS));

        quantityArray = prompt ("Please type in the quantity of ASIN " + (asinArray[i]));
    }

*/
    /*
    //controls which asin to output
    for (var y = 0; y < asinArray.length; y++ ) {

        // controls qty of asinArray[y] ASIN
        for (var x = 0; x < quantityArray[x]; x++) {
            setTimeout(function(){

                document.getElementById('asin').value = asinArray[y];

                document.querySelector("input[type='submit']").click();

            },1000);
        }
    }
*/
    //let asinData[] = GM_getValue("asinArray");
    
 //    GM_deleteValue("asinArray");
 //    GM_deleteValue("quantityArray");


    JSON.Parse(GM_setValue("asinArray",asinArray));
    JSON.Parse(GM_setValue("quantityArray",quantityArray));

})();
