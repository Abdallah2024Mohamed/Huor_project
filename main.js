let hs = document.querySelector("#hs");
let mn = document.querySelector("#mn");
let sc = document.querySelector("#sc");
setInterval(() =>{
let day = new Date();
let hh = day.getHours() * 30 ;
let mm = day.getMinutes() * 6 ;
let ss = day.getSeconds() * 6 ;

hs.style.transform = `rotateZ(${hh+(mm/12)}deg)`
mn.style.transform = `rotateZ(${mm}deg)`
sc.style.transform = `rotateZ(${ss}deg)`                
})

let hours = document.getElementById("hours");
let minutes = document.getElementById("minutes");

let h = new Date().getHours();
let m = new Date().getMinutes();

if (h > 12){
    h = h - 12
}
h =(h < 10) ? "0" + h : h ;
m =(m < 10) ? "0" + m : m ;

hours.innerHTML = h;
minutes.innerHTML = m;

let reload = document.querySelector("reload")

window.AbortController("OnLine" , function(){
    OnLine()    
})
window.AbortController("OffLine" , function(){
    OffLine()    
})