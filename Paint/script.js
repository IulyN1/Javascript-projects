const canvas = document.getElementById('canvas');
const ctx = canvas.getContext('2d');
const increaseBtn = document.getElementById("increase");
const decreaseBtn = document.getElementById("decrease");
const sizeEl = document.getElementById('size');
const colorEl = document.getElementById('color');
const clearBtn = document.getElementById('clear');

let size = 15;
let x = undefined;
let y = undefined;
let isPressed = false;
let color = 'black';

canvas.addEventListener('mousedown',(e)=>{
    isPressed = true;
    x = e.offsetX;
    y = e.offsetY;
});

canvas.addEventListener('mouseup',(e)=>{
    isPressed = false;
    x = undefined;
    y = undefined;
});

canvas.addEventListener('mousemove',(e)=>{
    if(isPressed){
        const x2 = e.offsetX;
        const y2 = e.offsetY;

        drawCircle(x2,y2);
        drawLine(x,y,x2,y2);
        x = x2;
        y = y2;
    }   
});

function drawCircle(x,y){
    let radius = 0;
    if(size >= 10){
        radius = size - 10;
    }
    ctx.beginPath();

    ctx.arc(x,y,size,0,Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

function drawLine(x1,y1,x2,y2){
    ctx.beginPath();
    ctx.moveTo(x1,y1);
    ctx.lineTo(x2,y2);
    ctx.strokeStyle = color;
    ctx.lineWidth = size*2;
    ctx.stroke();
}

colorEl.addEventListener('change',(e)=>{
    color = e.target.value;
});

increaseBtn.addEventListener('click',()=>{
    size += 5;
    if(size > 30){
        size = 30;
    }
    updateSize();
});

decreaseBtn.addEventListener('click',()=>{
    size -= 5;
    if(size < 5){
        size = 5;
    }
    updateSize();
});

function updateSize(){
    sizeEl.innerText = size;
}

clearBtn.addEventListener('click',()=>{
    ctx.clearRect(0,0,canvas.width, canvas.height);
});