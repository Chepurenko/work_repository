;(function($){
	"use strict";

//-----------window scroll--------------

	$('#nav').on('click', (function(e){
	    e.preventDefault();
	     var id = e.target.getAttribute('href');
	      $('html, body').animate({scrollTop:$(id).position().top}, 1000);
		})
	);
    $('#Arrow').on('click', (function(e){
        e.preventDefault();
         var id = e.target.getAttribute('href');
          $('html, body').animate({scrollTop:$(id).position().top}, 1000);
        })
    );
})(jQuery);

