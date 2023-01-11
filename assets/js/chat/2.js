
/**
* vspiritsChatbot
*  v80
* resizing vspiritsize
* remove small screen popup
* visitorismobile true/false
* mobileoptimised website yes/no/auto
* blockmobile true/false
* chatapp web,mweb,mobi
* forcenewwindow true/false (only for mobi) (mweb always new window)
* filter thankyou pages
* filterpages usercontrol 
* newwindow selfwidth auto
* chatwindow newwindow/inpage
* mobimargin
* mobilebuttonbottom, mobilebuttonindent
* proactiveMessageText
* buttonweb, showButton
* maxHeight vh and maxWidth vw
* VSCookie
* vspiritsizewidth, vspiritsizewidthLarge, vspiritsizewidthSmall
* title limit
* wao chatbot region vsforcefocus resizechat block
* chatwindowcontrol inside
*/

var vspirits_chat_client = "kc23884eb008f36-newdesign-vsaenglish";
var usercontrol = true;
var vspiritsizewidth=350;
var vspiritsizeheight=470; 
var proactiveMinTimer = 12000; 
var exitMinTimer = 3000;
var triggerexit = true;
var triggertimer = true;
var triggerbutton = true;
var visitorismobile = false;
var mobileoptimised = "auto";
var chatapp = "web";
var forcenewwindow = false;
var blockmobile = false;
var triggerexitdialogue = false;
var exitdialoguestring = "";
var agentname = "";
var buttonside = "right";
var buttonindent = 10;
var buttonbottom = 10;
var windowside = "right";
var windowindent = 0;
var windowbottom = 15;
var startintro = "";
var vspiritbutton;
var mobilebuttonside = "left";
var chatfollowme=false;
var mobimargin=false;
var agentthankyoupage="";
var mobilebuttonbottom=20;
var mobilebuttonindent=5;

var vspiritsizewidthlarge=400;
var vspiritsizeheightlarge=530; 
var vspiritsizewidthsmall=330;
var vspiritsizeheightsmall=420; 

var buttonweb="";
var buttonmweb="";
var buttonmobi="";
var activemessagetext="";
var mobileactivemessagetext="";
var triggermessage = true;
var triggerbuttonovermessage = true; // v80
var triggermobilemessage = true;
var activemessageTimer = 3000;
var mobileactivemessageTimer = 12000;
var activemessagemode = "open";
var mobileactivemessagemode = "close";
var temp_useragent;
var vsforcefocus=false;

//v70-usercontrol-start

buttonweb='<div style="width: 80px; height: 80px;overflow: hidden;" ><img src="//www.leadchatbot.com/vsa/images/agentv6_chat4.png" height="100%" style="height:100%" alt="open chatbot"/></div>';

buttonmobi='<div style="width: 80px; height: 80px;overflow: hidden;" ><img src="//www.leadchatbot.com/vsa/images/agentv6_chat4.png" height="100%" style="height:100%" alt="open chatbot"/></div>';

buttonmweb='<div style="width: 80px; height: 80px;overflow: hidden;" ><img src="//www.leadchatbot.com/vsa/images/agentv6_chat4.png" height="100%" style="height:100%" alt="open chatbot"/></div>';

proactiveMinTimer = 12000;
exitMinTimer = 3000;
triggerexit = true;
triggertimer = true;
triggerbutton = true;
triggerexitdialogue = false;
exitdialoguestring = 'A site representative can offer you support';
buttonside = 'right';
buttonindent = 10;
buttonbottom = 10;
windowside = 'right';
windowindent = 10;
windowbottom = 10;
agentname = 'MSCL';
chatfollowme = true;
mobileoptimised = 'auto';
mobilebuttonside = 'right';
mobilebuttonindent = '5';
mobilebuttonbottom = '20';
forcenewwindow = false;
mobimargin = false;
triggermessage = true;
triggerbuttonovermessage = true;
activemessageTimer = 3000;
activemessagetext = 'Hello 👋 I\'m the website chatbot! Got questions? Chat with us.';
triggermobilemessage = true;
mobileactivemessageTimer = 6000;
mobileactivemessagetext = 'Hello 👋 I\'m the website chatbot! Got questions? Chat with us.';

//v70-usercontrol-end

