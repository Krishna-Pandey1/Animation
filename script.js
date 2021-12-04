var m=0;
var y;
function start()
{
    y = setInterval(fly,10);
    function fly(){
    m=m-5;
    var x = document.getElementById("hanumanJi");
    x.style.marginTop= m+'px';
}
}

function stop(){
    clearInterval(y);
}