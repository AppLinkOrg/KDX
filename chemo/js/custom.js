( function($) {

		$(document).ready(function() {


			//Close Sharebox//

			$('.open-sharebox').click(function() {

				$('.sharebox-wrapper').fadeIn(200);

			});

			$('.close-sharebox').click(function() {

				$('.sharebox-wrapper').fadeOut(200);

			});

			$('.open-loginbox').click(function() {

				$('.loginbox-wrapper').fadeIn(200);

			});

			$('.close-loginbox').click(function() {

				$('.loginbox-wrapper').fadeOut(200);

			});

			//Checkboxes

			$('.checkbox-one').click(function() {

				$(this).toggleClass('checkbox-one-checked');

				return false;

			});

			$('.checkbox-two').click(function() {

				$(this).toggleClass('checkbox-two-checked');

				return false;

			});

			$('.checkbox-three').click(function() {

				$(this).toggleClass('checkbox-three-checked');

				return false;

			});

			$('.radio-one').click(function() {

				$(this).toggleClass('radio-one-checked');

				return false;

			});

			$('.radio-two').click(function() {

				$(this).toggleClass('radio-two-checked');

				return false;

			});

			//Notifications

			$('.tap-dismiss-notification').click(function() {

				$(this).slideUp(200);

				return false;

			});

			$('.close-big-notification').click(function() {

				$(this).parent().slideUp(200);

				return false;

			});

			$('.notification-top').addClass('show-notification-top');

			$('.hide-top-notification').click(function() {

				$('.notification-top').removeClass('show-notification-top');

			});

			//Tabs

			$('.tab-but-1').click(function() {

				$('.tab-but').removeClass('tab-active');

				$('.tab-but-1').addClass('tab-active');

				$('.tab-content').slideUp(200);

				$('.tab-content-1').slideDown(200);

				return false;

			});

			$('.tab-but-2').click(function() {

				$('.tab-but').removeClass('tab-active');

				$('.tab-but-2').addClass('tab-active');

				$('.tab-content').slideUp(200);

				$('.tab-content-2').slideDown(200);

				return false;

			});

			$('.tab-but-3').click(function() {

				$('.tab-but').removeClass('tab-active');

				$('.tab-but-3').addClass('tab-active');

				$('.tab-content').slideUp(200);

				$('.tab-content-3').slideDown(200);

				return false;

			});

			$('.tab-but-4').click(function() {

				$('.tab-but').removeClass('tab-active');

				$('.tab-but-4').addClass('tab-active');

				$('.tab-content').slideUp(200);

				$('.tab-content-4').slideDown(200);

				return false;

			});

			$('.tab-but-5').click(function() {

				$('.tab-but').removeClass('tab-active');

				$('.tab-but-5').addClass('tab-active');

				$('.tab-content').slideUp(200);

				$('.tab-content-5').slideDown(200);

				return false;

			});

			//Toggles

			$('.deploy-toggle-1').click(function() {

				$(this).parent().find('.toggle-content').slideToggle(200);

				$(this).toggleClass('toggle-1-active');

				return false;

			});

			$('.deploy-toggle-2').click(function() {

				$(this).parent().find('.toggle-content').slideToggle(200);

				$(this).toggleClass('toggle-2-active');

				return false;

			});

			$('.deploy-toggle-3').click(function() {

				$(this).parent().find('.toggle-content').slideToggle(200);

				$(this).find('em strong').toggleClass('toggle-3-active-ball');

				$(this).find('em').toggleClass('toggle-3-active-background');

				return false;

			});

			//Submenu Nav

			$('.submenu-nav-deploy').click(function() {

				$(this).toggleClass('submenu-nav-deploy-active');

				$(this).parent().find('.submenu-nav-items').slideToggle(200);

				return false;

			});

			//Sliding Door

			$('.sliding-door-top').click(function() {

				$(this).animate({

					left : '101%'

				}, 500, 'easeInOutExpo');

				return false;

			});

			$('.sliding-door-bottom a em').click(function() {

				$(this).parent().parent().parent().find('.sliding-door-top').animate({

					left : '0px'

				}, 500, 'easeOutBounce');

				return false

			});

			/////////////////////////////////////////////////////////////////////////////////////////////

			//Detect user agent for known mobile devices and show hide elements for each specific element

			/////////////////////////////////////////////////////////////////////////////////////////////

			var isiPhone = navigator.userAgent.toLowerCase().indexOf("iphone");

			var isiPad = navigator.userAgent.toLowerCase().indexOf("ipad");

			var isiPod = navigator.userAgent.toLowerCase().indexOf("ipod");

			var isiAndroid = navigator.userAgent.toLowerCase().indexOf("android");

			if(isiPhone > -1) {
				$('.ipod-detected').hide();
				$('.ipad-detected').hide();
				$('.iphone-detected').show();
				$('.android-detected').hide();
			}

			if(isiPad > -1) {
				$('.ipod-detected').hide();
				$('.ipad-detected').show();
				$('.iphone-detected').hide();
				$('.android-detected').hide();
			}

			if(isiPod > -1) {
				$('.ipod-detected').show();
				$('.ipad-detected').hide();
				$('.iphone-detected').hide();
				$('.android-detected').hide();
			}

			if(isiAndroid > -1) {
				$('.ipod-detected').hide();
				$('.ipad-detected').hide();
				$('.iphone-detected').hide();
				$('.android-detected').show();
			}

			//Detect if iOS WebApp Engaged and permit navigation without deploying Safari

			(function(a, b, c) {
				if( c in b && b[c]) {
					var d, e = a.location, f = /^(a|html)$/i;
					a.addEventListener("click", function(a) {
						d = a.target;
						while(!f.test(d.nodeName))
						d = d.parentNode;
						"href" in d && (d.href.indexOf("http") || ~d.href.indexOf(e.host)) && (a.preventDefault(), e.href = d.href)
					}, !1)
				}
			})(document, window.navigator, "standalone")

			

			$(".next-staff").click(function() {

				owlStaffControls.trigger('owl.next');

				return false;

			});

			$(".prev-staff").click(function() {

				owlStaffControls.trigger('owl.prev');

				return false;

			});

			

			$(".next-quote").click(function() {

				owlQuoteSlider.trigger('owl.next');

				return false;

			});

			$(".prev-quote").click(function() {

				owlQuoteSlider.trigger('owl.prev');

				return false;

			});

			/////////////////

			//Image Gallery//

			/////////////////


			var time = 50;
			// time in seconds

			//var $progressBar, $bar, $elem, isPause, tick, percentTime;
			var $progressBar, $bar, $elem, isPause, tick, percentTime;

			//Init the carousel

			$(".homepage-slider").owlCarousel({

				slideSpeed : 500,

				paginationSpeed : 500,

				singleItem : true,

				pagination : true,

				afterInit : progressBar,

				afterMove : moved,

				startDragging : pauseOnDragging

			});

			//Init progressBar where elem is $("#owl-demo")

			function progressBar(elem) {

				$elem = elem;

				//build progress bar elements

				buildProgressBar();

				//start counting

				start();

			}

			//create div#progressBar and div#bar then prepend to $("#owl-demo")

			function buildProgressBar() {

				$progressBar = $("<div>", {

					id : "progressBar"

				});

				$bar = $("<div>", {

					id : "bar",

				});

				$progressBar.append($bar).prependTo($elem);

			}

			function start() {
				
				$(".slider_dis").show();
				//reset timer

				percentTime = 0;

				isPause = false;

				//run interval every 0.01 second

				tick = setInterval(interval, 10);

			};

			function interval() {
				
				if(isPause === false) {

					percentTime += 1 / time;

					$bar.css({

						width : percentTime + "%"

					});

					//if percentTime is equal or greater than 100

					if(percentTime >= 100) {

						//slide to next item

						$elem.trigger('owl.next')

					}

				}

			}

			//pause while dragging

			function pauseOnDragging() {
				$(".slider_dis").show();
				isPause = true;

			}

			//moved callback

			function moved() {

				//clear interval

				clearTimeout(tick);

				//start again

				start();

			}

			// Custom Navigation Events

			$(".next-home").click(function() {

				$(".homepage-slider").trigger('owl.next');

				return false;

			});

			$(".prev-home").click(function() {

				$(".homepage-slider").trigger('owl.prev');

				return false;

			});

			var coverpage_height = 0;

			function initiate_coverpages() {
				$(".homepage-slider img").show();
				coverpage_height = $(window).height();

				$('.coverpage').css({
					height : coverpage_height + 1
				});

			};

			initiate_coverpages();

			$(window).resize(function() {

				initiate_coverpages();

			});

			$.scrollIt({

				//upKey: 38,             // key code to navigate to the next section

				//downKey: 40,           // key code to navigate to the previous section

				scrollTime : 700, // how long (in ms) the animation takes

				easing : 'easeInOutExpo', // the easing function for animation

				activeClass : 'active-coverpage', // class given to the active nav element

				//onPageChange: null,    // function(pageIndex) that is called when page is changed

				//topOffset: 0           // offste (in px) for fixed top navigation

			});

		});

	}(jQuery));