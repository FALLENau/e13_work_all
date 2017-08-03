window.addEventListener('load', function() {
  var canvas = document.getElementById('main-canvas')
  console.log("canvas", canvas)
  var context = canvas.getContext('2d')
  console.log(context)

  context.fillStyle = 'salmon'
  context.fillRect(10,10,50,50)

  context.beginPath()
  context.moveTo(100,100)
  context.lineTo(100,200)
  context.stroke()
  
})
