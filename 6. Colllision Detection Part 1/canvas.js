const canvas = document.querySelector('canvas');

//Setting the canvas' size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Setting the 'context' variable
const c = canvas.getContext('2d');

// Making mouse movement event
let mouse = {
    x: undefined,
    y: undefined
}

// Mouse event listener
window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
})

// Resizing browser event listener
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

// Get distance function
const getDistance = (x1, y1, x2, y2) => {
    let xDistance = x2 - x1;
    let yDistance = y2 - y1;

    // Returning distance value through Pythagorean theorem
    return Math.sqrt(Math.pow(xDistance, 2) + Math.pow(yDistance, 2));
}

function Circle(x, y, radius, color) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.color = color;


    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = this.color;
        c.fill();
        c.strokeStyle = 'black';
        c.stroke();
    }
    

    this.update = () => {
        this.draw();

    }
}

let circle1;
let circle2;
// Initialize the circles
const init = () => {
    circle1 = new Circle(300, 300, 100, 'blue');
    circle2 = new Circle(undefined, undefined, 30, 'red');
}

// Animating a circle

// Creating animation function
const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); //Clears the canvas

    circle1.update();
    circle2.x = mouse.x;
    circle2.y = mouse.y;
    circle2.update();

    if (getDistance(circle1.x, circle1.y, circle2.x, circle2.y) <= circle1.radius + circle2.radius) {
        circle1.color = 'yellow';
    } else {
        circle1.color = 'blue';
    }

}

init();

animate();

