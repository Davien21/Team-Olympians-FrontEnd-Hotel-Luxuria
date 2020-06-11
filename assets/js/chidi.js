$(document).ready(function(){
	$(".dropper").click(function(){
		$(this).find('.drop').animate({
		  height: 'toggle',
		});
	});
	
});
