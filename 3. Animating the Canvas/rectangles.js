const canvas = document.querySelector('canvas');

// Setting the canvas' size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

// Setting the context variable
const c = canvas.getContext('2d');

function Rectangle (x, y, w, h, dx, dy, r, g, b) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
    this.dx = dx;
    this.dy = dy;
    this.r = r;
    this.g = g;
    this.b = b;

    this.draw = () => {
        c.beginPath();
        c.fillRect(this.x, this.y, this.w, this.h);
        c.fillStyle = `rgba(${this.r}, ${this.g}, ${this.b})`;
        c.strokeStyle = `rgba(${this.r}, ${this.g}, ${this.b})`;
        c.stroke();
    }

    this.update = () => {
        this.draw();

        // x-velocity conditional
        if (this.x + this.w > innerWidth || this.x - this.w < 0) {
            this.dx = -this.dx;
        }
        
        // y-velocity conditional
        if (this.y + this.h > innerHeight || this.y - this.h < 0) {
            this.dy = -this.dy;
        }
        
        this.x += this.dx;
        this.y += this.dy;      
    }
}

// Draw 100 rectangles
let rectanglesArray = [];

for (i = 0; i < 100; i++) {
    let w = Math.random()*100;
    let h = Math.random()*100;
    let x = Math.abs(Math.random()*innerWidth - w);
    let y = Math.abs(Math.random()*innerHeight - h);
    let dx = Math.random()*10;
    let dy = Math.random()*10;

    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;

    rectanglesArray.push(new Rectangle(x, y, w, h, dx, dy, r, g, b));
}

// Animating the rectangles
// Creating the animate function

const animate = () => {
    requestAnimationFrame(animate);
    c.clearRect(0, 0, innerWidth, innerHeight);

    for (let i = 0; i < rectanglesArray.length; i++) {
        rectanglesArray[i].update();
    }
}

animate();