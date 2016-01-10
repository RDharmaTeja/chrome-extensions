status = "red";

 function connected(){
if(status == "red"){
 chrome.browserAction.setIcon({
            path: "blue.png"
        });
}
status = "blue";
}

 function notConnected(){
    if(status == "blue"){
 chrome.browserAction.setIcon({
            path: "red.png"
        });
 //alert("Your are not connected to internet");
    } 
    status = "red";
}


setInterval(function(){
var i = new Image();
i.onload = connected;
i.onerror = notConnected;
i.src = 'https://www.google.co.in/images/branding/product/ico/googleg_lodp.ico?q=' + escape(Date())
}, 4000);
