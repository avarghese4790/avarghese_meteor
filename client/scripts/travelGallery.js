Template.travelGallery.onRendered(function(){
	$(function() {
  		$(document).scrollTop(0); 
	    setTimeout(function(){
	      $('#tg-loader').addClass('hide');
	      $('#tg-content').removeClass('hide');
	    }, 1000);

	    setTimeout(function(){
	      $('#tg-intro-popup').removeClass('hide');
	    }, 1000);
	});

  	$('#tg-intro-close-btn').click(function(){
  		$('#tg-intro-popup').addClass('hide');
  	});

  	$('#tg-flip-cards-btn').click(function(){
  		$('.tg-card').toggleClass("tg-front").toggleClass("tg-back");
  		$('.tg-flip-container').toggleClass("tg-flip");
  	});	
	
	$('#tg-menu-btn').click(function(){
		toggleNav();
		clearFiltersAndSearch();
		$('#tg-menu-icon').toggleClass('fa-bars').toggleClass('fa-times');
	});

	$('#tg-filter-btn').click(function(){
		if(!$('#tg-nav').hasClass('tg-nav-open')){
			toggleNav();
			$('#tg-menu-icon').toggleClass('fa-bars').toggleClass('fa-times');
		}
		$('#tg-filter-icon').toggleClass('fa-filter').toggleClass('fa-search');
		$('#tg-text-search,#tg-filter-search').toggleClass('tg-fade');
		clearFiltersAndSearch();
	});
	
	function clearFiltersAndSearch(){
		$('#tg-loc-search-term').val('').keyup();
		$('#tg-select-tag').val('').trigger('change');
	}
	function toggleNav() {
		$('#tg-nav').toggleClass('tg-nav-open');
		$('#tg-menu-btn, #tg-flip-cards-btn, #tg-filter-btn').toggleClass('tg-nav-open-btns');
	}
});