// ==UserScript==
// @name         AutoLogin
// @namespace    http://tampermonkey.net/
// @version      1.0
// @description  Automatically logs user in. Add username before @amazon.com If password isn't 123456, put in correct password.
// @author       S-E-R-G-I-O@
// @match        https://aftlite-portal.amazon.com/ap*
// @icon         https://www.google.com/s2/favicons?domain=amazon.com
// ==/UserScript==

(function() {
    'use strict';

    var userName ="@amazon.com";
    document.getElementById("ap_email").value = userName;
    document.getElementById("ap_password").value = "123456";
    document.querySelector("input[type='submit']").click();

})();
