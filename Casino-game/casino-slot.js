
let slot1 = document.getElementById('slot1');
let slot2 = document.getElementById('slot2');
let slot3 = document.getElementById('slot3');



let a=["Vishal","Rahul","Ankit","Ajay","ishan","Sachin","vicky"];

var slot1timer,slot3timer,slot2timer;
function start()
{
	slot1timer=setInterval(function(){
	let x=parseInt(Math.random() * a.length);
	slot1.innerText=a[x];
         },300);


    slot2timer=setInterval(function(){
	let x=parseInt(Math.random() * a.length);
	slot2.innerText=a[x];
    },300);


    slot3timer=setInterval(function(){
	let x=parseInt(Math.random() * a.length);
	slot3.innerText=a[x];
    },300);
}

let input=document.getElementById('Speed');
input.onchange=function(ev)
{
    let newspeed=ev.target.value;
    document.documentElement.style.setProperty('--speed', newspeed);
}
buttonplay.onclick=function(){
	slot1.style.animationPlayState="running";
    slot2.style.animationPlayState="running";
    slot3.style.animationPlayState="running";
    start();
}
buttonpause.onclick=function(){
	slot1.style.animationPlayState="paused";
    slot2.style.animationPlayState="paused";
    slot3.style.animationPlayState="paused";
    clearInterval(slot1timer);
    clearInterval(slot2timer);
    clearInterval(slot3timer);
    let winner1=document.getElementById('winner1');
    let winner2=document.getElementById('winner2');
    let winner3=document.getElementById('winner3');
    winner1.innerText=slot1.innerText;
    winner2.innerText=slot2.innerText;
    winner3.innerText=slot3.innerText;
    setTimeout(function()
    {
       location.reload();
    },5000);
    
     
}
