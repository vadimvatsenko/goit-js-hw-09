const t={getStartBtn:document.querySelector("[data-start]"),getStopBtn:document.querySelector("[data-stop]"),getBody:document.querySelector("body")};t.getStartBtn.addEventListener("click",(function(){t.getStartBtn.disabled=!0,t.getStopBtn.disabled=!1,timerId=setInterval((()=>{t.getBody.style.backgroundColor=`#${Math.floor(16777215*Math.random()).toString(16)}`}),1e3)})),t.getStopBtn.addEventListener("click",(function(){clearTimeout(timerId),t.getStartBtn.disabled=!1,t.getStopBtn.disabled=!0})),t.getStopBtn.disabled=!0;
//# sourceMappingURL=01-color-switcher.0512f34a.js.map
