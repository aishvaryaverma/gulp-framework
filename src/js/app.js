var app = {
    common: function() {
        var scrollTop = $(window).scrollTop();
        if(scrollTop > 0) {
            $('#mainHeader').addClass('mainHeader--sticky');
        } else {
            $('#mainHeader').removeClass('mainHeader--sticky');
        }
        
        // Scroll Event
        $(window).scroll(function() {
            var scrollTop = $(window).scrollTop();
            if(scrollTop > 0) {
                $('#mainHeader').addClass('mainHeader--sticky');
            } else {
                $('#mainHeader').removeClass('mainHeader--sticky');
            }
        });

        // Sidemenu
        $('#showMenu').click(function(e) {
			e.preventDefault();
            $(this).toggleClass('active');
            $('#mainMenu').slideToggle();
            $(this).find('img').attr('src', function(index, attr) {
				var newAttr = attr.split('/');
				var curImg = newAttr[newAttr.length - 1].split('.')[0];
				var path = newAttr.slice(0, newAttr.length - 1).join('/');

				if(curImg == 'menu') {
					// $(this).closest('.primaryMenu').find('#toggleMenu').slideDown(400);
					return path + '/close.svg'
				} else {
					// $(this).closest('.primaryMenu').find('#toggleMenu').slideUp(300);
					return path + '/menu.svg'
				}
			});
        });

        // Mobile dropdown toggle
		$('.dropdown-handle').click(function() {
			var siblings = $(this).parents('li').siblings();
			siblings.find('.dropdown-custom').slideUp();
			siblings.find('.dropdown-handle').removeClass('active');
			$(this).parents('li').find('.dropdown-custom').slideToggle();
            $(this).parent().toggleClass('active');
		});
    },

    homePage: function () {
        $('#locationSlider').slick({
            infinite: false,
            arrows: false,
            dots: true,
            speed: 500,
            autoplay: true,
            slidesToShow: 2.5,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplaySpeed: 2000,
            responsive: [
                {
                    breakpoint: 1025,
                    settings: {
                        slidesToShow: 1.5
                    }
                },
                {
                    breakpoint: 992,
                    settings: {
                        slidesToShow: 3
                    }
                },
                {
                    breakpoint: 601,
                    settings: {
                        slidesToShow: 2
                    }
                }
            ]
        });

        $('#testimonialSlider').slick({
            infinite: false,
            arrows: true,
            dots: false,
            speed: 500,
            autoplay: true,
            slidesToShow: 1,
            slidesToScroll: 1,
            cssEase: 'linear',
            autoplaySpeed: 2000,
            responsive: [
                // {
                //     breakpoint: 993,
                //     settings: {
                //         slidesToShow: 3
                //     }
                // },
                // {
                //     breakpoint: 768,
                //     settings: {
                //         slidesToShow: 2
                //     }
                // },
                // {
                //     breakpoint: 481,
                //     settings: {
                //         slidesToShow: 1
                //     }
                // }
            ]
        });
    },

    init: function () {
        this.common();
        this.homePage();
    }
};

$(document).ready(function() {
    app.init();
});