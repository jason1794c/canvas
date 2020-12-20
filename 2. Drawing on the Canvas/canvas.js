const canvas = document.querySelector('canvas');

//Setting the canvas' size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Setting the 'context' variable
const c = canvas.getContext('2d');

//Create a filled rectangle coordinates are (x, y, width, height)
c.fillStyle = 'rgba(255, 0, 0, 0.5)'; //This will change the colour of the rectangles. 
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 500, 200, 100);
c.fillStyle = 'rgba(0, 255, 0, 0.5)';
c.fillRect(300, 600, 100, 1000);
c.fillStyle = 'rgba(0, 0, 255, 0.5)';
c.fillRect(600, 200, 50, 100);

// Creating a line
c.beginPath(); // Tells canvas that we want to start a path
c.moveTo(100, 800);
c.lineTo(300, 100);
c.lineTo(400, 300);
c.strokeStyle = "blue"; //adding strokeStyle allows to style the lines before we call stroke
c.stroke(); //stroke method called so we can see the line

// // Arc or Circle
// c.beginPath(); // Separating our circle from the lines from the previous codes
// c.arc(600, 600, 70, 0, Math.PI * 2, false);
// c.strokeStyle = 'orange';
// c.stroke();

// // Creating multiple circles using a FOR loop
// for (let i = 0; i <= 5; i++) {
//     //Setting random coordinates
//     let x = Math.random()*window.innerWidth;
//     let y = Math.random()*window.innerHeight;

//     c.beginPath();
//     c.arc(x, y, 40, 0, Math.PI*2, false);
//     c.strokeStyle = 'green';
//     c.stroke();
// }

// Randomly draw circles 100 times
const drawCircles = (i) => {
    setTimeout(() => {
        console.log(i);
        //Random x and y coordinates for the circles
        let x = Math.random()*window.innerWidth;
        let y = Math.random()*window.innerHeight;

        //Set random RGBA colours
        let r = Math.random()*255;
        let g = Math.random()*255;
        let b = Math.random()*255;

        setTimeout(() => {
            c.beginPath();
            c.arc(x, y, 50, 0, Math.PI*2, false);
            c.strokeStyle = `rgba(${r}, ${g}, ${b})`;
            c.stroke();
        }, 2000);
    }, i*1000);
};

for (i = 0; i <= 100; i++) {
    drawCircles(i);
}