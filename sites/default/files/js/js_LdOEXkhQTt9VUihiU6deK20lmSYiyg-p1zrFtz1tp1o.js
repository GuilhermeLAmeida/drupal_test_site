/**
 * @file
 * JavaScript file for helpfulness module.
 */

(function ($) {

  $(document).ready(function () {
    var selected = $("input[type='radio'][name='helpfulness_rating']:checked");
    if (selected.length > 0) {
      $('.form-item-helpfulness-comments').css('display', 'block');
      $('.helpfulness_submit_button').css('display', 'block');
      if (selected.val() === '1') {
        $('.helpfulness_no_title').css('display', 'none');
        $('.helpfulness_yes_title').css('display', 'block');
        $('.helpfulness_no_description').css('display', 'none');
        $('.helpfulness_yes_description').css('display', 'block');
      }
      else {
        $('.helpfulness_yes_title').css('display', 'none');
        $('.helpfulness_no_title').css('display', 'block');
        $('.helpfulness_yes_description').css('display', 'none');
        $('.helpfulness_no_description').css('display', 'block');
      }
    }

    $('input:radio[name=helpfulness_rating]').change(function () {
      var value = $(this).val();
      $('.form-item-helpfulness-comments').show();
      $('.helpfulness_submit_button').show();
      if (value === '1') {
        $('.helpfulness_no_title').hide();
        $('.helpfulness_no_description').hide();
        $('.helpfulness_yes_title').show();
        $('.helpfulness_yes_description').show();
      }
      else {
        $('.helpfulness_yes_title').hide();
        $('.helpfulness_yes_description').hide();
        $('.helpfulness_no_title').show();
        $('.helpfulness_no_description').show();
      }
    });
  });
})(jQuery);
;
