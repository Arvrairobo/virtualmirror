$(document).ready(function() {

	var $menu = $("aside"),
			$wrapper = $("#wrapper"),
			$modal = $("#modal"),
			$hair_container = $("#hair-section .hair-container"),
			record = 0,
			zip = 0;


	// Menu
	$(".menu-link").click(function() {
		var rel = $(this).attr("rel");

		if(rel == "stylists-section") {
			if(zip === 0) {
				$("#stylists-section .sub-section.stylists").hide();
				$modal.find(".modal-box.zip").show().end().show();
			}

			$("#stylists-section .sub-section.stylists .stylists-stylist").show();
		}

		open_link(rel);

		// Slider Range
		$( ".slider-range" ).slider({
      range: true,
      min: 0,
      max: 500,
      values: [ 75, 300 ],
      slide: function( event, ui ) {
        $( ".stylists-filter-price .left" ).text( "$" + ui.values[ 0 ] );
        $( ".stylists-filter-price .right" ).text( "$" + ui.values[ 1 ] );
      }
    });
		$( ".stylists-filter-price .left" ).text( "$" + $( ".slider-range" ).slider( "values", 0 ));
		$( ".stylists-filter-price .right" ).text( "$" + $( ".slider-range" ).slider( "values", 1 ));
	});




	// Top bar
	$(".top-button").click(function() { toggle_menu(); });




	// Modal
	$(".modal-box a.ok").click(close_modal);
	$(".modal-box.zip a.ok").bind("click", function(){ $("#stylists-section .sub-section.stylists").show(); zip=1; });
	$(".modal-stylist a.ok").click(function() {
		zip=1;
		$(".menu-link[rel='stylists-section']").trigger("click");
		$("#stylists-section .top-search-button").trigger("click");
	});

	//diff
	$(".modal-box.share a.qok").click(function(){
		var title = "Congratulations",
				text = "Your new hairstyle has been shared on Facebook",
				$buttons = $("<a class='ok' href='#'><img src='img/OkIcon.png'></a>");

		$(".modal-box.share").hide();
		show_modal(title, text, $buttons);
	});


	function close_modal(){
		$modal.find(".modal-box:visible").hide().end().hide();
	}






	// My Favorites screen
	$(".favorites .menu-link").click(function() {
		$t = $(this);
		if($t.index() == 1) { $(".hair-styles-container a").eq(0).trigger("click"); }
		if($t.index() == 2) { $(".hair-styles-container a").eq(1).trigger("click"); }
		if($t.index() == 3) { $(".hair-styles-container a").eq(3).trigger("click"); }
		if($t.index() == 4) { $(".hair-styles-container a").eq(2).trigger("click"); $(".hair-styles-container a").trigger("click"); }
	});



	// Virtual Hair Face Record screen
	$hair_container.click(function() {
		var title, text, $buttons;

		console.log(record);
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
			title = "Nice Job";
			text = "You have finished your left face recording. Top OK to do next tracking.";
			$buttons = $("<a href='#'><img src='img/RefreshIcon.png'></a><a class='ok' href='#'><img src='img/OkIcon.png'></a>");
			show_modal(title, text, $buttons);
		}

		if(record==2) {
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

		if(record==3) {
			title = "Nice Job";
			text = "You have finished your right face recording. Top OK to preview your face.";
			$buttons = $("<a href='#'><img src='img/RefreshIcon.png'></a><a class='ok' href='#'><img src='img/OkIcon.png'></a>");
			show_modal(title, text, $buttons);
		}

		if(record==4) {
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

			$("#hair-section .top-title h1").text("Congratulations");

			record++;
			return false;
		}

		if(record==5) {
			$hair_container
				.find(".hair-gradient")
					.hide()
					.end()
				.find(".hair-recording-instructions")
					.hide()
					.end()
				.find(".hair-virtual")
					.show()
					.end();

			$("#hair-section .top-title h1").text("Trending Hair");
			$("#hair-section .top-button-2").show();

			record++;
			return false;
		}

		if(record==6) {
			$hair_container
				.find(".hair-virtual-instructions")
					.hide()
					.end();
			record++;
			return false;
		}

	});




	// Virtual Hair
	$(".hair-share a").click(function() { $modal.find(".share").show().end().show(); $(".hair-share").toggle(); });

	$("#hair-section .top-button-2").click(function() {
		$(".hair-share").toggle();
	});

	$(".hair-like-button").click(function() {
		if(!$(this).is(".on")) {
			var title = "Congratulations";
			var text = "Your new hairstyle has been saved to “My Favorites”";
			var $buttons = $("<a class='ok' href='#'><img src='img/OkIcon.png'></a>");
			show_modal(title, text, $buttons);
		}
	});

	$(".hair-stylists-button").click(function() {
		$modal
			.find(".base")
				.hide()
				.end()
			.find(".modal-stylist")
				.show()
				.end()
			.show();
	});

	$(".hair-styles-container a").click(function() {
		var index = $(this).index();
		$(".hair-virtual-hair div").eq(index).toggle().siblings(":visible").toggle();
	});

	$(".hair-color-container a").click(function() {
		$(".hair-virtual-hair div:visible").each(toggle_image);
	});




	// Hair Stylists Filter screen
	$("#stylists-section .top-filter-button").click(function() {
		$(this).hide().next().show();
		$("#stylists-section .stylists-filter").show();
	});

	$("#stylists-section .top-search-button").click(function() {
		$(this).hide().prev().show();
		$("#stylists-section .stylists-filter").hide();
		$("#stylists-section .stylists-stylist").eq(0).show().siblings().hide();
		$("#stylists-section .stylists-stylist").eq(0).trigger("click");
		return false;
	});



	// Hair Stylists screen
	$("#stylists-section .stylists-work").click(function() {
		$("#stylists-section .stylists-lightbox").show();
		return false;
	});

	$("#stylists-section .stylists-stylist").click(function() {
		var $stylist = $(this);
		select_stylist($stylist);
		return false;
	});

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




	// Hair Stylists Lightbox
	var $image_wrapper = $(".stylists-lightbox-wrapper"),
		$prev = $("#stylists-section .stylists-lightbox-controls .prev"),
		$next = $("#stylists-section .stylists-lightbox-controls .next");

	$("#stylists-section .stylists-large").click(function() {
		$("#stylists-section .stylists-lightbox").hide();
		$prev.hide();
		$next.show();

		$image_wrapper
			.css({
				left: "100px"
			});
	});

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



	// Global functions
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

	function toggle_image() { $(this).toggleClass("on").find("img").toggle(); }
	$(".toggle").click(function() { $(this).each(toggle_image).filter(".unique").siblings(".on").each(toggle_image); });



	function show_modal(title, text, buttons) {
		$modal
			.find(".base")
				.find(".modal-title")
					.text(title)
					.end()
				.find(".modal-text")
					.text(text)
					.end()
				.find(".modal-controls")
					.find("a")
						.remove()
						.end()
					.append(buttons)
					.end()
				.show()
				.end()
				.show();

		$(".modal-box.base .modal-controls a.ok").click(function() {
			record++;
			$hair_container.trigger("click");
		});

		$(".modal-box a.ok").click(close_modal);
	}

	function select_stylist($s) {
		if($s.hasClass("open")) {
			$s
				.removeClass("open")
				.animate({
					height: "198px"
				}, 400);

			$("#stylists-section .stylists-pick").hide();
			console.log("close");
		} else {
			console.log("asaaasasasasasas");
			$s
				.siblings(":visible")
				.filter(".open")
				.removeClass("open")
				.animate({
					height: "198px"
				}, 400);
			console.log("close siblings");

			$s
				.addClass("open")
				.animate({
					height: "440px"
				}, 400);
			console.log("open");

			$("#stylists-section .stylists-pick").show();
		}
		return false;
	}

});
