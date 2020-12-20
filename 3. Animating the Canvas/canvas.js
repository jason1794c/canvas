const canvas = document.querySelector('canvas');

//Setting the canvas' size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Setting the 'context' variable
const c = canvas.getContext('2d');

// //Create a filled rectangle coordinates are (x, y, width, height)
// c.fillStyle = 'rgba(255, 0, 0, 0.5)'; //This will change the colour of the rectangles. 
// c.fillRect(100, 100, 100, 100);
// c.fillRect(200, 500, 200, 100);
// c.fillStyle = 'rgba(0, 255, 0, 0.5)';
// c.fillRect(300, 600, 100, 1000);
// c.fillStyle = 'rgba(0, 0, 255, 0.5)';
// c.fillRect(600, 200, 50, 100);

// // Creating a line
// c.beginPath(); // Tells canvas that we want to start a path
// c.moveTo(100, 800);
// c.lineTo(300, 100);
// c.lineTo(400, 300);
// c.strokeStyle = "blue"; //adding strokeStyle allows to style the lines before we call stroke
// c.stroke(); //stroke method called so we can see the line

// // // Arc or Circle
// // c.beginPath(); // Separating our circle from the lines from the previous codes
// // c.arc(600, 600, 70, 0, Math.PI * 2, false);
// // c.strokeStyle = 'orange';
// // c.stroke();

// // // Creating multiple circles using a FOR loop
// // for (let i = 0; i <= 5; i++) {
// //     //Setting random coordinates
// //     let x = Math.random()*window.innerWidth;
// //     let y = Math.random()*window.innerHeight;

// //     c.beginPath();
// //     c.arc(x, y, 40, 0, Math.PI*2, false);
// //     c.strokeStyle = 'green';
// //     c.stroke();
// // }

// // Randomly draw circles 100 times
// const drawCircles = (i) => {
//     setTimeout(() => {
//         console.log(i);
//         //Random x and y coordinates for the circles
//         let x = Math.random()*window.innerWidth;
//         let y = Math.random()*window.innerHeight;

//         //Set random RGBA colours
//         let r = Math.random()*255;
//         let g = Math.random()*255;
//         let b = Math.random()*255;

//         setTimeout(() => {
//             c.beginPath();
//             c.arc(x, y, 50, 0, Math.PI*2, false);
//             c.strokeStyle = `rgba(${r}, ${g}, ${b})`;
//             c.stroke();
//         }, 2000);
//     }, i*1000);
// };

// for (i = 0; i <= 100; i++) {
//     drawCircles(i);
// }

function Circle(x, y, dx, dy, radius, r, g, b) {
    this.x = x;
    this.y = y;
    this.dx = dx;
    this.dy = dy;
    this.radius = radius;
    this.r = r;
    this.g = g;
    this.b = b

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
    }
}

// Draw 100 circles
let circleArray = [];
for (let i = 0; i < 100; i++) {
    let radius = Math.random() * 100;
    let x = Math.random()*(innerWidth - radius * 2) + radius;
    let y = Math.random()*(innerHeight - radius * 2) + radius;
    let dx = (Math.random() - 0.5)*20; // x-velocity
    let dy = (Math.random() - 0.5)*20; // y-velocity

    let r = Math.random()*255;
    let g = Math.random()*255;
    let b = Math.random()*255;

    circleArray.push(new Circle(x, y, dx, dy, radius, r, g, b)) // Creating a new circle after very FOR loop
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

animate();