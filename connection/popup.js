 function connected(){
 chrome.browserAction.setIcon({
            path: "blue.png"
        });
 document.getElementById("status").innerHTML = "<img src ='gen6.gif' width='25px' height='25px'> You are Connected!! <img src ='gen6.gif' width='25px' height='25px'>"
}

 function notConnected(){
 chrome.browserAction.setIcon({
            path: "red.png"
        });
 document.getElementById("status").innerHTML = "You are not Connected!!"
}
window.onload = function(){
var i = new Image();
i.onload = connected;
i.onerror = notConnected;
// CHANGE IMAGE URL TO ANY IMAGE YOU KNOW IS LIVE
i.src = 'https://www.google.co.in/images/branding/product/ico/googleg_lodp.ico?q=' + escape(Date())
}