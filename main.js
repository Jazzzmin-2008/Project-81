canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");               

var color_1 = ("#0026e3");
var color_2 = ("#000000");
var color_3 = ("#d40000");
var color_4 = ("#fccc0d");
var color_5 = ("#118a08");

ctx.beginPath();
ctx.strokeStyle = color_1;
ctx.linewidth=10;
ctx.arc(200, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color_2;
ctx.linewidth=10;
ctx.arc(260, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color_3;
ctx.linewidth=10;
ctx.arc(320, 200, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color_4;
ctx.linewidth=10;
ctx.arc(230, 250, 40, 0, 2*Math.PI);
ctx.stroke();

ctx.beginPath();
ctx.strokeStyle = color_5;
ctx.linewidth=10;
ctx.arc(295, 250, 40, 0, 2*Math.PI);
ctx.stroke();