try {
        var vscss = document.createElement('link');
        vscss.rel = 'stylesheet';
        vscss.type = 'text/css';
        vscss.href = 'https://www.leadchatbot.com/vsa/chat-v7.css';
        var s = document.getElementsByTagName('script')[0];
        s.parentNode.insertBefore(vscss, s);
} catch (e) {
// nothing
alert(e);
}	

function addVSEvent(obj, evType, fn) {
    if (obj.addEventListener) {
        obj.addEventListener(evType, fn, false);
        return true;
    } else if (obj.attachEvent) {
        var r = obj.attachEvent("on" + evType, fn);
        return r;
    } else {
        return false;
    }
}

/* virtual spirits */
var agentstatus;
var activepage = false;
var activeexit = false;
var activetimer = false;
var activebutton = false;
var activemessage = false;
var clientpage_param;
var title_param;
var referrer_param;
var url_param;
var timeInterval;
var loadTime = new Date();
var initTime;
var exitTime;
var chatTime;
var closeTime;
var posX = 0;
var posY = 200;
var browser;

function initAgent() {

    var x = readVSCookie('vspirits_status');
    if (x) {
        // a cookie is written if the user has been handled
        // the cookie is removed if the user has closed the chat screen and is pending
        agentstatus = x;
    } else {
        agentstatus = "empty";
    }

    if (agentstatus == "-1") {
        agentstatus = "empty";
    }

    getchatparam();
    var tempref = getdomain(referrer_param);
    var tempurl = getdomain(url_param);

    if (agentstatus == "empty") {
        if (tempref == "") {
            createVSCookie("vspirits_status", "prospect", 1); // write the cookie
            agentstatus = "prospect";
        } else {
            if (tempurl == tempref) {
                createVSCookie("vspirits_status", "prospect", 1); // write the cookie
                agentstatus = "prospect";
            } else {
                createVSCookie("vspirits_status", "prospect", 1); // write the cookie
                agentstatus = "prospect";
            }
        }
    }

    if (agentstatus == "empty") {
        // special demo pages
        if (tempurl.indexOf("leadchatbot.com") != -1) {
            agentstatus = "prospect";
            activepage = true;
        }
        if (tempurl.indexOf("localhost") != -1) {
            agentstatus = "prospect";
            activepage = true;
        }
    }

   if (usercontrol) { filterpages(); }
   filtervisitor();  
   getchatsettings();
   setactive();

    if (activeexit || activetimer || activebutton) {
        initPopup();
        // absolute timer
        initTime = new Date();
        timeInterval = initTime - loadTime; // the time since start loading till timer is started
        if (timeInterval > proactiveMinTimer) { proactiveMinTimer = 100; } else { proactiveMinTimer = proactiveMinTimer - timeInterval; }
        var actualMinTimer=100;
        actualMinTimer=proactiveMinTimer;
        if (chatfollowme && agentstatus =="inprocess") { actualMinTimer=100; } // chatfollowme
        if (activeexit) { initExit(); }
        if (activebutton) { showButton(); }
        if (activetimer) { setTimeout('proactiveengage()', actualMinTimer); }
        if (activemessage && activemessagetext!="") { setTimeout('proactiveMessageText()', activemessageTimer); }
}}

function setactive() {

    try {  var x = readVSCookie('vspirits_message'); if (x=="closed") {triggermessage=false;} } catch (e) {}     // v80

    if (activepage) {
        if (agentstatus == "prospect") {
            activeexit = triggerexit;
            activetimer = triggertimer;
            activebutton = triggerbutton; 
           activemessage = triggermessage; 
        }
        if (agentstatus == "pending") {
            activeexit = false;
            activetimer = false;
            activebutton = true;
           activemessage= triggermessage; // v80
        }
        if (agentstatus == "inprocess") {
            activeexit = false; 
            activetimer = true; 
            activebutton = true;
           activemessage= false; //added v7
        }
        if (agentstatus == "handled") {
            activeexit = false;
            activetimer = false;
            activebutton = true;
           activemessage= false; //added v7
        }
        if (agentstatus == "closed") {
            activeexit = false;
            activetimer = false;
            activebutton = false;
           activemessage= false; //added v7
        }
    } else {
        activeexit = false;
        activetimer = false;
        activebutton = false;
        activemessage= false; //added v7
    }
}

