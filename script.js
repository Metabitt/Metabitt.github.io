$(document).ready(function () {
  $(window).scroll(function () {
    if (this.scrollY > 20) {
      $('.navbar').addClass('sticky');
    } else {
      $('.navbar').removeClass('sticky');
    }
    if (this.scrollY > 500) {
      $('.scroll-up-btn').addClass('show');
    } else {
      $('.scroll-up-btn').removeClass('show');
    }
  });

  //slide-up script
  $('.scroll-up-btn').click(function () {
    $('html').animate({ scrollTop: 0 });
  });

  // toggle menu/navbar script
  $('.menu-btn').click(function () {
    $('.navbar .menu').toggleClass('active');
    $('.menu-btn i').toggleClass('active');
  });

  //typing animation script
  var typed = new Typed('.typing', {
    strings: ['Portfolio', 'Portafolio', 'CV', 'Curriculum Vitae'],
    typeSpeed: 100,
    backSpeed: 60,
    loop: true,
  });
  var typed = new Typed('.typing-2', {
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

  //prevents the submit button from being pressed more than once
  var submitButton = document.getElementById('submit_form');
  var form = document.getElementById('email_form');
  form.addEventListener('submit', function (e) {
    setTimeout(function () {
      submitButton.value = 'Sending...';
      submitButton.disabled = true;
    }, 100);
  });
});
