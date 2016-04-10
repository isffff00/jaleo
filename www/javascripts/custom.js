$(document).ready( function() {

	// hides the no-results message on load
	$('.no-results').hide();

	// giving proper format to the inputs
	$('input#cc-num').payment('formatCardNumber');
	$('input#cc-cvc').payment('formatCardCVC');

	// var highlightcard = function() {
	// 	var cardtype = $.payment.cardType($('input#cc-num').val());
	// 	$('input:radio[name=card-type]').filter('[value=' + cardtype + ']').prop('checked', true);
	// };
	//
	// $('input#cc-num').on('keypress', highlightcard()).on('change', highlightcard());

	$('input#cc-num').on('keypress', function() {
		var cardtype = $.payment.cardType($('input#cc-num').val());
		$('input:radio[value=' + cardtype + ']').prop('checked', true);
	});

	// check requiered fields and prompt sweetalert
	$('input#checkout').click(function (e) {
		e.preventDefault();
		if($('input#name').val() === "" || $('input#email').val() === "" || $('input#password').val() === "" || $('input#cc-num').val() === "" || $('input#cc-cvc').val() === "" ){
			swal("Oops!", "Revisa los campos obligatorios y vuelve a intentarlo", "error");
		}
		else {
			$('form').submit();
		}
	});
});

// triggers updateResults when value changes

$("#new-releases, #movie-genre, #movie-type").on("change", function(e) {
	updateResults();
});

// function to update the catalogue checking several conditions
function updateResults() {
	type = $("#movie-type").val();
	genre = $("#movie-genre").val();
	newValue = $("#new-releases").is(':checked');
	$('.movie').each(function() {
		$(this).show();
		if (type != 0 && $(this).data('type') != type) {
			$(this).hide();
		}
		if (genre != 0 && $(this).data('genre') != genre) {
			$(this).hide();
		}
		if (newValue && $(this).data('new') != 1) {
			$(this).hide();
		}
	});

	// if no movies match the criteria, shows no-results div
	if ($('.movie:visible').length == 0 ) {
		$('.no-results').show();
	}

}
