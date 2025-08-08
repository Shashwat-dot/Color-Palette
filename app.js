btn=document.querySelector("button");
btn.addEventListener("click",func);
function func(){
    let c=document.querySelector("#c");
    let r=random();
    c.innerText=r;
    let div=document.querySelector("#end");
    div.style.backgroundColor=r;
    let c1=document.querySelector("#c1");
    let r1=random();
    c1.innerText=r1;
    let div1=document.querySelector("#end1");
    div1.style.backgroundColor=r1;
    let c2=document.querySelector("#c2");
    let r2=random();
    c2.innerText=r2;
    let div2=document.querySelector("#end2");
    div2.style.backgroundColor=r2;
    let c3=document.querySelector("#c3");
    let r3=random();
    c3.innerText=r3;
    let div3=document.querySelector("#end3");
    div3.style.backgroundColor=r3;
    let c4=document.querySelector("#c4");
    let r4=random();
    c4.innerText=r4;
    let div4=document.querySelector("#end4");
    div4.style.backgroundColor=r4;
    document.querySelector("body").style.backgroundImage=`linear-gradient(to right,${r},${r1},${r2},${r3},${r4})`;
}
function random(){
    let red=Math.floor(Math.random()*255);
    let green=Math.floor(Math.random()*255);
    let blue=Math.floor(Math.random()*255);
    let color=`rgb(${red},${green},${blue})`;
    return color;
}