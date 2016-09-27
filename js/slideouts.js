(function () {
  
  // declare slideouts as new variables
  var leftSlideout = new  Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('left-menu'),
    'padding': 256,
    'tolerance': 70
  });
  var rightSlideout = new  Slideout({
    'panel': document.getElementById('panel'),
    'menu': document.getElementById('right-menu'),
    'padding': 256,
    'tolerance': 70,
    'side': 'right'
  });


  var leftMenu = document.getElementById('left-menu');
  var rightMenu = document.getElementById('right-menu');

  document
    .querySelector('#toggle-left')
    .addEventListener('click', function() {
      leftSlideout.toggle();
      leftMenu.style.zIndex = '0';

      leftSlideout.on('close', function () {
        leftMenu.style.zIndex = '-1';
      });

  });

  document
    .querySelector('#toggle-right')
    .addEventListener('click', function() {
      rightSlideout.toggle();
      rightMenu.style.zIndex = '0';

      rightSlideout.on('close', function () {
        rightMenu.style.zIndex = '-1';
      });

  });

})();
