window.addEventListener('load', function() {
  var canvas = document.getElementById('main-canvas')
  console.log("canvas", canvas)
  var context = canvas.getContext('2d')
  console.log(context)

  context.fillStyle = 'salmon'
  context.strokeStyle="orange";
  context.fillRect(10,10,50,50)

  context.beginPath()
  context.moveTo(100,100)
  context.lineTo(100,200)
  context.stroke()

  context.beginPath()
  context.moveTo(200,200)
  context.lineTo(200,290)
  context.lineTo(100,290)
  context.closePath()

  context.stroke()

  var drawCircle = function(x, y) {
    context.beginPath()
    context.arc(x, y, 50, 0, Math.PI*2, true)
    context.stroke()
  }

  canvas,addEventListener('click', function(event){
    // console.log('clicked', event)
    // console.log('location', event.x, event.y)
    drawCircle(event.x, event.y)
  })

  var img = document.createElement('img')
  img.src = 'billy.jpg'

  var drawCat = function() {
    context.drawImage(img, 200, 200, 90, 90)
  }

  img.addEventListener('load', drawCat)

  var changeColor = function() {
    context.strokeStyle = this.value
  }

  var colorPicker = document.querySelector('#input-color')
  colorPicker.addEventListener('change', changeColor)
})
