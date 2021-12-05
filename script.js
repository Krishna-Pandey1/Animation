var m = 0;
var h;
var z = 0;
var y;
var z;
var x;
var k = 0;
var q;
var j;
var v;
var l;
var b;
var fl = 0;
var med;
var hAndMed = -10;
var har;
var back;
var secondLast = 0;
var secondLastMed = 0;
var bgChanged;
var lastAnimation;
var lastDown;

function start() {
    y = setInterval(fly, 10);
}
function fly() {
    m = m - 15;
    x = document.getElementById("hanumanJi");
    x.style.marginTop = m + 'px';
    if (m <= -450) {
        clearInterval(y);
        z = setInterval(fly2, 40);
        q = m;
        lastDown = m;
    }
}
function fly2() {
    j = document.getElementById("hanumanJi");
    j.src = "img/surelyFinalHanumanJi.png";
    j.style.marginLeft = k + 'px';
    k = k + 10;
    if (k >= 850) {
        clearInterval(z);
        c = setInterval(fly3, 10);
        secondLast = k;
    }
}
function fly3() {

    j.src = "img/hanumanJiFinale.png";
    j.style.marginTop = q + 'px';
    q = q + 19;
    if (q >= -100) {
        clearInterval(c);
        l = setInterval(medicine, 10);
    }
}
function medicine() {
    med = document.getElementById("medicine");
    med.style.marginTop = fl + 'px';
    fl = fl - 15;
    if (fl <= -150) {
        clearInterval(l);
        har = setInterval(fly4, 100);
        bg = document.getElementById("morningBG");
        bg.src = "img/night.jpg";
    }
}
function fly4() {
    med.style.marginTop = hAndMed + 'px';
    j.style.marginTop = hAndMed + 'px';
    hAndMed = hAndMed - 15;
    if (hAndMed <= -450) {
        clearInterval(har);
        back = setInterval(backWithMed, 10);
    }
}
function backWithMed() {
    med.style.marginLeft = secondLastMed + 'px';
    j.style.marginLeft = secondLast + 'px';
    secondLastMed = secondLastMed - 10;
    secondLast = secondLast - 10;
    if (secondLast <= 0) {
        clearInterval(back);
    }
    if (secondLastMed <= -850) {
        clearInterval(back);
        lastAnimation = setInterval(relief, 10);
    }
}
function relief() {
    med.remove();
    j.src = "img/doneHanumanJI.png";
    j.style.marginTop = lastDown + 'px';
    lastDown = lastDown + 5;
    if (lastDown >= 0) {
        clearInterval(lastAnimation);
    }
}
