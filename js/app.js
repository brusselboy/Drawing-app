const canvas = document.getElementById('canvas');
const increaseBtn = document.querySelector('#increase');
const decreaseBtn = document.querySelector('#decrease');
const sizeEl = document.querySelector('#sizeInfo');
const colorEl = document.querySelector('#colorInp');
const clearBtn = document.querySelector('#clear');
const ctx = canvas.getContext('2d');

let size = 40;
let isPressed = false;
let color = 'black';

function info(siz) {
    sizeEl.innerText = siz;
}

function drawCircle(x, y) {
    ctx.beginPath();
    ctx.arc(x, y, size, 0, Math.PI * 2);
    ctx.fillStyle = color;
    ctx.fill();
}

increaseBtn.addEventListener('click', () => {
    size -= 5;

    if (size <= 0) {
        size = 5;
    }
    info(size);
})

decreaseBtn.addEventListener('click', () => {
    size += 5;

    if (size >= 80) {
        size = 80;
    }
    info(size);
})

colorEl.addEventListener('change', (e) => {
    color = e.target.value;
})

clearBtn.addEventListener('click', () => {
    ctx.clearRect(0, 0, canvas.width, canvas.height);
})

canvas.addEventListener('mousedown', (e) => {
    isPressed = true;
    const x = e.offsetX;
    const y = e.offsetY;

    drawCircle(x,y)
})

canvas.addEventListener('mouseup', () => {
    isPressed = false;
})

canvas.addEventListener('mousemove', (e) => {
    if (isPressed) {
        const x = e.offsetX;
        const y = e.offsetY;

        drawCircle(x,y)
    }
})