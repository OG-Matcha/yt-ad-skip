// ==UserScript==
// @name         自動跳過YT廣告
// @namespace    youtube
// @version      1.0
// @description  在YouTube上自動跳過廣告
// @author       OG_Matcha
// @match        *://www.youtube.com/*
// @grant        none
// ==/UserScript==

(function () {
    'use strict';

    function skipAd() {
        var skipButton = document.querySelector('.ytp-ad-skip-button-modern.ytp-button');
        if (skipButton) {
            skipButton.click();
            console.log("Click button");
        }
    }

    var timer = setInterval(skipAd, 1000);
})();