// count 1 - 10
for (let t = 1; t < 11; t++) {
    console.log("The number is " + t);
}
// count 10 - 1
for (let t = 10; t > 0; t--) {
    console.log("The number is " + t);
}
// count 1 - 10 only odd numbers
for (let t = 1; t < 11; t = t + 2) {
    console.log("The number is " + t);
}

// get canvas element
let myCanvas = document.getElementById("soren");
// create canvas object
let ctx = myCanvas.getContext("2d");

//draw rect
ctx.fillStyle = "LightCoral"
ctx.fillRect(0, 0, 200, 100);

//draw lines
ctx.beginPath();
ctx.moveTo(0, 0);
ctx.lineTo(200, 100);
ctx.stroke()

ctx.beginPath
ctx.moveTo(200, 0);
ctx.lineTo(0, 100);
ctx.stroke()

for (let aki = 25; aki > 0; aki = aki - 5) {
    ctx.beginPath();
    ctx.arc(100, 50, aki, 0, 2 * Math.PI);
    ctx.strokeStyle = "Blue";
    ctx.stroke();
}
ctx.arc()