function initPopup() {
    // Add the HTML to the body
    theVSBody = document.getElementsByTagName('BODY')[0];
    
    popvsbutton = document.createElement('div');
    popvsbutton.id = 'popupVSButton';

    popvschat = document.createElement('div');
    popvschat.id = 'popupVSChat';

if (buttonside=="left") {
    popvsbutton.innerHTML = '<div id="openVSButton" role="region" aria-label="open chatbot" align="right" style="z-index:2000000;border:0px solid #000000;position: fixed; bottom: ' + buttonbottom + 'px;  left: ' + buttonindent + 'px; _position:absolute; _top: expression(offsetParent.scrollTop+document.documentElement.offsetHeight-60);direction:ltr;">&nbsp;</div>';
} else {
    popvsbutton.innerHTML = '<div id="openVSButton" role="region" aria-label="open chatbot" align="right" style="z-index:2000000;border:0px solid #000000;position: fixed; bottom: ' + buttonbottom + 'px;  right: ' + buttonindent + 'px; _position:absolute; _top: expression(offsetParent.scrollTop+document.documentElement.offsetHeight-60);direction:ltr;">&nbsp;</div>'; 
}

if (windowside=="left") {
    popvschat.innerHTML = '<div id="openVSChat" align="right" style="text-align:right !important;z-index:2000000;border:0px solid #000000;position: fixed; bottom: ' + windowbottom + 'px;  left: ' + windowindent + 'px; _position:absolute; _top: expression(offsetParent.scrollTop+document.documentElement.offsetHeight-500);direction:ltr;">&nbsp;</div>';
} else {
    popvschat.innerHTML = '<div id="openVSChat" align="right" style="text-align:right !important;z-index:2000000;border:0px solid #000000;position: fixed; bottom: ' + windowbottom + 'px;  right: ' + windowindent + 'px; _position:absolute; _top: expression(offsetParent.scrollTop+document.documentElement.offsetHeight-500);direction:ltr;">&nbsp;</div>'; 
}

    theVSBody.appendChild(popvsbutton);
    theVSBody.appendChild(popvschat);

    //alert("initPopup");
}

function initVSLoading() {
try {
// verify body is available or use legacy
theVSBody = document.getElementsByTagName('BODY')[0];
if (typeof theVSBody != 'undefined') { initAgent(); } 
else { addVSEvent(window, "load", initAgent); }
} catch (e) {}
}

getVSbrowser();
initVSLoading();

function initExit() {
    document.onmousemove = function (evt) {
        if (typeof evt == 'undefined') {
            myEvent = window.event;
        }
        else {
            myEvent = evt;
        }

        if (browser == "MSIE") {
            posX = myEvent.clientX;
            posY = myEvent.clientY;
        }
        else {
            posX = myEvent.pageX - window.pageXOffset;
            posY = myEvent.pageY - window.pageYOffset;
        }

        //document.getElementById("openVSButton").innerHTML = "mouse: " +posY;
        if (posY < 15) {
            //alert("mouse" +posY);
            exitchat();
        }
    }
}

function exitchat() {
    if (activeexit == true) {
        exitTime = new Date();
        timeInterval = exitTime - loadTime;
        if (timeInterval > exitMinTimer) {
            //call exit trigger and only dialog is enabled
            activeexit = false;
            startchat("exit");
            if (triggerexitdialogue){
            if (confirm(exitdialoguestring)) {
                //continue
            }
            else {
                setPending();
                hidePopWin(false);
            }}
        }
    }
}

function proactiveengage() {
if (activetimer == true) {
     if (chatapp =="web") { startchat("timer");  } // only web in v7
}}

function buttonchat() {
   // vsforcefocus=true; // english
    startchat("button");
}

function setPending() {
    createVSCookie("vspirits_status", "pending", 1); // write the cookie
    agentstatus = "pending";
    setactive();
    if (activebutton) { showButton(); }
}

// v80
function setActiveMessagePending() {
    createVSCookie("vspirits_message", "closed", 1); // write the cookie
    triggermessage=false;
}

function setClosed() {
    hideButton(); // hide the button chat
    createVSCookie("vspirits_status", "closed", 1); // write the cookie
    agentstatus = "closed";
    setactive();
}

// updated v80
function showButton() {
if (chatapp =="web") { vspiritbutton=buttonweb;}
if (chatapp =="mweb") { vspiritbutton=buttonmweb;}
if (chatapp =="mobi") { vspiritbutton=buttonmobi;}

var vspirittemphtml;
vspirittemphtml='<a tabindex="0" aria-label="chatbot button" onclick="buttonchat();return false;" style="text-decoration: none;" alt="open chatbot" role="button" onmouseover="buttonoverMessageText();return false;">' + vspiritbutton+ '</a>';
document.getElementById("openVSButton").innerHTML = vspirittemphtml;
}

