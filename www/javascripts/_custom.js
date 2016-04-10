// $(".more-info .secondary-button").on("click", function( e ) {
//   e.preventDefault();
//   $(".movie:first").fadeToggle("slow");
// });
//
// $(document).ready( function() {
//   $(".movie:nth-child(6n)").after("<hr class='large-12 columns'>");
// });


// $("#movie-type, #movie-genre, #new-releases").on("change", function(e) {
//   updateCatalogue();
// });
//
// function updateCatalogue () {
//   var type = $("#movie-type").val();
//   var genre = $("movie-genre").val();
//   var newrelease = $("new-releases").is(":checked");
//
//   if($(".movie").data("type") == type){
//     $(".movie").hide();
//     $(this).show();
//   };
//
// }

$("#movie-type, #movie-genre, #new-releases").on("change", function(e) {
	updateResults();
});

function updateResults() {
	type = $("#movie-type").val();
	genre = $("#movie-genre").val();
	newValue = $("#new-releases").is(':checked');
	$('.movie').each(function() {
		$(this).show();
		// Recorremos todas las películas y si su atributo data-gender no coincide con el que hemos puesto en el select, la oculta.
		if (type != 0 && $(this).data('type') != type) {
			$(this).hide();
		}
		// Recorremos todas las películas y si su atributo data-gender no coincide con el que hemos puesto en el select, la oculta.
		if (genre != 0 && $(this).data('genre') != genre) {
			$(this).hide();
		}
		// Recorremos todas las películas y si está marcado el checbox de novedades y su atributo data-new no es 1, la oculta.
		if (newValue && $(this).data('new') != "true") {
			$(this).hide();
		}

		if( $(.movie).is('':visible') == )
	});
}
