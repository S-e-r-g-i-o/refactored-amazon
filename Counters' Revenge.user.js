// ==UserScript==
// @name         Counters' Revenge
// @namespace    http://tampermonkey.net/
// @version      0.03.02.21 - 11:35PM
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
       var ASINS = prompt("How many different ASINS are in the bin? Enter x to end script.");
    if(ASINS == "x"){
        return;
    }


    // undefined array of ASINS length, stores ASINS.
    var asinArray = Array.apply(null, Array(ASINS)).map(function () {})

    // undefined array of ASINS length, stores quantity.
    var quantityArray = Array.apply(null, Array(ASINS)).map(function () {})



    // populates asinArray with ASINS, quantityArray with asin quantities
    for(var i = 0; i < ASINS; i++){

        //i+1 to avoid user confusion from 0.
        asinArray[i] = prompt ("Please type ASIN #" + (i+1) +" out of " + (ASINS));

        quantityArray = prompt ("Please type in the quantity of ASIN " + (asinArray[i]));
    }

    GM_setValue("asinArray",asinArray);
    GM_setValue("quantityArray",quantityArray);


    //controls which asin to output
    for (var y = 0; y < asinArray.length; y++ ) {

        // controls qty of asinArray[y] ASIN
        for (var x = 0; x < quantityArray[x]; x++) {
            setTimeout(function(){

//                document.getElementById('asin').value = asinArray[y];
//                document.querySelector("input[type='submit']").click();

            },1000);
        }
    }

    //let asinData[] = GM_getValue("asinArray");
// GM_getValue
 //    GM_deleteValue("asinArray");
 //    GM_deleteValue("quantityArray");

})();
