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
				$('#newsFullWrapper').removeClass('crystal');
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
		$('#burgerIcon').click(function() {
			$('#menuWrapper').toggleClass('showMenuHome');
			$('.burgerLines').toggleClass('activeMenu');

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

		$('#newsBurgerIcon').click(function() {
			$('#newsNav').toggleClass('showNewsNav');
			$('.burgerLines').toggleClass('activeMenu');

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
				$('#videoContainer').removeClass('crystal');
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
				$('.burgerLines').removeClass('activeMenu');
				$('.burgerLines').removeClass('burgerLinesOnWhite');

				$('.menuOptions').addClass('mobCrystal');
				$('#contactoMenu').addClass('mobCrystal');
				$('.menuOptions').addClass('mobHidden');
				$('#contactoMenu').addClass('mobHidden');
				$('#rrss').addClass('mobHidden');
				$('.mobLogo').addClass('notMobLogo');
				$('.mobLogo').removeClass('stayMobLogo');

				$('#rrss').addClass('crystal');

				// HIDE SINGLE IMAGES
				$('#weLoveContainer').removeClass('hidden');
				$('#CAFContainer').removeClass('hidden');
				$('#bannerWeLove').removeClass('hidden');
				setTimeout(function(){
					$('#weLoveContainer').removeClass('crystal');
					$('#CAFContainer').removeClass('crystal');
					$('#bannerWeLove').removeClass('crystal');
				},200);
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
				
				$('#videoContainer').addClass('crystal');
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
				$('.burgerLines').toggleClass('activeMenu');
				$('.burgerLines').addClass('burgerLinesOnWhite');

				$('.menuOptions').toggleClass('mobCrystal');
				$('#contactoMenu').toggleClass('mobCrystal');
				$('.menuOptions').toggleClass('mobHidden');
				$('#contactoMenu').toggleClass('mobHidden');
				$('#rrss').toggleClass('mobHidden');

				$('.mobLogo').toggleClass('notMobLogo');
				$('.mobLogo').addClass('stayMobLogo');

				
				$('#rrss').toggleClass('crystal');

				// HIDE SINGLE IMAGES
				$('#weLoveContainer').addClass('crystal');
				$('#CAFContainer').addClass('crystal');
				$('#bannerWeLove').addClass('crystal');
				setTimeout(function(){
					$('#weLoveContainer').addClass('hidden');
					$('#CAFContainer').addClass('hidden');
					$('#bannerWeLove').addClass('hidden');
				},650);
			}
		});




		$('#galeriaMenu').click(function() {
			
			if(triggerGal == 1){
				triggerHome = 0;
				triggerBio = 0;
				triggerGal = 0;

				$('#videoContainer').addClass('crystal');
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
				$('.burgerLines').toggleClass('activeMenu');
				$('.burgerLines').removeClass('burgerLinesOnWhite');

				$('.menuOptions').toggleClass('mobCrystal');
				$('#contactoMenu').toggleClass('mobCrystal');
				$('.menuOptions').toggleClass('mobHidden');
				$('#contactoMenu').toggleClass('mobHidden');
				$('#rrss').toggleClass('mobHidden');
				$('.mobLogo').toggleClass('notMobLogo');
				$('.mobLogo').removeClass('stayMobLogo');

				
				$('#rrss').toggleClass('crystal');

				// HIDE SINGLE IMAGES
				$('#weLoveContainer').addClass('crystal');
				$('#CAFContainer').addClass('crystal');
				$('#bannerWeLove').addClass('crystal');
				setTimeout(function(){
					$('#weLoveContainer').addClass('hidden');
					$('#CAFContainer').addClass('hidden');
					$('#bannerWeLove').addClass('hidden');
				},650);
			}
		});




		$('#contactoMenu').mouseenter(function() {
			if(triggerMob == 0){
				$('#rrss').removeClass('crystal');
				$('#contactoMenu').css('bottom', '0px');

				$('.contactoOnBlack').css('color', 'rgba(255,255,255,1)');
				$('.contactoOnWhite').css('color', 'rgba(215,142,92,1)');
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
			$('#videoContainer').addClass('crystal');

			$('#fullWrapper').append('<div id="ytFrame" class="easeInOut"> <div id="closeYtFrame" class="easeInOut"> <div class="closeLines"></div> <div class="closeLines"></div> </div> <div class="progressBar easeInOut"></div> <iframe id="ytVp" class="easeInOut crystal" width="560" height="315" src="https://www.youtube.com/embed/DlFXVxH4Wq8?autoplay=1" frameborder="0" allowfullscreen></iframe> </div>');
			setTimeout(function(){
				$('#ytFrame').removeClass('crystal');
				setTimeout(function(){
					$('#ytVp').removeClass('crystal');
				},2500);
			},500);
			
			$('#closeYtFrame').click(function() {
				$('#videoContainer').removeClass('crystal');
				$('#ytFrame').addClass('crystal');
				$('#ytVp').addClass('crystal');
				setTimeout(function(){
					$('#ytFrame').remove();
				},600);
			});
		});
	// END YT VIDEO

	// MAIN BACKGROUND VIDEO SETUP WIDTH
		var min_w = 300; // minimum video width allowed
		var vid_w_orig;  // original video dimensions
		var vid_h_orig;

		jQuery(function() { // runs after DOM has loaded
		    
		    vid_w_orig = parseInt(jQuery('video').attr('width'));
		    vid_h_orig = parseInt(jQuery('video').attr('height'));
		    $('#debug').append("<p>DOM loaded</p>");
		    
		    jQuery(window).resize(function () { resizeToCover(); });
		    jQuery(window).trigger('resize');
		});

		function resizeToCover() {
		    
		    // set the video viewport to the window size
		    jQuery('#video-viewport').width(jQuery(window).width());
		    jQuery('#video-viewport').height(jQuery(window).height());

		    // use largest scale factor of horizontal/vertical
		    var scale_h = jQuery(window).width() / vid_w_orig;
		    var scale_v = jQuery(window).height() / vid_h_orig;
		    var scale = scale_h > scale_v ? scale_h : scale_v;

		    // don't allow scaled width < minimum video width
		    if (scale * vid_w_orig < min_w) {scale = min_w / vid_w_orig;};

		    // now scale the video
		    jQuery('video').width(scale * vid_w_orig);
		    jQuery('video').height(scale * vid_h_orig);
		    // and center it by scrolling the video viewport
		    jQuery('#video-viewport').scrollLeft((jQuery('video').width() - jQuery(window).width()) / 2);
		    jQuery('#video-viewport').scrollTop((jQuery('video').height() - jQuery(window).height()) / 2);
		};
	// END MAIN BACKGROUND VIDEO SETUP WIDTH
	
});