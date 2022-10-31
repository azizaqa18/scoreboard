var btn1 = document.getElementById("home-score-btn-1");
var btn2 = document.getElementById("home-score-btn-2");
var btn3 = document.getElementById("home-score-btn-3");

homeScore = 0;

btn1.addEventListener('click', function(){
    homeScore++;
    document.getElementById("home-score").innerHTML = homeScore;
});

btn2.addEventListener('click', function(){
    homeScore += +2;
    document.getElementById("home-score").innerHTML = homeScore;
});

btn3.addEventListener('click', function(){
    homeScore += +3;
    document.getElementById("home-score").innerHTML = homeScore;
});

var btn_1 = document.getElementById("guest-score-btn-1");
var btn_2 = document.getElementById("guest-score-btn-2");
var btn_3 = document.getElementById("guest-score-btn-3");

guestScore = 0;

btn_1.addEventListener('click', function(){
    guestScore++;
    document.getElementById("guest-score").innerHTML = guestScore;
});

btn_2.addEventListener('click', function(){
    guestScore += +2;
    document.getElementById("guest-score").innerHTML = guestScore;
});

btn_3.addEventListener('click', function(){
    guestScore += +3;
    document.getElementById("guest-score").innerHTML = guestScore;
});

var resetAll = document.getElementById("reset");

resetAll.addEventListener('click', function(){
    guestScore = 0;
    document.getElementById("guest-score").innerHTML = guestScore;
    homeScore = 0;
    document.getElementById("home-score").innerHTML = homeScore;
});
