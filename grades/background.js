count =0;
allText = "";
readTextFile("sls.txt");
//console.log(allText);
chrome.browserAction.setBadgeText({text: allText[0]});
chrome.browserAction.setBadgeBackgroundColor({color: [12, 120, 243, 255]});

prev = allText[0];
//prev_no = allText[1];
//prev_comp = allText[2];
//prev_dead =allText[3];
setInterval(function(){
readTextFile("sls.txt");
yesSound = new Audio('main.mp3');
//noSound = new Audio('no.mp3');
chrome.browserAction.setBadgeText({text: allText[0]});
if(undefined != allText[0] && prev != allText[0]  )
{
    //if(prev_yes != allText[0])
    yesSound.play();
    //if(prev_no != allText[1])
    //noSound.play();
    chrome.browserAction.setBadgeBackgroundColor({color: [12, 120, 243, 255]});
    chrome.notifications.create("", {
    type:"basic",
    iconUrl:"logo2.png",
    title:"Dude grades got updated",
    message:"Updated To: "+allText[0]
    },function(){return 0;});
prev = allText[0];
//prev_no = allText[1];
}


}, 5*60000);


function readTextFile(file)
{
    var rawFile = new XMLHttpRequest();
    rawFile.open("GET", file, false);
    rawFile.setRequestHeader('Cache-Control', 'no-cache');
    rawFile.onreadystatechange = function ()
    {
        if(rawFile.readyState === 4)
        {
            if(rawFile.status === 200 || rawFile.status == 0)
            {
                allText = rawFile.responseText;
               allText = allText.split("\n");
            }
        }
    }
    rawFile.send(null);
}