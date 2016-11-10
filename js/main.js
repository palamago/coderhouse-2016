$(document).ready(function(){
	var $container = $('.grid').isotope({
	  itemSelector: '.grid-item', // use a separate class for itemSelector, other than .col-
	  percentPosition: true,
	  masonry: {
	    columnWidth: '.grid-sizer'
	  }
	});

	$container.isotope({ filter: '*' });

    $('#filters').on( 'click', 'button', function() {
        var filterValue = $(this).attr('data-filter');
        $('#filters button').removeClass('btn-primary');
        $(this).addClass('btn-primary');
        $container.isotope({ filter: filterValue });
    });

});