function showButtonTimer() {
var vspirittemphtml;
vspirittemphtml= vspiritbutton+'<span style="position: absolute; top:20px; _top:25px; right:30px;"><img border="0" align="absmiddle" alt="" width="25" height="25" src="https://www.leadchatbot.com/vsa/images/progress.gif" /></span>';
document.getElementById("openVSButton").innerHTML = vspirittemphtml;
}

// v80
function buttonoverMessageText() { if (triggerbuttonovermessage) {proactiveMessageText();triggerbuttonovermessage=false;} }

// v80
function proactiveMessageText() {
tempstr = url_param;    // lowercase and  url encoded
tempstr = tempstr.replace("http://", "");
tempstr = tempstr.replace("https://", "");
tempstr = tempstr.replace("www.", "");

//activemessage-usercontrol-start

//activemessage-usercontrol-end

if (chatapp=="web") { 
vspiritbutton=buttonweb;
if (buttonside=="left") {
buttonmessagetext='<div class="vspiritsbutton" style="width:230px !important; border-radius:10px; border:1px solid #f2f2f2;background:#ffffff;position: absolute; bottom:100px; left: 10px;-moz-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;-webkit-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;"><div style="padding-top:20px; padding-left:15px;padding-right:15px;font-family: Arial;font-size: 16px;font-weight: normal;display: inline-table;text-decoration: none;text-align:left; line-height: 120%; font-style: normal;color: #101010;">'+activemessagetext+'</div><div style="text-align:right;padding:5px;"><a tabindex="0" aria-label="close chatbot invitation message" onclick="showButton();setActiveMessagePending();setPending();return false;" role="button"><img src="https://www.leadchatbot.com/vsa/images/roundclose.png" border=0 alt="close chat" style="height:20px;width:auto"/></a></div></div>';} 
else { buttonmessagetext='<div class="vspiritsbutton" style="width:230px !important; border-radius:10px; border:1px solid #f2f2f2;background:#ffffff;position: absolute; bottom:100px; right: 10px;-moz-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;-webkit-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;"><div style="padding-top:20px; padding-left:15px;padding-right:15px;font-family: Arial;font-size: 16px;font-weight: normal;display: inline-table;text-decoration: none;text-align:left; line-height: 120%; font-style: normal;color: #101010;">'+activemessagetext+'</div><div style="text-align:left;padding:5px;"><a tabindex="0" aria-label="close chatbot invitation message" onclick="showButton();setActiveMessagePending();setPending();return false;" role="button"><img src="https://www.leadchatbot.com/vsa/images/roundclose.png" border=0 alt="close chat" style="height:20px;width:auto"/></a></div></div>';
}}

if (chatapp=="mweb") { 
vspiritbutton=buttonmweb;
if (buttonside=="left") {
buttonmessagetext='<div class="vspiritsbutton" style="width:230px !important; border-radius:10px; border:1px solid #f2f2f2;background:#ffffff;position: absolute; bottom:100px; left: 10px;-moz-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;-webkit-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;"><div style="padding-top:20px; padding-left:15px;padding-right:15px;font-family: Arial;font-size: 16px;font-weight: normal;display: inline-table;text-decoration: none;text-align:left; line-height: 120%; font-style: normal;color: #101010;">'+activemessagetext+'</div><div style="text-align:right;padding:5px;"><a tabindex="0" aria-label="close chatbot invitation message" onclick="showButton();setActiveMessagePending();setPending();return false;" role="button"><img src="https://www.leadchatbot.com/vsa/images/roundclose.png" border=0 alt="close chat" style="height:20px;width:auto"/></a></div></div>';} 
else { buttonmessagetext='<div class="vspiritsbutton" style="width:230px !important; border-radius:10px; border:1px solid #f2f2f2;background:#ffffff;position: absolute; bottom:100px; right: 10px;-moz-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;-webkit-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;"><div style="padding-top:20px; padding-left:15px;padding-right:15px;font-family: Arial;font-size: 16px;font-weight: normal;display: inline-table;text-decoration: none;text-align:left; line-height: 120%; font-style: normal;color: #101010;">'+activemessagetext+'</div><div style="text-align:left;padding:5px;"><a tabindex="0" aria-label="close chatbot invitation message" onclick="showButton();setActiveMessagePending();setPending();return false;" role="button"><img src="https://www.leadchatbot.com/vsa/images/roundclose.png" border=0 alt="close chat" style="height:20px;width:auto"/></a></div></div>';
}}

if (chatapp=="mobi") { 
vspiritbutton=buttonmobi;
if (buttonside=="left") {
buttonmessagetext='<div class="vspiritsbutton" style="width:150px !important; border-radius:10px; border:1px solid #f2f2f2;background:#ffffff;position: absolute; bottom:80px; left: 10px;-moz-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;-webkit-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;"><div style="padding-top:20px; padding-left:15px;padding-right:15px;font-family: Arial;font-size: 13px;font-weight: normal;display: inline-table;text-decoration: none;text-align:left; line-height: 120%; font-style: normal;color: #101010;">'+activemessagetext+'</div><div style="text-align:right;padding:5px;"><a tabindex="0" aria-label="close chatbot invitation message" onclick="showButton();setActiveMessagePending();setPending();return false;" role="button"><img src="https://www.leadchatbot.com/vsa/images/roundclose.png" border=0 alt="close chat" style="height:20px;width:auto"/></a></div></div>';} 
else { buttonmessagetext='<div class="vspiritsbutton" style="width:150px !important; border-radius:10px; border:1px solid #f2f2f2;background:#ffffff;position: absolute; bottom:80px; right: 10px;-moz-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;-webkit-box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;box-shadow:  0px 1px 1px 1px rgba(0, 0, 0, 0.40) !important;"><div style="padding-top:20px; padding-left:15px;padding-right:15px;font-family: Arial;font-size: 13px;font-weight: normal;display: inline-table;text-decoration: none;text-align:left; line-height: 120%; font-style: normal;color: #101010;">'+activemessagetext+'</div><div style="text-align:left;padding:5px;"><a tabindex="0" aria-label="close chatbot invitation message" onclick="showButton();setActiveMessagePending();setPending();return false;" role="button"><img src="https://www.leadchatbot.com/vsa/images/roundclose.png" border=0 alt="close chat" style="height:20px;width:auto"/></a></div></div>';
}}

var vspirittemphtml;
if (activemessagemode=="open") { vspirittemphtml='<a  tabindex="0" aria-label="chatbot button" onclick="buttonchat();return false;" style="text-decoration: none;" alt="open chatbot" role="button">'+vspiritbutton+buttonmessagetext+'</a>'; } else {
vspirittemphtml='<a  tabindex="0" aria-label="chatbot button" onclick="buttonchat();return false;" style="text-decoration: none;" alt="open chatbot" role="button">'+vspiritbutton+'</a><a tabindex="0" aria-label="close chatbot button"  onclick="showButton();setActiveMessagePending();setPending();return false;" role="button">'+buttonmessagetext+'</a>'; }

document.getElementById("openVSButton").innerHTML = vspirittemphtml;
}

