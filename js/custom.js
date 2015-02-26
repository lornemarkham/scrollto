(function( $ ){

   
$( "#plots li" ).on( "click", function() {
  

  var currentID = $(this).attr('data-uniqueID');
  var listItemPosition = $('#' + currentID).position();
  var listFromTopPosition = $('#list').position();
  var actualPosition = parseInt(listItemPosition.top) - parseInt(listFromTopPosition.top);

 $('li').removeClass('active');

   $('.list-wrap').animate({scrollTop:actualPosition}, '500', 'swing', function() {
   		$('#' + currentID).addClass('active'); 
    });
});

var listHeight = $('#list').height();
$('#no-scroll').css('height', listHeight);
$( "#no-scroll" )
	.mouseenter(function() {
		$('.list-wrap').css('overflowY', 'hidden');
	})
	.mouseleave(function() {
		$('.list-wrap').css('overflowY', 'scroll');
});





    // var StarRatings;

    // StarRatings = {


    //     var starContainer  = $('.star-contain'),
    //         offset         = starContainer.offset,
    //         startWidth     = starContainer.width(),
    //         percentYouLike = $('.percent-you-like'),
             




    // }


})( jQuery );
