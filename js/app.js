$(document).ready( function() {
	console.log("js on");
	
    // Every time the window is scrolled ... 
    $(window).scroll( function(){
        // Check the location of each desired element
        $('.hideme').each( function(i){
        	// Below is a trial attempt
            var bottom_of_object = $(this).offset().top + $(this).outerHeight();
            // var bottom_of_window = $(window).scrollTop() + $(window).height();
            var bottom_of_window = $(window).scrollTop() + $(window).height() + 450;// <-- You can edit how soon the div shows up by editing the number at the end
            // If the object is completely visible in the window, fade it it
            if( bottom_of_window > bottom_of_object){
                $(this).animate({'opacity':'1'},500);      
            }
        }); 
    });

	//Initial Phone ScreenCap Default Selection
	$("#initSelect").addClass('phScrnCol');
	$("#pointerRight").hide();
	$("#captionHeader").html("In-The-Moment Updates");
	$("#captionContent").html("Businesses you follow can send you instant updates on specials, promotions, discounts, flash sales and more! ");
   	//Image Selection
  	$( ".phoneScrnCap" ).mouseenter(function() {
  		$( ".phoneScrnCap" ).each(function() {
  			$(this).addClass('phScrnGry');
  			$( this ).removeClass( "phScrnCol" );
		});
  		$(this).addClass('phScrnCol');
	});

  	//Caption Movement
	$(".photo1").mouseenter(function() {
		$("#cap1").removeClass("col-sm-offset-5 col-sm-offset-2 col-sm-offset-8 col-sm-offset-6");
		$("#cap1").addClass("col-sm-offset-2");
		$("#pointerLeft").show();
		$("#pointerRight").hide();
		//Caption content change 
		$("#captionHeader").html("One app for them all");
		$("#captionContent").html("Businesses populate based on your location. Simply follow you favorites");
	});
	$(".photo2").mouseenter(function() {
		$("#cap1").removeClass("col-sm-offset-5 col-sm-offset-2 col-sm-offset-8 col-sm-offset-6");
		$("#cap1").addClass("col-sm-offset-5");
		$("#pointerLeft").show();
		$("#pointerRight").hide();
		//Caption content change
		$("#captionHeader").html("In-The-Moment Updates");
		$("#captionContent").html("Businesses you follow can send you instant updates on specials, promotions, discounts, flash sales and more! ");
	});
	$(".photo3").mouseenter(function() {
		$("#cap1").removeClass("col-sm-offset-5 col-sm-offset-2 col-sm-offset-8 col-sm-offset-6");
		$("#cap1").addClass("col-sm-offset-8");
		$("#pointerLeft").show();
		$("#pointerRight").hide();
		//Caption content change
		$("#captionHeader").html("See what's new around you");
		$("#captionContent").html("Check the feed to find out what's happening in your city");
	});
	$(".photo4").mouseenter(function() {
		$("#cap1").removeClass("col-sm-offset-5 col-sm-offset-2 col-sm-offset-8 col-sm-offset-6");
		$("#cap1").addClass("col-sm-offset-6");
		$("#pointerLeft").hide();
		$("#pointerRight").show();
		//Caption content change
		$("#captionHeader").html("Full business profiles");
		$("#captionContent").html("Find out key information about businesses in your town. Such as their phone number or hours of operation. ");
	});


});