function hideButton() {
    document.getElementById("openVSButton").innerHTML = "&nbsp;";
}

function getchatparam() {
    clientpage_param=encodeURIComponent(location.href);
    title_param = document.title;
    if (title_param.length > 100) { title_param = title_param.substring(0,100); }
    title_param = title_param.replace("<","");
    title_param = title_param.replace(">","");
    title_param = encodeURI(title_param);
    referrer_param = document.referrer;
    referrer_param = getdomain(referrer_param);
    url_param = location.href;
    url_param = url_param.toLowerCase();
}

function filterpages() {
    tempstr = url_param;    // lowercase and  url encoded
    tempstr = tempstr .replace("http://", "");
    tempstr = tempstr .replace("https://", "");
    tempstr = tempstr.replace("www.", "");

    temprefstr=referrer_param; //v60
    temprefstr= temprefstr.toLowerCase();

    activepage = true; // all pages

   if (agentthankyoupage!="") {
     if (temprefstr.indexOf("leadchatbot.com/"+agentthankyoupage)!=-1) { activepage = false; }  // thankyou page referrer
    }

    // if (tempstr=="hello.html") { activepage = false; }  // specific url page hello.html
    // if (tempstr.indexOf("words")!=-1) { activepage = false; }  // page include string words

//filterpages-usercontrol-start

//filterpages-usercontrol-end

}

function getdomain(url) {
    if (url != "") {
        url = url.split(/\/+/g)[1];
    }
    return url;
}

