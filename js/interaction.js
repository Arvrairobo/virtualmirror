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
	
	// Hair Stylists screen
	$("#stylists-section .menu-filter-button").click(function(){
		if($("#stylists-section .stylists-filter").is(":visible")) {
			$("#stylists-section .stylists-filter").hide();	
		} else {
			$("#stylists-section .stylists-filter").show();	
		}	
	});
	
	$("#stylists-section .stylists-filter").click(function(){
		$("#stylists-section .stylists-filter").hide();
		$("#stylists-section .stylists-other").hide();
	});
	
	$("#stylists-section .stylists-thumb").click(function(){
		$("#stylists-section .stylists-lightbox").show();
	});
	
	$("#stylists-section .stylists-lightbox .cancel").click(function(){
		$("#stylists-section .stylists-lightbox").hide();
	});
	
	$("#stylists-section .stylists-info").click(function(){
		$(this).hide();
		$("#stylists-section .stylists-active").show();
		$("#stylists-section .stylists-pick-button").show();		
	});
	
	$("#stylists-section .stylists-active").click(function(){
		$(this).hide();
		$("#stylists-section .stylists-pick-button").hide();		
		$("#stylists-section .stylists-info").show();
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

	
});