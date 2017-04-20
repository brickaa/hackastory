(function() {
  'use strict';

  function render() {

    $('#start').show();
    // Add your JS here!

    $('.option--record').click(function() {
      var $question = $(this).closest('article'),
          video = $question.find('video'),
          submit = $question.find('.option');

      video.get(0).play();
      submit.show();
    });

    $('.option').click(function() {
      var question = $(this).closest('article');
      var next = $(this).attr('data-link');

      $(this).addClass('selected');
      $(question).find('.option').css('pointer-events', 'none').addClass('disable');
      question.hide();
      $('#' + next).show();

    });

    $('#reset').click(function() {
      $('.flow-question').hide();
      $('.option').removeClass('selected disable').css('pointer-events', 'auto');

      $('#start').show();
    });

  }

  window.onload = render;
})();
