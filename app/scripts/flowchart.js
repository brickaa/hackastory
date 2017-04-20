/* global pym */

(function() {
  'use strict';

  var pymChild;

  function render() {

    $('#start').show();
    // Add your JS here!

    $('.option').click(function() {
      var question = $(this).closest('article');
      var next = $(this).attr('data-link');

      $(this).addClass('selected');
      $(question).find('.option').css('pointer-events', 'none').addClass('disable');
      $('#' + next).show();

      pymChild.sendHeight();

    });

    $('#reset').click(function() {
      $('.flow-question').hide();
      $('.option').removeClass('selected disable').css('pointer-events', 'auto');

      $('#start').show();
    });

    // if (pymChild) {
    //   pymChild.sendHeight();
    // }
  }

  function load() {
    pymChild = new pym.Child({
      renderCallback: render
    });
  }

  window.onload = load;
})();
