let wrap = document.querySelector('.wrapper')
let btnGreen = document.querySelector('.btn-green')
let btnYellow = document.querySelector('.btn-yellow')
let btnRed = document.querySelector('.btn-red')
let btnReset = document.querySelector('.btn-reset')
let color = 0

wrap.style.cssText=`
width: 150px;
height: 150px;
background-color: black;
margin-left: auto;
margin-right: auto;
`
btnGreen.style.cssText=`
font-size: 5px;
background-color: green;
cursor: pointer;
margin-top: 160px;
border: none;
`

btnYellow.style.cssText=`font-size: 5px; background-color: yellow; cursor: pointer; border: none`
btnRed.style.cssText=`font-size: 5px; background-color: red; cursor: pointer; border: none`
btnReset.style.cssText=`font-size: 5px; cursor: pointer border: none`

btnGreen.addEventListener('click', () => {
    console.log('Green');
    setTimeout(() => {
        color = btnGreen.style.cssText='background-color: green; cursor: pointer; border: none; margin-top: 160px; font-size: 5px';
        wrap.style.backgroundColor = 'Green';
        btnGreen.innerHTML = 'Green';
        btnYellow.style.cssText='background-color: yellow; cursor: pointer; border: none; font-size: 5px';
        btnYellow.innerHTML = 'Yellow';
        btnRed.style.cssText='background-color: red; cursor: pointer; border: none; font-size: 5px';
        btnRed.innerHTML = 'Red'
        console.log('Paint it green');
    },1000);

btnReset.addEventListener('click', ()=>{
    clearTimeout(btnGreen);
    color = btnGreen.style.cssText='background-color: green; cursor: pointer; border: none; margin-top: 160px; font-size: 5px';
    wrap.style.backgroundColor = 'black';
    btnGreen.innerHTML = 'Green';
})
});

btnYellow.addEventListener('click', () => {
    console.log('yellow');
    setTimeout(() => {
        color = btnYellow.style.cssText='background-color: yellow; cursor: pointer; border: none; margin-top: 160px; font-size: 5px';
        wrap.style.backgroundColor = 'yellow';
        btnYellow.innerHTML = 'Yellow';
        btnGreen.style.cssText='background-color: green; cursor: pointer; border: none; font-size: 5px';
        btnGreen.innerHTML = 'Green';
        btnRed.style.cssText='background-color: red; cursor: pointer; border: none; font-size: 5px';
        btnRed.innerHTML = 'Red'
        console.log('Paint it yellow');
    },1000);

btnReset.addEventListener('click', ()=>{
    clearTimeout(btnYellow);
    color = btnYellow.style.cssText='background-color: yellow; cursor: pointer; border: none; margin-top: 160px; font-size: 5px';
    wrap.style.backgroundColor = 'black';
    btnYellow.innerHTML = 'yellow';
})
});

btnRed.addEventListener('click', ()=>{
    console.log('Red');
setTimeout(()=>{
    color = btnRed.style.cssText='background-color: red; cursor: pointer; border: none; margin-top: 160px; font-size: 5px';
    wrap.style.backgroundColor = 'red';
    btnRed.innerHTML = 'Red';
    btnYellow.style.cssText='background-color: yellow; cursor: pointer; border: none; font-size: 5px';
    btnYellow.innerHTML = 'Yellow';
    btnGreen.style.cssText='background-color: green; cursor: pointer; border: none; font-size: 5px';
    btnGreen.innerHTML = 'Green'
    console.log('Paint it red');
},1000);

btnReset.addEventListener('click', ()=>{
    color = btnRed.style.cssText='background-color: red; cursor: pointer; border: none; margin-top: 160px; font-size: 5px';
    wrap.style.backgroundColor = 'black';
    btnRed.innerHTML = 'Red';
})
});