function startchat(launcher) {
    chatTime = new Date();
    timeInterval = chatTime - loadTime;

// new design - recurring chat
        createVSCookie("vspirits_status", "inprocess", 1); // write the cookie for next page
        agentstatus = "handled";
        setactive();

if (chatapp =="web") { startChatInPage(launcher); } 
if (chatapp == "mweb") { setPending(); startChatNewWindow(launcher); }
if (chatapp =="mobi") { setPending(); if (forcenewwindow) { startChatNewWindow(launcher); } else { getchatsettings(); startChatInPage(launcher); } }
}

function startChatNewWindow(launcher){
window.open("https://www.leadchatbot.com/vsa/" + vspirits_chat_client + ".aspx?launcher=" + launcher + "&launchertime=" + timeInterval + "&chatwindow=newwindow&chatapp=" + chatapp + "&vspiritsizeheight=" + vspiritsizeheight + "&vspiritsizewidth=auto&startintro=" + startintro + "&referrer=" + referrer_param + "&title=" + title_param + "&clientpage=" + clientpage_param,'_blank', 'height='+vspiritsizeheight+',width='+vspiritsizewidth);
}

function startChatInPage(launcher){
try {
        showButtonTimer(); // show the button chat as timer
        showChatWindow("https://www.leadchatbot.com/vsa/" + vspirits_chat_client + ".aspx?launcher=" + launcher + "&launchertime=" + timeInterval + "&chatwindow=inpage&chatapp=" + chatapp + "&vspiritsizeheight=" + vspiritsizeheight + "&vspiritsizewidth=" + vspiritsizewidth  + "&startintro=" + startintro + "&referrer=" + referrer_param + "&title=" + title_param + "&clientpage=" + clientpage_param);
    } catch (e) {}
}

function showChatWindow(url) {
if (chatapp == "mobi") {
// chatapp mobi make the body fixed
var bodyfixed = document.createElement('style')
bodyfixed.setAttribute("id", "bodyfixedID");
bodyfixed.innerHTML = "body { overflow: hidden; position: fixed; }";
document.body.appendChild(bodyfixed);
}

document.getElementById("openVSChat").innerHTML = "<span id=\"lblCloseChat\" class=\"vspiritsbutton\" style=\"z-index:20000010;\">&nbsp;</span><iframe tabindex=\"0\" title=\"chatbot window\" aria-label=\"chatbot window\" src=" + url + " style=\"transition: .3s ease-in-out !important; transform: translate3d(0,0,0); z-index:10000010;position:relative;bottom:-2px;left:-5px;width:1;height:1;background-color:transparent;-moz-box-shadow: 0px 6px 40px 1px rgba(0,0,0,0.40) !important; -webkit-box-shadow: 0px 6px 40px 1px rgba(0,0,0,0.40) !important; box-shadow: 0px 6px 40px 1px rgba(0,0,0,0.40) !important; -moz-border-radius: 8px !important; -webkit-border-radius: 8px !important; border-radius: 8px !important;\" scrolling=\"no\" frameborder=\"0\"  id='iframeChat' name='iframeChat" + Math.round(Math.random() * 1000) + "' allowtransparency=\"true\" allowfullscreen=\"true\" id=\"popupVSChatFrame\" name=\"popupVSChatFrame\" width='1' height='1' onload='showIframeChat();'></iframe>";
}

function hideChatWindow() {
if (chatapp == "mobi") {
// chatapp mobi make the body scrollable again
var sheetToBeRemoved = document.getElementById('bodyfixedID');
var sheetParent = sheetToBeRemoved.parentNode;
sheetParent.removeChild(sheetToBeRemoved);
}

document.getElementById("openVSChat").innerHTML = "&nbsp;";
}

function showIframeChat() {
  // new design v60
   // resizing vspiritsize
    hideButton(); // hide the button
    document.getElementById("iframeChat").style.display = "block";

if (chatapp == "web") { 
document.getElementById("iframeChat").style.width = vspiritsizewidth + "px";
document.getElementById("iframeChat").style.height = vspiritsizeheight + "px";
document.getElementById("iframeChat").style.maxHeight = "95vh";  // added v7
document.getElementById("iframeChat").style.maxWidth = "80vw";  // added v7

// v80
//document.getElementById("lblCloseChat").innerHTML = "";

try { if(vsforcefocus) { vsforcefocus=false; document.getElementById("closebutton").focus(); }} catch (e) {}	
}

if (chatapp == "mobi") { 
if (temp_useragent.indexOf('iphone') != -1) { getchatsettings();}
document.getElementById("iframeChat").style.width = vspiritsizewidth+"px";
document.getElementById("iframeChat").style.height = vspiritsizeheight+"px";

// v80
//document.getElementById("lblCloseChat").innerHTML = "";
}

try { if(vsforcefocus) { vsforcefocus=false; document.getElementById("closebutton").focus(); }} catch (e) {}	
}

