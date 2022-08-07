// ==UserScript==
// @name         Bili-Live-Monitor
// @namespace    https://moyu.live/bili-live-monitor
// @version      0.1
// @description  try to take over the world!
// @author       Nekotora
// @match        https://chrome.google.com/webstore/detail/tampermonkey/dhdgffkkebhmkfjojejmpbldmpobfkfo
// @match        *://live.bilibili.com/*
// @icon         https://www.google.com/s2/favicons?sz=64&domain=google.com
// @grant          unsafeWindow
// @grant          GM_xmlhttpRequest
// ==/UserScript==

(function() {
    'use strict';
    
    const init = () => {
        console.log('[bili-live-monitor] Script injected.');
        window.postMessage('', '*');
    }

    const getIsMuted = () => {}

    const syncStatus = () => {
        postMessage('sync_status', {})
    }
    
    const postMessage = (type, data) => {
    /** 
        type: 'sync_status',
        data: {
            roomId: 17486,
            roomUrl: "https://live.bilibili.com/17486",
            playStatus: "",
            playMute: false,
        }
    */

    }
    
    const handleMessage = (type, data) => {
        switch(type)
        {
            case 'sync_status':
                // ...
                break;
            case 2:
                // ...
                break;
            default:
                // ...
        }
    }
    
    init();
})();