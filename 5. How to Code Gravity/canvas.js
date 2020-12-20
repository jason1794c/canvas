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

const maxRadius = 80;

window.addEventListener('mousemove', (event) => {
    mouse.x = event.x;
    mouse.y = event.y;
})

// Resizing browser event listener
window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
})

const friction = 0.90;
const gravity = 0.5;

function Circle(x, y, vx, vy, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.radius = radius;
    this.r = r;
    this.g = g;
    this.b = b;
    this.vy = vy;
    this.vx = vx;

    this.draw = () => {
        c.beginPath();
        c.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
        c.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b})`
        c.fill();
        c.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b})`;
        c.stroke();
    }
    

    this.update = () => {
        this.draw();

        // x-velocity conditional
        if (this.x + this.radius + this.vx > innerWidth || this.x - this.radius < 0) {
                this.vx = -this.vx * friction;   
        }

        // Gravity and bounce
        if (this.y + this.radius + this.vy > innerHeight) {
            this.vy = -this.vy * friction;
        } else {
            this.vy += gravity; // Adding gravity of 0.5
        }

        this.y += this.vy;
        this.x += this.vx;

        // Mouse interactivity
        if (mouse.x - this.x < 50 && mouse.x - this.x > -50 &&
            mouse.y - this.y < 50 && mouse.y - this.y > -50) {
                this.vy = -(Math.abs(this.vy + 10));
                this.vx = -(this.vx + 5);
            }
    }
}

let circleArray = [];

// Initialize the circles
const init = () => {
    for (let i = 0; i < 100; i++) {
        let radius = Math.random() * 30 + 5;
        let x = Math.random()*(innerWidth - radius * 2) + radius;
        let y = Math.random()*(innerHeight - radius * 2) + radius;
        let vy = Math.random() * 5;
        let vx = (Math.random() - 0.5) * 10;


        let r = Math.random()*255;
        let g = Math.random()*255;
        let b = Math.random()*255;

        circleArray.push(new Circle(x, y, vx, vy, radius, r, g, b)) // Creating a new circle after very FOR loop
    }
}

// Animating a circle

// Creating animation function
const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight); //Clears the canvas
    
    for (let i = 0; i < circleArray.length; i++) {
        circleArray[i].update();
    }
}

init();

animate();