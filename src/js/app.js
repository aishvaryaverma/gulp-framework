var dispatch = {
	loaderSelector: '.siteLoaderWrap',

	lockBody: function() {
		$('body').addClass('lockScroll');
		$('body').css({ 'paddingRight': getScrollBarWidth() });
	},

	unlockBody: function() {
		$('body').removeClass('lockScroll');
		$('body').css({ 'paddingRight': 0 });
    },
    
    stickyHeader: function() {
		var scrollTop = parseInt($(window).scrollTop());
		if (scrollTop !== 0) {
			$("#header").addClass("sticky");
			$('#backtoTop').show();
		}
		$(window).scroll(function () {
			var scrollTop = $(window).scrollTop();
			if (scrollTop !== 0) {
				$("#header").addClass("sticky");
				$('#backtoTop').show();
			} else {
				$("#header").removeClass("sticky");
				$('#backtoTop').hide();
			}
		});
		$('#backtoTop').click(function() {
			$('body, html').animate( {scrollTop : 0}, 600);
		});
    },

	mobileMenu: function() {
		$('.menuHandle').click(function(e) {
            e.preventDefault();
            $(this).find('img').attr('src', function(index, attr) {
                var newAttr = attr.split('/');
                var curImg = newAttr[newAttr.length - 1].split('.')[0];
                var path = newAttr.slice(0, newAttr.length - 1).join('/');
                if (curImg == 'menu-button') {
                    $(this).closest('.mainHeader__primaryMenu').find('#toggleMenu').slideDown(400);
                    return path + '/close_black.svg'
                } else {
                    $(this).closest('.mainHeader__primaryMenu').find('#toggleMenu').slideUp(300);
                    return path + '/menu-button.svg'
                }
            });
        });
		// Mobile menu dropdown toggle
		$('.dropdown-handle').click(function() {
			var siblings = $(this).parents('li').siblings();
			siblings.find('.dropdown').slideUp();
			siblings.find('.dropdown-handle').removeClass('active');
			$(this).parents('li').find('.dropdown').slideToggle();
			$(this).toggleClass('active');
		});
	},

	forcusEffect: function () {
		if (!String.prototype.trim) {
			(function () {
				var c = /^[\s\uFEFF\xA0]+|[\s\uFEFF\xA0]+$/g;
				String.prototype.trim = function () {
					return this.replace(c, "")
				}
			})()
		}
		
		[].slice.call(document.querySelectorAll(".input__field")).forEach(function (c) {
			if (c.value.trim() !== "") {
				c.parentNode.classList.add('input--filled');
			}
			c.addEventListener("focus", a);
			c.addEventListener("blur", b)
		});

		function a(e) {
			e.target.parentNode.classList.add('input--filled');
		}

		function b(e) {
			if (e.target.value.trim() === "") {
				e.target.parentNode.classList.remove('input--filled');
			}
		}
	},

	loadAnimation: function() {
		if($(".animated")) {
			$(".animated").appear(function () {
				var b = $(this);
				var c = b.data("animation");
				if (!b.hasClass("visible")) {
					var a = b.data("animation-delay");
					if (a) {
						setTimeout(function () {
							b.addClass(c + " visible")
						}, a)
					} else {
						b.addClass(c + " visible")
					}
				}
			})
		}
	},

	authPopups: function() {
        $('.handleChangePopup').click(function(e) {
			e.preventDefault();
			var curPopup = $(this).data('hide');
			var targetPopup = $(this).data('show');
			console.log(curPopup, targetPopup)
            $(curPopup).modal('hide');
            setTimeout(function() {
                $(targetPopup).modal('show')
            }, 400);
        });
	},
	
	init: function() {
		this.stickyHeader();
		this.mobileMenu();
		this.forcusEffect();
		this.loadAnimation();
        this.authPopups();
	}
};

$(document).ready(function () {
	dispatch.init();
});
