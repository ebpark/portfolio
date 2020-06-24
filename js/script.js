$(document).ready(function() {

// projects

	// projects text hover
	$(".project-link").mouseenter(function() {
		$(".project-link").not(this).css("opacity", 0.1);
	});

	$(".project-link").mouseleave(function() {
		$(".project-link").not(this).css("opacity", 1.0);
		$(".project-image").css("background", "white");
	});

	// projects background image swaps
	$(".project-link:nth-child(1)").mouseenter(function() {
		$(".project-image").css("background", "url(images/vanish/vanish-bg.jpg) no-repeat center center / 50%");
	});

	$(".project-link:nth-child(2)").mouseenter(function() {
		$(".project-image").css("background", "url(images/untitled/untitled-bg.jpg) no-repeat center center / 28.4%");
	});

	$(".project-link:nth-child(3)").mouseenter(function() {
		$(".project-image").css("background", "url(images/1186/1186-bg.jpg) no-repeat center center / 50.4%");
	});

	$(".project-link:nth-child(4)").mouseenter(function() {
		$(".project-image").css("background", "url(images/noon/noon-bg.jpg) no-repeat center center / 45.6%");
	});

	$(".project-link:nth-child(5)").mouseenter(function() {
		$(".project-image").css("background", "url(images/c4c/c4c-bg.jpg) no-repeat center center / 50%");
	});

	$(".project-link:nth-child(6)").mouseenter(function() {
		$(".project-image").css("background", "url(images/resilience/resilience-bg.jpg) no-repeat center center / 53%");
	});

});