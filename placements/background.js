///////////////////////////////////////////////////////////////////////////////////
count =0;
allText = "";
allText2 = "";
readTextFile("http://10.22.28.218:8000/sls2.txt");
//console.log(allText);
red = [255, 0, 3, 255];
chrome.browserAction.setBadgeText({text: allText[0]+"-"+allText[2][1]+allText[2][2]});
chrome.browserAction.setBadgeBackgroundColor({color: red});

prev_yes = allText[0];
prev_no = allText[1];
prev_yes2 = allText2[0];
prev_no2 = allText2[1];
prev_comp = allText[2];
prev_dead =allText[3];
setInterval(function(){
readTextFile("http://10.22.28.218:8000/sls2.txt");
readTextFile2("http://10.22.30.240:8000/sls2.txt");
yesSound = new Audio('yes.mp3');
noSound = new Audio('no.mp3');
chrome.browserAction.setBadgeText({text: allText[0]+"-"+allText[2][1]+allText[2][2]});
if(undefined != allText[1] && (prev_yes != allText[0] || prev_no != allText[1]) )
{
        if(prev_yes != allText[0])
    yesSound.play();
   if(prev_no != allText[1])
    noSound.play();
    chrome.browserAction.setBadgeBackgroundColor({color: red});
    chrome.notifications.create("", {
    type:"basic",
    iconUrl:"logo.png",
    title:"Sai, Shortlist Updated",
    message:"Updated To: "+allText[0]+" Yes  "+allText[1]+" No"
    },function(){return 0;});
prev_yes = allText[0];
prev_no = allText[1];
//send mail
//send("rdarmateja@gmail.com","Teja, Shortlist Updated To:"+allText[0]+" Yes  "+allText[1]+" No","Teja, Shortlist Updated To:"+allText[0]+" Yes  "+allText[1]+" No");
}

if(undefined != allText2[1] && (prev_yes2 != allText2[0] || prev_no2 != allText2[1]) )
{
     if(prev_yes2 != allText2[0])
    yesSound.play();
   if(prev_no2 != allText2[1])
    noSound.play();
    chrome.browserAction.setBadgeBackgroundColor({color: red});
    chrome.notifications.create("", {
    type:"basic",
    iconUrl:"logo.png",
    title:"Sai, Shortlist Updated",
    message:"Updated To: "+allText2[0]+" Yes  "+allText2[1]+" No"
    },function(){return 0;});  
prev_yes2 = allText2[0];
prev_no2 = allText2[1];
//send mail
//send('nsaikrishna94@gmail.com',"Sai Krishna,Your Shortlist Updated To:"+allText2[0]+" Yes  and "+allText2[1]+" No","Sai, Shortlist Updated To:"+allText2[0]+" Yes and"+allText2[1]+" No");
}

if(undefined != allText[2] && prev_comp != allText[2]){
    //yourSound.play();
chrome.browserAction.setBadgeBackgroundColor({color: red});
chrome.notifications.create("", {
    type:"basic",
    iconUrl:"logo.png",
    title:"Sai, Companies List Updated",
    message:"Total Comp: "+allText[2]
    },function(){return 0;});
prev_comp = allText[2];
}

if(undefined != allText[3] && prev_dead != allText[3]){
    yourSound.play();
chrome.browserAction.setBadgeBackgroundColor({color: red});
chrome.notifications.create("", {
    type:"basic",
    iconUrl:"logo.png",
    title:"Sai, Resume Deadline Updated",
    message:"Deadline for today: "+allText[3]
    },function(){return 0;});
    prev_dead = allText[3];
}

}, 2*1000);


function readTextFile2(file)
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
                allText2 = rawFile.responseText;
               allText2 = allText2.split("\n");
            }
        }
    }
    rawFile.send(null);
}


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