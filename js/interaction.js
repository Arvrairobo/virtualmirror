$(document).ready(function() {

	var $menu = $("aside"),
			$wrapper = $("#wrapper");

	function open_link(destination) {
		$("section:visible").hide();
		$("#" + destination).show();
		close_menu();
	}

	function open_menu() {
		if(!$menu.hasClass("open")) {
			$menu.animate({
				left: "+=321px"
			}, 500).addClass("open");
			$wrapper.animate({
				left: "+=321px"
			}, 500);
		}
	}

	function close_menu() {
		if($menu.hasClass("open")) {
			$menu.animate({
				left: "-=321px"
			}, 500).removeClass("open");
			$wrapper.animate({
				left: "-=321px"
			}, 500);
		}
	}

	function toggle_menu() { if($menu.hasClass("open")) { close_menu(); } else { open_menu(); } }

	$(".menu-link").click(function() { open_link($(this).attr("rel")); });
	$(".top-button").click(function() { toggle_menu(); });


	// Virtual Hair Face Record screen
	var $hair_container = $("#hair-section .hair-container"),
			record = 0;

	$hair_container.click(function() {
		if(!record){
			$hair_container
				.find(".hair-face")
					.css('opacity','1')
					.end()
				.find(".text-1")
					.hide()
					.end()
				.find(".holding")
					.hide()
					.end()
				.find(".text-2")
					.show()
					.end()
				.find(".hair-outline")
					.hide()
					.end()
				.find(".hair-outline-left")
					.show()
					.end()
				.find(".hair-line-left")
					.hide()
					.end()
				.find(".hair-line-right")
					.hide()
					.end()
				.find(".hair-arrow-left")
					.show()
					.end()
				.find(".hair-hold-icon")
					.css("opacity", ".3")
					.end();

			record++;
			return false;
		}

		if(record==1) {
			$hair_container
				.find(".text-2")
					.hide()
					.end()
				.find(".text-3")
					.show()
					.end()
				.find(".hair-outline-left")
					.hide()
					.end()
				.find(".hair-outline-right")
					.show()
					.end()
				.find(".hair-arrow-left")
					.hide()
					.end()
				.find(".hair-arrow-right")
					.show()
					.end();

			record++;
			return false;
		}

		if(record==2) {
			$hair_container
				.find(".text-3")
					.hide()
					.end()
				.find(".text-4")
					.show()
					.end()
				.find(".hair-outline-right")
					.hide()
					.end()
				.find(".hair-arrow-right")
					.hide()
					.end()
				.find(".hair-hold-icon")
					.hide()
					.end();

			$("#hair-section .top-title").text("Congratulations");

			record++;
			return false;
		}

		if(record==3) {
			$hair_container
				.find(".hair-recording-instructions")
					.hide()
					.end()
				.find(".hair-virtual")
					.show()
					.end();

			$("#hair-section .top-title").text("Trending Hair");

			record++;
			return false;
		}
	});



	// Hair Stylists Filter screen
	$("#stylists-section .top-filter-button").click(function() {
			$(this).hide().next().show();
			$("#stylists-section .stylists-filter").show();
	});

	$("#stylists-section .top-search-button").click(function() {
			$(this).hide().prev().show();
			$("#stylists-section .stylists-filter").hide();
			$("#stylists-section .stylists-stylist:first-child").show().siblings().hide();
	});



	// Hair Stylists screen
	$("#stylists-section .stylists-thumb-next").click(function() {
		var $work_wrapper = $(this).parent().prev(".stylists-work-wrapper");
		$(this).fadeOut().next().fadeIn();

		$work_wrapper
			.animate({
				left: "-160px"
			}, 200);

		return false;
	});

	$("#stylists-section .stylists-thumb-prev").click(function() {
		var $work_wrapper = $(this).parent().prev(".stylists-work-wrapper");
		$(this).fadeOut().prev().fadeIn();

		$work_wrapper
			.animate({
				left: "0px"
			}, 200);

		return false;
	});

	$("#stylists-section .stylists-work").click(function() {
		$("#stylists-section .stylists-lightbox").show();
		return false;
	});

	$("#stylists-section .stylists-stylist").click(function() {
		var $stylist = $(this);

		if($stylist.hasClass("open")) {
			$stylist
				.removeClass("open")
				.animate({
					height: "198px"
				}, 400);

			$("#stylists-section .stylists-pick").hide();
		} else {
			$stylist
				.addClass("open")
				.animate({
					height: "470px"
				}, 400)
				.siblings(".open")
				.removeClass("open")
				.animate({
					height: "198px"
				}, 400);

			$("#stylists-section .stylists-pick").show();
		}

		$("#stylists-section .stylists-pick-button").click(function() {
			$("#stylists-section .stylists-submit").show();
		});

		$("#stylists-section .submit-button").click(function() {
			$("#stylists-section .submit-wrapper").hide();
			$("#stylists-section .congratulations-wrapper").show();
		});

		$("#stylists-section .congratulations-button").click(function() {
			$("#stylists-section .stylists-submit").hide();
			$("#stylists-section .submit-wrapper").show();
			$("#stylists-section .congratulations-wrapper").hide();
		});
	});




	// Hair Stylists Lightbox
	var $image_wrapper = $(".stylists-lightbox-wrapper"),
		$prev = $("#stylists-section .stylists-lightbox-controls .prev"),
		$next = $("#stylists-section .stylists-lightbox-controls .next");

	$next.click(function() {
		$next.hide();
		$prev.show();

		$image_wrapper
			.animate({
				left: "-=640px"
			}, 400);
	});

	$prev.click(function() {
		$prev.hide();
		$next.show();

		$image_wrapper
			.animate({
				left: "100px"
			}, 400);
	});

	$("#stylists-section .stylists-large").click(function() {
		$("#stylists-section .stylists-lightbox").hide();
		$prev.hide();
		$next.show();

		$image_wrapper
			.css({
				left: "100px"
			});
	});
});
