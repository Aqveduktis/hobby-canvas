function myfunction() {
  var c = document.getElementById("myCanvas");
  var ctx = c.getContext("2d");
  ctx.beginPath();
  ctx.arc(95, 50, 40, 0, 2 * Math.PI);
  ctx.stroke();


  ctx.fillStyle = 'rgb(200, 0, 0)';
  ctx.fillRect(10, 100, 50, 50);

  ctx.fillStyle = 'rgba(0, 0, 200, 0.5)';
  ctx.fillRect(30, 130, 50, 50);
  ctx.beginPath()
  ctx.strokeRect(50, 335, 50, 50)

  // filled square X: 125, Y: 35, width/height 50
  ctx.beginPath()
  ctx.fillRect(125, 335, 50, 50)
}
myfunction();



