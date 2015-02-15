$(document).ready(function(){

	// 	Main screen
	$(".main-login").click(function(){
		$("#main-section").hide();
		$("#menu-section").show();
	});


	// Menu screen
	$("#menu-section .menu-stylists-button").click(function(){
		$("#menu-section").hide();
		$("#stylists-section").show();
	});


	// Hair Stylists Filter screen
	$("#stylists-section .menu-filter-button").click(function(){
			$(this).hide().next().show();
			$("#stylists-section .stylists-filter").show();
	});

	$("#stylists-section .menu-search-button").click(function(){
			$(this).hide().prev().show();
			$("#stylists-section .stylists-filter").hide();
			$("#stylists-section .stylists-stylist:first-child").show().siblings().hide();
	});



	// Hair Stylists screen
	$("#stylists-section .stylists-thumb-next").click(function(){
		var $work_wrapper = $(this).parent().prev(".stylists-work-wrapper");
		$(this).fadeOut().next().fadeIn();

		$work_wrapper
			.animate({
				left: "-160px"
			}, 200);

		return false;
	});

	$("#stylists-section .stylists-thumb-prev").click(function(){
		var $work_wrapper = $(this).parent().prev(".stylists-work-wrapper");
		$(this).fadeOut().prev().fadeIn();

		$work_wrapper
			.animate({
				left: "0px"
			}, 200);

		return false;
	});

	$("#stylists-section .stylists-work").click(function(){
		$("#stylists-section .stylists-lightbox").show();
		return false;
	});

	$("#stylists-section .stylists-stylist").click(function(){
		var $stylist = $(this);

		if($stylist.hasClass("open")) {
			$stylist
				.removeClass("open")
				.animate({
					height: "195px"
				}, 400);

			$("#stylists-section .stylists-pick-button").hide();
		} else {
			$stylist
				.addClass("open")
				.animate({
					height: "480px"
				}, 400)
				.siblings(".open")
				.removeClass("open")
				.animate({
					height: "195px"
				}, 400);

			$("#stylists-section .stylists-pick-button").show();
		}

	});


	$("#stylists-section .menu-button").click(function(){
		if($("aside").hasClass("open")) {
			$("aside").animate({
				left: "-=321px"
			}, 500).removeClass("open");
			$("section:visible").animate({
				left: "-=321px"
			}, 500);
		} else {
			$("aside").animate({
				left: "+=321px"
			}, 500).addClass("open");
			$("section:visible").animate({
				left: "+=321px"
			}, 500);
		}
	});



	// Hair Stylists Lightbox
	$("#stylists-section .stylists-lightbox-controls .next").click(function(){
		var $image_wrapper = $(this).parent().prev(".stylists-lightbox-wrapper");
		$(this).hide().prev().show();

		$image_wrapper
			.animate({
				left: "-=640px"
			}, 400);
	});

	$("#stylists-section .stylists-lightbox-controls .prev").click(function(){
		var $image_wrapper = $(this).parent().prev(".stylists-lightbox-wrapper");
		$(this).hide().next().show();

		$image_wrapper
			.animate({
				left: "100px"
			}, 400);
	});

	$("#stylists-section .stylists-lightbox .cancel").click(function(){
		$("#stylists-section .stylists-lightbox").hide();
		$("#stylists-section .stylists-lightbox-controls .next").show().prev().hide();

		var $image_wrapper = $(this).parent().prev(".stylists-lightbox-wrapper");
		$image_wrapper
			.animate({
				left: "100px"
			}, 400);
	});


});
