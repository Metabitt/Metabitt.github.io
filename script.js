$(document).ready(function () {
  const $navbar = $('.navbar');
  const $scrollBtn = $('.scroll-up-btn');
  const $menu = $('.navbar .menu');
  const $menuBtn = $('.menu-btn');
  const typed = new Typed('.typing', {
    strings: ['Portfolio', 'Portafolio', 'CV', 'Curriculum Vitae'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  const typed2 = new Typed('.typing-2', {
    strings: [
      'self-taught programmer',
      'problem solver',
      'Gadget-man',
      'human',
    ],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });

  let scrollTimeout;
  $(window).on('scroll', function() {
    clearTimeout(scrollTimeout);
    scrollTimeout = setTimeout(function() {
      if (this.scrollY > 20) {
        $navbar.addClass('sticky');
      } else {
        $navbar.removeClass('sticky');
      }
      if (this.scrollY > 500) {
        $scrollBtn.addClass('show');
      } else {
        $scrollBtn.removeClass('show');
      }
    }, 100); // debounce delay

  });

  $scrollBtn.click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  $menuBtn.click(function () {
    $menu.toggleClass('active');
    $menuBtn.find('i').toggleClass('active');
  });

});

