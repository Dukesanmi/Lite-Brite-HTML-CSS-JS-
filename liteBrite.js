function interact() {
  var colorClass=''
  $('.select-color').on('click', function() {
    var selectedColor= $(this).attr('class')
    switch(selectedColor) {
      case 'select-color cyan not-selected':
        colorClass= 'cyan'
        break;
      case 'select-color magenta not-selected':
        colorClass='magenta'
        break;
      case 'select-color yellow not-selected':
        colorClass= 'yellow'
    }
    $(this).removeClass('not-selected');
    $(this).siblings().addClass('not-selected');
  })
  $('.box').on('click', function() {
    $(this).toggleClass(colorClass)
  });
  $('.toggle-blink').on('click', function() {
    $('.toggle-blink').toggleClass('opacity')
    var startInterval=setInterval( function() {
      $('.box.cyan, .box.yellow, .box.magenta').toggleClass('blink')
    }, 400)
    //var stopInterval=clearInterval(startInterval);
  })