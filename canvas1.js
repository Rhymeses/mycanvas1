const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');
//console.log(ctx);
canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener('resize', function(){
	canvas.width = window.innerWidth;
	canvas.height = window.innerHeight;
	drawScreen()
});

function drawScreen(){
ctx.fillStyle = "#FFED9A";
ctx.fillRect(475, 75, 550, 550);

ctx.fillStyle = '#C0C0C0';
ctx.beginPath();
ctx.arc(750, 210, 60, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "#FFD700";
ctx.fillRect(700, 135, 100, 35);

ctx.fillStyle = "#FFD700";
ctx.fillRect(650, 160, 200, 50);

ctx.fillStyle = "#185184";
ctx.fillRect(675, 225, 150, 20);

ctx.fillStyle = '#185184';
ctx.beginPath();
ctx.arc(750, 400, 175, 0, Math.PI * 2);
ctx.fill();

ctx.fillStyle = "#185184";
ctx.fillRect(675, 555, 150, 20);

ctx.fillStyle = 'white';
ctx.strokeStyle = 'black';
ctx.lineWidth = 3;
ctx.beginPath();
ctx.arc(750, 400, 100, 0, Math.PI * 2);
ctx.fill();
ctx.stroke();

}

drawScreen();