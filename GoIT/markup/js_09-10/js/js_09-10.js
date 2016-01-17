function checked(el) {
  var id = $(el).attr('id');
  $('#prompt').html(id + ': checked');
};
function unChecked(el) {
  var id = $(el).attr('id');
  $('#prompt').html(id + ': unchecked');
};


$(document).ready(function(){
	$('.mySelectBoxClass').customSelect();

	$(function(){
		$('select.styled').customSelect();
	});

  $(function () {
 
      // Initialize checkboxes

      $('#chkbox1').flatcheckbox({
        label: "chkbox1 Label",
        onChecked: function (el) {
          checked(el);
        },
        onUnChecked: function (el) {
          unChecked(el);
        }
      });
      $('#chkbox2').flatcheckbox({
        label: "chkbox2 Label",
        onChecked: function (el) {
          checked(el);
        },
        onUnChecked: function (el) {
          unChecked(el);
        }
      });
      $('#chkbox3').flatcheckbox({
        label: "chkbox3 Label",
        onChecked: function (el) {
          checked(el);
        },
        onUnChecked: function (el) {
          unChecked(el);
        }
      });
  });

 
  $("#dropDownMenu li").hover(
    function(){
        $(this).children('ul').hide();
        $(this).children('ul').slideDown('fast');
    },
    function () {
        $('ul', this).slideUp('fast');            
  });
});




