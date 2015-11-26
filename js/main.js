jQuery(document).ready(function($) {
	// NAVIGATION INTERACTION
		$('#homeMenu').click(function() {
			$('#galeriaContainer').addClass('crystal');
			$('#biografiaContainer').addClass('crystal');

			$('#biografiaWrapper').removeClass('showSection');
			$('#galeriaWrapper').removeClass('showSection');
		});

		$('#biografiaMenu').click(function() {
			
			$('#galeriaContainer').addClass('crystal');

			$('#biografiaWrapper').addClass('showSection');
			$('#galeriaWrapper').removeClass('showSection');

			setTimeout(function(){
				$('#biografiaContainer').removeClass('crystal');
			},1800);
		});

		$('#galeriaMenu').click(function() {
			
			$('#biografiaContainer').addClass('crystal');

			$('#galeriaWrapper').addClass('showSection');
			$('#biografiaWrapper').removeClass('showSection');

			setTimeout(function(){
				$('#galeriaContainer').removeClass('crystal');
			},1800);
		});
	// END NAVIGATION INTERACTION
});