function createVSCookie(name, value, days) {
    if (days) {
        var date = new Date();
        date.setTime(date.getTime() + (days * 24 * 60 * 60 * 1000));
        var expires = "; expires=" + date.toGMTString();
    }
    else var expires = "";
    document.cookie = name + "=" + value + expires + "; path=/";
}

function readVSCookie(name) {
    var nameEQ = name + "=";
    var ca = document.cookie.split(';');
    for (var i = 0; i < ca.length; i++) {
        var c = ca[i];
        while (c.charAt(0) == ' ') c = c.substring(1, c.length);
        if (c.indexOf(nameEQ) == 0) return c.substring(nameEQ.length, c.length);
    }
    return null;
}

function eraseVSCookie(name) {
    createVSCookie(name, "", -1);
}

function getVSbrowser() {
    if (navigator.userAgent.indexOf('MSIE') != -1) {
        browser = "MSIE";
    } else {
        if (navigator.userAgent.indexOf('Firefox') != -1) {
            browser = "FF";
        } else {
            if (navigator.userAgent.indexOf('Chrome') != -1) {
                browser = "CH";
            } else {
                browser = "other";
            }
        } 
    }
    //alert(browser);
}

function filtervisitor() {
temp_useragent = navigator.userAgent;
temp_useragent  = temp_useragent.toLowerCase();
if (temp_useragent.indexOf('iphone') != -1) { visitorismobile = true; }
if (temp_useragent.indexOf('ipad') != -1) { visitorismobile = true; }
if (temp_useragent.indexOf('android') != -1) { visitorismobile = true; }
if (temp_useragent.indexOf('blackberry') != -1) { visitorismobile = true; }
if (temp_useragent.indexOf('mobile') != -1) { visitorismobile = true; }
if (blockmobile && visitorismobile) { activepage = false; }
if (visitorismobile) {
addVSEvent(window,"orientationchange", resizewindowmobile); // custom resize
 chatapp = "mweb"; 
 if (mobileoptimised=="yes") { chatapp = "mobi"; }
 if (mobileoptimised=="auto") { detectMobileOptimised(); }
}}

function detectMobileOptimised() {
try {
var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight || e.clientHeight || g.clientHeight;
if (x<600 || y<600) {chatapp = "mobi"; }
} catch (e) {}	
} 

function resizewindowmobile() { setTimeout('resizewindow()', 100); }

function resizewindow(){
try {
getchatsettings();
document.getElementById("iframeChat").style.height = vspiritsizeheight+"px";
document.getElementById("iframeChat").style.width = vspiritsizewidth+"px";
} catch (e) {}
}

var VSmaxwindow=false;
function applyVSmaxwindow(){
if(VSmaxwindow) { 
document.getElementById("iframeChat").style.height = vspiritsizeheight+"px";
document.getElementById("iframeChat").style.width = vspiritsizewidth+"px";
document.getElementById("iframeChat").style.maxHeight = "95vh";  // added v7
document.getElementById("iframeChat").style.maxWidth = "80vw";  // added v7
//document.getElementById("resizechat").setAttribute("aria-label", "regular size chatbot window - expand chatbot window"); //v80
VSmaxwindow=false; 
} else { 
document.getElementById("iframeChat").style.height = "95vh"; 
document.getElementById("iframeChat").style.width = "550px";
document.getElementById("iframeChat").style.maxHeight = "95vh";  // added v7
document.getElementById("iframeChat").style.maxWidth = "95vw";  // added v7
//document.getElementById("resizechat").setAttribute("aria-label", "large size chatbot window - set regular size chatbot window"); //v80
VSmaxwindow=true; 
}}

