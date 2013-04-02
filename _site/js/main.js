jQuery(function($){
	var $siteNav = $('#siteNav');
	$('#siteMenu').on('click', function(){
		$siteNav.toggleClass('hiddenNav');
		event.stopPropagation();
		$(document).one('click', function(){
			$siteNav.toggleClass('hiddenNav');
			event.stopPropagation();
		});
		return false;
	});
});
