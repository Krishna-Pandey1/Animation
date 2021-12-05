// var p=0;
// var m=0;
// var flag=1;
// var x;
// var z =0;

// while(flag != 0){
//     if(m>-450){
//         m=m-5;
//         x = document.getElementById("hanumanJi");
//         x.style.marginTop = m+'px';
//         flag = 1;
//     }
//     else if (m<=-450){
//         x.src = "img/surelyFinalHanumanJi.png";
//        z = z+5;
//        x.style.marginLeft= z+'px';
//        flag = 1;
//     }
//     else{
//         flag = 0;
//     }
// }
var m=0;
var h;
var z=0;
var y;
var z;
var x;
var k=0;
var q;
var j;
var v;
var l;
var b;
var fl=0;
var med;
var hAndMed = -10;
var har;
var back;
var secondLast = 0;
var secondLastMed=0;
x.style.marginTop= m+'px';
var bgChanged;
var lastAnimation;
var lastDown;

function start()
{    
    y = setInterval(fly,10);
    // const audio  = new Audio();
    // audio.src= "MMD-Jai Hanuman Gyan Gun.mp3";
}

 function fly(){
    m=m-15;
    x = document.getElementById("hanumanJi");
    x.style.marginTop= m+'px';
    if(m <= -450){
    clearInterval(y);
    // x.src="img/surelyFinalHanumanJi.png";
    z=setInterval(fly2,40);
    q=m;
    lastDown = m;
    }
}
function fly2(){
    j=document.getElementById("hanumanJi");
    j.src = "img/surelyFinalHanumanJi.png";
    j.style.marginLeft = k+'px';
    k=k+10;
    if(k>=850){
        clearInterval(z);
        c = setInterval(fly3,10);
    secondLast = k;
    // secondLastMed = k;
    }
}
    function fly3(){
        // m = m+5;
        // v=document.getElementById("hanumanJi");
        // v.src = "img/hanumanJiFinale.png";
        // v.style.marginTop = m+'px';
        // if(m<=0){
        //     clearInterval(z);
        //     u=setInterval(medicineFly,10);
        // v = document.getElementById("hanumanJi");
        // x.src="img/surelyFinalHanumanJi.png";
        // z=setInterval(fly2,10);
        j.src = "img/hanumanJiFinale.png";
        j.style.marginTop= q+'px';
        q=q+19;
        if(q >= -100){
        clearInterval(c);
          l=   setInterval(medicine,10);
          
    }
    }
    function medicine(){
        med = document.getElementById("medicine");
        med.style.marginTop=fl+'px';
        fl = fl -15;
        if(fl<=-150){
            clearInterval(l);
            har=setInterval(fly4,100);
            bg = document.getElementById("morningBG");
            bg.src ="img/night.jpg";
        }
     }
    function fly4(){
        med.style.marginTop = hAndMed+'px';
        j.style.marginTop = hAndMed+'px';
        // bg.src ="img/night.jpg";
        hAndMed = hAndMed -15;
        if(hAndMed<=-450){
            clearInterval(har);
            back = setInterval(backWithMed,10);
        }
    }
    function backWithMed(){
        med.style.marginLeft = secondLastMed+'px';
        j.style.marginLeft = secondLast+'px';
        // secondLastMed = 0;
        secondLastMed = secondLastMed - 10; 
        secondLast = secondLast - 10;
        if(secondLast <= 0){
            clearInterval(back);
        }
        if(secondLastMed <= -850){
            clearInterval(back);
            lastAnimation = setInterval(relief,10);
        }
    }

    function relief(){
        // j.src = "img/doneHanumanJI.png";
        // med.sytyle.visibility = "hidden";
        // j.style.marginTop = lastDown+'px';
        // lastDown = lastDown - 10;
        // if(lastDown <= 0){
        //     clearInterval(lastAnimation);
        //  }
        med.remove();
        j.src = "img/doneHanumanJI.png";
        j.style.marginTop=lastDown+'px';
        lastDown = lastDown + 5 ;
         if(lastDown >= 0){
        clearInterval(lastAnimation);
        //   l=   setInterval(medicine,100);
          
    }
    } 
// function fly2(){
//         z = z+5;
//      j =document.getElementById("hanumanJi");
//      j.style.marginLeft = z+'px';
//      if(z>=800){
//          clearInterval(z);
//          j.src = "img/hanumanJiFinale.png";
//          c=setInterval(fly3,1);
//         }
//         function fly3(){
//             v = document.getElementById("hanumanJi");
//             b=b+5;
//             v.style.marginTop=b+'px';
            
            
//         }

//     }
// }
// function stop(){
//     clearInterval(y);
//     }
