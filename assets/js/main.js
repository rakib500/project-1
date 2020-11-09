$(document).ready(function(){
	    $(window).scroll(function(){
    $('header').toggleClass('nav-active', $(this).scrollTop() > 30);  
 });


    var $grid = $('.masonry-active').isotope({
	  itemSelector: '.masonry-item',
	  percentPosition: true,
	  masonry: {
	    // use outer width of grid-sizer for columnWidth
	    columnWidth:1
	  }
});

      // filter items on button click
$('.work-filter-menu').on( 'click', 'button', function() {
  var filterValue = $(this).attr('data-filter');
  $grid.isotope({ filter: filterValue });
});

// filter item activation
$('.work-filter-menu button').on('click', function(event) {
	$(this).siblings('.active').removeClass('active');
	$(this).addClass('active');
	event.preventDefault();
})

});
