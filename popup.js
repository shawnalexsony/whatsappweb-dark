
function tog() {  //execute script to change CSS to toggle dark mode
  chrome.tabs.executeScript({
    file: 'toggle.js'
  }); 
}

function openww(){ //open Whatsapp Web in a new tab
chrome.tabs.create({'url': "https://web.whatsapp.com"});
}

setTimeout(function(){ //Check if the current tab is Whatsapp Web when extension is activated
chrome.tabs.query({
    active: true,
    lastFocusedWindow: true
}, function(tabs) {
    var tab = tabs[0]; 
   if(String(tab.url)==="https://web.whatsapp.com/")
	{document.getElementById("inactive").innerHTML = ' ';  //Display toggle switch & hide the Whatsapp Web Link
	}
   else
	{document.getElementById("active").innerHTML = ' ';   //Hide toggle switch & Display the Whatsapp Web Link
	} 
});
},10);

document.getElementById('trig').addEventListener('click', tog);   //Add event listeners for 'click event'
document.getElementById('link').addEventListener('click', openww);

