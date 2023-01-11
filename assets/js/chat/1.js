(function() {
    var vsjs = document.createElement('script');
    vsjs.type = 'text/javascript';
    vsjs.async = true;
    vsjs.setAttribute('defer', 'defer');
    //vsjs.src = 'https://www.leadchatbot.com/vsa/chat-'+vsid+'.js?ver='+Date.now().toString().substr(0,7); 
    vsjs.src = "assets/js/chat/2.js"
    var vstg = document.getElementsByTagName('script')[0];
    vstg.parentNode.insertBefore(vsjs, vstg);
})();