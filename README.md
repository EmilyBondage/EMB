This addon is just a few things i thought of and wanted to add, who know i might port some to BC proper some time


Ways to load

Tamper: Coming soon

Bookmark: javascript:(function (){"use strict";if (typeof EMB_Loaded !== "undefined") return; const src = `https://emilybondage.github.io/EMB/start.js?v=${Date.now()}`; const script = document.createElement("script"); script.src = src; script.type = "text/javascript"; script.crossOrigin = "anonymous"; document.head.appendChild(script)})()
