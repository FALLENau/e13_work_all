

window.addEventListener('load', function() {
  var canvas = document.querySelector('#etch')
  var context = canvas.getContext('2d')


  context.strokeStyle="orange";
  var currentX = 50
  var currentY = 50

  keyPress = function(key) {

    var usedKey = key.charCode
    context.beginPath()

    if(usedKey === 119 && currentY > 10) {
      context.arc(currentX, currentY--, 1, 0, Math.PI*2, true);
      context.stroke();
    } else if (usedKey === 115 && currentY < 490) {
      context.arc(currentX, currentY++, 1, 0, Math.PI*2, true);
      context.stroke();
    }else if (usedKey === 97 && currentX > 10) {
      context.arc(currentX--, currentY, 1, 0, Math.PI*2, true);
      context.stroke();
    }else if (usedKey === 100 && currentX < 490) {
      context.arc(currentX++, currentY, 1, 0, Math.PI*2, true);
      context.stroke();
    }
  }

  window.addEventListener('keypress', keyPress);
});
