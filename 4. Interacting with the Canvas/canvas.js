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

function Circle(x, y, dx, dy, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.r = r;
    this.g = g;
    this.b = b
    this.minRadius = radius;

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
        if (this.x + this.radius > innerWidth || this.x - this.radius < 0) {
            this.dx = -this.dx;
        }
        
        // y-velocity conditional
        if (this.y + this.radius > innerHeight || this.y - this.radius < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;      

        // Mouse interactivity
        if (mouse.x - this.x < 100 && mouse.x - this.x > -100 &&
            mouse.y - this.y < 100 && mouse.y - this.y > -100) {
                if (this.radius < maxRadius) {
                    this.radius += 2;
                } 
        } else if (this.radius > this.minRadius){
            this.radius -= 1;
        }

    }
}

let circleArray = [];

// Initialize the circles
const init = () => {
    for (let i = 0; i < 800; i++) {
        let radius = Math.random() * 30 + 5;
        let x = Math.random()*(innerWidth - radius * 2) + radius;
        let y = Math.random()*(innerHeight - radius * 2) + radius;
        let dx = (Math.random() - 0.5)*10; // x-velocity
        let dy = (Math.random() - 0.5)*10; // y-velocity

        let r = Math.random()*255;
        let g = Math.random()*255;
        let b = Math.random()*255;

        circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b)) // Creating a new circle after very FOR loop
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