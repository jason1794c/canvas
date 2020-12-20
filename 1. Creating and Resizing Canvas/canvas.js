const canvas = document.querySelector('canvas');

//Setting the canvas' size
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

//Setting the 'context' variable
const c = canvas.getContext('2d');

//Create a filled rectangle coordinates are (x, y, width, height)
c.fillRect(100, 100, 100, 100);
c.fillRect(200, 500, 200, 100);
c.fillRect(300, 600, 100, 1000);
c.fillRect(600, 200, 50, 100);

