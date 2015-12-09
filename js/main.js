jQuery(document).ready(function($) {
	// LOADER
	setTimeout(function(){
		$('#loader').addClass('MariaLuisa');
		$('.progressBar').addClass('crystal');

		setTimeout(function(){
			$('#loader').addClass('crystal');
			$('#headNav').removeClass('crystal');
			setTimeout(function(){
				$('#loader').remove();

				$('#currentWrapper').removeClass('crystal');
			},600);
		},600);
	},800);
	

	// Trigger for animations: 0 = Off, 1 = On
	var triggerHome = 0;
	var triggerBio = 1;
	var triggerGal = 1;

	var triggerMob;
	var windowWidth = $(window).width();
	if (windowWidth < 768){
		triggerMob = 1;
		triggerHome = 1;
	} else {
		triggerMob = 0;
		triggerHome = 0;
	}

	$(window).mousemove(function() {
		if (windowWidth != $(window).width() ) {
			windowWidth = $(window).width();
			if (windowWidth < 768){
				triggerMob = 1;
			} else {
				triggerMob = 0;
			}

			console.log('New window width: '+ windowWidth);
			console.log('Trigger mob: '+ triggerMob);
		};
	});

	// MOBILE MENU
		$('#burguerIcon').click(function() {
			$('#menuWrapper').toggleClass('showMenuHome');
			$('.burguerLines').toggleClass('activeMenu');

			$('.menuOptions').toggleClass('mobCrystal');
			$('#contactoMenu').toggleClass('mobCrystal');
			$('.menuOptions').toggleClass('mobHidden');
			$('#contactoMenu').toggleClass('mobHidden');
			$('#rrss').toggleClass('mobHidden');
			$('.mobLogo').toggleClass('notMobLogo');

			// CHANGE RRSS COLOUR
			$('#rrss').toggleClass('crystal');

			$('#sn-ico').removeAttr('src');
			$('#ig-ico').removeAttr('src');
			$('#fb-ico').removeAttr('src');
			$('#tw-ico').removeAttr('src');
			$('#yt-ico').removeAttr('src');

			$('#sn-ico').attr('src', 'img/rrss/sn-br.svg');
			$('#ig-ico').attr('src', 'img/rrss/ig-br.svg');
			$('#fb-ico').attr('src', 'img/rrss/fb-br.svg');
			$('#tw-ico').attr('src', 'img/rrss/tw-br.svg');
			$('#yt-ico').attr('src', 'img/rrss/yt-br.svg');
		});
	// END MOBILE MENU

	// NAVIGATION INTERACTION
		function goHome(){
			if(triggerHome == 1){
				if (windowWidth < 768) {
					triggerHome = 1;
				} else{
					triggerHome = 0;
				};
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

					$('#homeWrapper').removeClass('eraseBG');
					$('#img1').removeClass('crystal');
					$('#logoHome').removeClass('crystal');
				},300);

				
				setTimeout(function(){

					
					$('#currentWrapper').removeClass('eraseBG');
					
					
					$('#biografiaWrapper').removeClass('eraseBG');
					$('#biografiaCurtain').removeClass('eraseBG');
				},1900);

				// CHANGING COLOR
				$('.menuOnWhite').addClass('menuOnBlack');
				$('.menuOnBlack').removeClass('menuOnWhite');
				$('#textContacto').addClass('contactoOnBlack');
				$('#textContacto').removeClass('contactoOnWhite');
				$('#homeMenu').find('.menuOnBlack').addClass('activeHomeMob');
				$('#biografiaMenu').find('.menuOnBlack').removeClass('activeBio');
				$('#galeriaMenu').find('.menuOnBlack').removeClass('activeGal');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,0.4)');

				// CHANGE RRSS COLOUR
				$('#sn-ico').removeAttr('src');
				$('#ig-ico').removeAttr('src');
				$('#fb-ico').removeAttr('src');
				$('#tw-ico').removeAttr('src');
				$('#yt-ico').removeAttr('src');

				$('#sn-ico').attr('src', 'img/rrss/sn.svg');
				$('#ig-ico').attr('src', 'img/rrss/ig.svg');
				$('#fb-ico').attr('src', 'img/rrss/fb.svg');
				$('#tw-ico').attr('src', 'img/rrss/tw.svg');
				$('#yt-ico').attr('src', 'img/rrss/yt.svg');

				// MOBILE INTERACTION
				$('#menuWrapper').removeClass('showMenuHome');
				$('.burguerLines').removeClass('activeMenu');
				$('.burguerLines').removeClass('burguerLinesOnWhite');

				$('.menuOptions').addClass('mobCrystal');
				$('#contactoMenu').addClass('mobCrystal');
				$('.menuOptions').addClass('mobHidden');
				$('#contactoMenu').addClass('mobHidden');
				$('#rrss').addClass('mobHidden');
				$('.mobLogo').addClass('notMobLogo');
				$('.mobLogo').removeClass('stayMobLogo');

				$('#rrss').addClass('crystal');
			}
		}

		$('#homeMenu').click(function() {
			goHome();
		});
		$('#bioLogo').click(function() {
			goHome();
		});
		$('#mobLogoImg').click(function() {
			goHome();
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

					$('#logoHome').addClass('crystal');
					$('#currentWrapper').addClass('eraseBG');
					$('#homeWrapper').addClass('eraseBG');
					$('#img1').addClass('crystal');
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
				$('#homeMenu').find('.menuOnWhite').removeClass('activeHomeMob');
				$('#biografiaMenu').find('.menuOnWhite').addClass('activeBio');
				$('#galeriaMenu').find('.menuOnWhite').removeClass('activeGal');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,0.4)');
				$('.contactoOnWhite').css('color', 'rgba(179,179,179,1)');
				


				// CHANGE RRSS COLOUR
				$('#sn-ico').removeAttr('src');
				$('#ig-ico').removeAttr('src');
				$('#fb-ico').removeAttr('src');
				$('#tw-ico').removeAttr('src');
				$('#yt-ico').removeAttr('src');

				$('#sn-ico').attr('src', 'img/rrss/sn-br.svg');
				$('#ig-ico').attr('src', 'img/rrss/ig-br.svg');
				$('#fb-ico').attr('src', 'img/rrss/fb-br.svg');
				$('#tw-ico').attr('src', 'img/rrss/tw-br.svg');
				$('#yt-ico').attr('src', 'img/rrss/yt-br.svg');

				// MOBILE INTERACTION
				$('#menuWrapper').toggleClass('showMenuHome');
				$('.burguerLines').toggleClass('activeMenu');
				$('.burguerLines').addClass('burguerLinesOnWhite');

				$('.menuOptions').toggleClass('mobCrystal');
				$('#contactoMenu').toggleClass('mobCrystal');
				$('.menuOptions').toggleClass('mobHidden');
				$('#contactoMenu').toggleClass('mobHidden');
				$('#rrss').toggleClass('mobHidden');

				$('.mobLogo').toggleClass('notMobLogo');
				$('.mobLogo').addClass('stayMobLogo');

				
				$('#rrss').toggleClass('crystal');
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
				$('#homeMenu').find('.menuOnWhite').removeClass('activeHomeMob');
				$('#galeriaMenu').find('.menuOnWhite').addClass('activeGal');
				$('#biografiaMenu').find('.menuOnWhite').removeClass('activeBio');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,0.4)');


				// CHANGE RRSS COLOUR
				$('#sn-ico').removeAttr('src');
				$('#ig-ico').removeAttr('src');
				$('#fb-ico').removeAttr('src');
				$('#tw-ico').removeAttr('src');
				$('#yt-ico').removeAttr('src');


				$('#sn-ico').attr('src', 'img/rrss/sn-br.svg');
				$('#ig-ico').attr('src', 'img/rrss/ig-br.svg');
				$('#fb-ico').attr('src', 'img/rrss/fb-br.svg');
				$('#tw-ico').attr('src', 'img/rrss/tw-br.svg');
				$('#yt-ico').attr('src', 'img/rrss/yt-br.svg');

				// MOBILE INTERACTION
				$('#menuWrapper').toggleClass('showMenuHome');
				$('.burguerLines').toggleClass('activeMenu');
				$('.burguerLines').removeClass('burguerLinesOnWhite');

				$('.menuOptions').toggleClass('mobCrystal');
				$('#contactoMenu').toggleClass('mobCrystal');
				$('.menuOptions').toggleClass('mobHidden');
				$('#contactoMenu').toggleClass('mobHidden');
				$('#rrss').toggleClass('mobHidden');
				$('.mobLogo').toggleClass('notMobLogo');
				$('.mobLogo').removeClass('stayMobLogo');

				
				$('#rrss').toggleClass('crystal');
			}
		});




		$('#contactoMenu').mouseenter(function() {
			if(triggerMob == 0){
				$('#rrss').removeClass('crystal');
				$('#contactoMenu').css('bottom', '0px');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,1)');
				$('.contactoOnWhite').css('color', 'rgba(248,185,134,1)');
			}
		});

		$('#contactoMenu').mouseleave(function() {
			if(triggerMob == 0){
				$('#rrss').addClass('crystal');
				$('#contactoMenu').css('bottom', '-30px');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,0.4)');
				$('.contactoOnWhite').css('color', 'rgba(179,179,179,1)');
			}
		});
	// END NAVIGATION INTERACTION

	// YOUTUBE VIDEO
	$('#playVideo').click(function() {
		$('#fullWrapper').append('<div id="ytFrame" class="easeInOut crystal"> <div id="closeYtFrame" class="easeInOut"> <div class="closeLines"></div> <div class="closeLines"></div> </div> <iframe width="560" height="315" src="https://www.youtube.com/embed/DlFXVxH4Wq8?autoplay=1" frameborder="0" allowfullscreen></iframe> </div>');
		setTimeout(function(){
			$('#ytFrame').removeClass('crystal');
		});
		
		$('#closeYtFrame').click(function() {
			$('#ytFrame').addClass('crystal');
			setTimeout(function(){
				$('#ytFrame').remove();
			},600);
		});
	});

	
	// END YT VIDEO
});