function getchatsettings() {
if (chatapp == "web") {
try {
        if (window.screen.availHeight>900) { vspiritsizewidth=vspiritsizewidthlarge; vspiritsizeheight=vspiritsizeheightlarge; }
        if (window.screen.availHeight<601) { vspiritsizewidth=vspiritsizewidthsmall; vspiritsizeheight=vspiritsizeheightsmall; }
} catch (e) {}	
} 

if (chatapp == "mweb") {
buttonside=mobilebuttonside;
buttonbottom=mobilebuttonbottom;
buttonindent=mobilebuttonindent;
triggermessage=triggermobilemessage;
// activemessagetext=mobileactivemessagetext; //v80
activemessageTimer=mobileactivemessageTimer;
activemessagemode=mobileactivemessagemode;
}

if (chatapp == "mobi") {
triggerexit=false;
buttonside=mobilebuttonside;
buttonbottom=mobilebuttonbottom;
buttonindent=mobilebuttonindent;
triggermessage=triggermobilemessage;
// activemessagetext=mobileactivemessagetext; //v80
activemessageTimer=mobileactivemessageTimer;
activemessagemode=mobileactivemessagemode;

windowside="left"; 
windowindent=5;
windowbottom=0;

var w = window,
d = document,
e = d.documentElement,
g = d.getElementsByTagName('body')[0],
x = w.innerWidth || e.clientWidth || g.clientWidth,
y = w.innerHeight || e.clientHeight || g.clientHeight;
vspiritsizewidth= x;
vspiritsizeheight=y;
if(mobimargin){vspiritsizewidth=vspiritsizewidth - 5;}
}}

// conversion analytics event
addVSEvent(window,'message', receiveMessage);
function receiveMessage(event) {
// check message origin
if ( event.origin === 'https://www.leadchatbot.com' || event.origin === 'http://www.leadchatbot.com')
	{
console.log("got message: " + event.data);
if (event.data=="applyVSConversion") { applyVSConversion(); }
if (event.data=="applyVSclosewindow") { applyVSclosewindow(); } // v80
 if (event.data=="applyVSmaxwindow") { applyVSmaxwindow(); } // v80
}}

function applyConversionPage(strcurrentpage,strdomain,strthankyou) {
if (strcurrentpage.indexOf(strdomain)!=-1) { agentthankyoupage=strthankyou; }
}

// v80
function addVSNotes() {
theVSBody = document.getElementsByTagName('BODY')[0];
popvsnotes = document.createElement('div');
popvsnotes.id = 'popupVSNotes';
popvsnotes.innerHTML = '<div id="popupVSNotes" role="region" aria-label="chatbot notes" align="left" style="z-index:2000000;border:1px solid #333;padding:20px;border-radius:10px;background:#ffffff;position: fixed; bottom: 150px;  left: 10px; _position:absolute;">Additional chatbot information here: <br> <a href="https://www.leadchatbot.com/chatbot-demo-basic-lead-generation-web-agency.aspx" target="_blank" title="chatbot demo lead generation web agency">chatbot demo lead generation web agency</a> &nbsp;&nbsp; <a href="#" tabindex="0" aria-label="close chatbot notes" onclick="closeVSNotes();return false;" role="button"><img src="https://www.leadchatbot.com/vsa/images/roundclose.png" border=0 alt="close notes" style="height:20px;width:auto"/></a> </div>';
theVSBody.appendChild(popvsnotes);
}

// v80
function closeVSNotes() {
popvsnotes.innerHTML = "&nbsp;";
}

// v80
function applyVSclosewindow() { setPending();  hideChatWindow(); }

// v80
function applyVSConversionGTM() {
try{
window.dataLayer = window.dataLayer || [];
 window.dataLayer.push({
 'event': 'chatbotlead'
 });
} catch (e) {
// nothing
}}

// v80
function applyVSConversionFBPixel() {
try{fbq('track', 'chatbotlead'); 
} catch (e) {
// nothing
}}

//v80
function applyVSConversion() {
try{
var vsifr = document.createElement('iframe');
var agentcurrenturl=location.href;
var chatbotleadgtmevent=false;
var chatbotleadfbpixelevent=false;

agentcurrenturl=agentcurrenturl.toLowerCase();

//thankyoupages-usercontrol-start

//thankyoupages-usercontrol-end

if (chatbotleadgtmevent) {applyVSConversionGTM(); }
if (chatbotleadfbpixelevent) {applyVSConversionFBPixel(); }

if (agentthankyoupage!="") {
vsifr.style.height = "1px";
vsifr.style.width = "1px";
vsifr.src = agentthankyoupage;
document.body.appendChild(vsifr);
}

} catch (e) {
// nothing
}}




