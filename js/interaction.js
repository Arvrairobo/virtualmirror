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

	$(".menu-hair-button").click(function(){
		$("#menu-section").hide();
		$("#hair-section").show();
	});



	// Virtual Hair Face Record screen
	var record = 0;
	$("#hair-section .hair-container").click(function(){
		$hair_container = $(this);
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

			$("#hair-section .menu-title").text("Congratulations");

			record++;
			return false;
		}

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

		$("#stylists-section .stylists-pick-button").click(function(){
			$("#stylists-section .stylists-submit").show();
		});

		$("#stylists-section .submit-button").click(function(){
			$("#stylists-section .submit-wrapper").hide();
			$("#stylists-section .congratulations-wrapper").show();
		});

		$("#stylists-section .congratulations-button").click(function(){
			$("#stylists-section .stylists-submit").hide();
			$("#stylists-section .submit-wrapper").show();
			$("#stylists-section .congratulations-wrapper").hide();
		});




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
