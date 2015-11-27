jQuery(document).ready(function($) {
	// Trigger for animations: 0 = Off, 1 = On
	var triggerHome = 0;
	var triggerBio = 1;
	var triggerGal = 1;

	// NAVIGATION INTERACTION
		$('#homeMenu').click(function() {

			if(triggerHome == 1){
				triggerHome = 0;
				triggerBio = 0;
				triggerGal = 0;
				$('#galeriaContainer').addClass('crystal');
				$('#biografiaContainer').addClass('crystal');

				$('#biografiaCurtain').removeClass('showSection');
				$('#galeriaCurtain').removeClass('showSection');

				setTimeout(function(){
					triggerBio = 1;
					triggerGal = 1;
					$('#biografiaWrapper').removeClass('showSection');
					$('#galeriaWrapper').removeClass('showSection');
				},300);

				// CHANGING COLOR
				$('.menuOnWhite').addClass('menuOnBlack');
				$('.menuOnBlack').removeClass('menuOnWhite');
				$('#textContacto').addClass('contactoOnBlack');
				$('#textContacto').removeClass('contactoOnWhite');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,0.4)');
			}
		});




		$('#biografiaMenu').click(function() {
			if(triggerBio == 1){
				triggerHome = 0;
				triggerGal = 0;
				triggerBio = 0;
				
				$('#galeriaContainer').addClass('crystal');

				$('#biografiaWrapper').addClass('showSection');
				$('#galeriaCurtain').removeClass('showSection');

				setTimeout(function(){
					$('#biografiaCurtain').addClass('showSection');
					$('#galeriaWrapper').removeClass('showSection');
				},100);

				setTimeout(function(){
					triggerGal = 1;
					triggerHome = 1;
					$('#biografiaContainer').removeClass('crystal');

					$('#logoHome').addClass('hidden');
					$('#currentWrapper').addClass('eraseBG');
					$('#homeWrapper').addClass('eraseBG');
					$('#img1').addClass('eraseBG');
					$('#biografiaWrapper').addClass('eraseBG');

					setTimeout(function(){
						$('#biografiaCurtain').addClass('eraseBG');

						setTimeout(function(){
							$('.bioLetters').removeClass('crystal');
						},600);

					},600);
				},1900);

				// CHANGING COLOR
				$('.menuOnBlack').addClass('menuOnWhite');
				$('#textContacto').addClass('contactoOnWhite');
				$('.menuOnWhite').removeClass('menuOnBlack');
				$('#textContacto').removeClass('contactoOnBlack');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,0.4)');
				$('.contactoOnWhite').css('color', 'rgba(179,179,179,1)');
				

				
			}
		});




		$('#galeriaMenu').click(function() {
			
			if(triggerGal == 1){
				triggerHome = 0;
				triggerBio = 0;
				triggerGal = 0;
				$('#biografiaContainer').addClass('crystal');

				$('#galeriaWrapper').addClass('showSection');
				$('#biografiaCurtain').removeClass('showSection');

				setTimeout(function(){
					$('#galeriaCurtain').addClass('showSection');
					$('#biografiaWrapper').removeClass('showSection');
				},100);

				setTimeout(function(){
					triggerBio = 1;
					triggerHome = 1;
					$('#galeriaContainer').removeClass('crystal');
					
				},1900);

				// CHANGING COLOR
				$('.menuOnBlack').addClass('menuOnWhite');
				$('.menuOnWhite').removeClass('menuOnBlack');
				$('#textContacto').removeClass('contactoOnBlack');
				$('#textContacto').addClass('contactoOnWhite');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,0.4)');

				
			}
		});




		$('#contactoMenu').mouseenter(function() {
			$('#rrss').removeClass('crystal');
			$('#contactoMenu').css('bottom', '0px');

			$('.contactoOnBlack').css('color', 'rgba(255,255,255,1)');
			$('.contactoOnWhite').css('color', 'rgba(248,185,134,1)');
		});

		$('#contactoMenu').mouseleave(function() {
			$('#rrss').addClass('crystal');
			$('#contactoMenu').css('bottom', '-30px');

			$('.contactoOnBlack').css('color', 'rgba(255,255,255,0.4)');
			$('.contactoOnWhite').css('color', 'rgba(179,179,179,1)');
		});
	// END NAVIGATION INTERACTION
});