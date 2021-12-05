var m=0;
var h;
var z=0;
var y;
var z;
var x;
var j;
var b;
x.style.marginTop= m+'px';

function start()
{    
    y = setInterval(fly,1);
}

 function fly(){
    m=m-5;
    x = document.getElementById("hanumanJi");
    x.style.marginTop= m+'px';
    if(m <= -450){
    clearInterval(y);
    x.src="img/surelyFinalHanumanJi.png";
    z=setInterval(fly2,1);
}
function fly2(){
        z = z+5;
     j =document.getElementById("hanumanJi");
     j.style.marginLeft = z+'px';
     if(z>=800){
         clearInterval(z);
         j.src = "img/hanumanJiFinale.png";
         c=setInterval(fly3(),1);
        }
        // function fly3(){
        //     b=b+5;
        //     v = document.getElementById("hanumanJi");
        //     v.style.marginTop=b+'px';
            
        // }

    }
}
function stop(){
    clearInterval(y);
    }