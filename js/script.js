let pencilColor = '#000000';
let pencilSize = 10;

const toolColor = document.querySelector('[data-pencil-color]');
const toolBgColor = document.querySelector('[data-bgcolor]');
const toolSize = document.querySelector('[data-size]');
const clearBtn = document.querySelector('[data-clear-btn]');
const saveBtn = document.querySelector('[data-save-btn]');


toolColor.addEventListener('change', () => pencilColor = toolColor.value);
toolSize.addEventListener('change', () => pencilSize = toolSize.value);
toolBgColor.addEventListener('change', () => background(toolBgColor.value));
clearBtn.addEventListener('click', () => clear());
saveBtn.addEventListener('click', () => save('myArt.jpg'));

function setup() {
    createCanvas(windowWidth, windowHeight);
    background(toolBgColor.value);
};

function draw() {
    if (mouseIsPressed) {
        strokeWeight(pencilSize);
        stroke(pencilColor);
        line(mouseX, mouseY, pmouseX, pmouseY);
    }
}

function windowResized() {
    resizeCanvas(windowWidth, windowHeight);
}
