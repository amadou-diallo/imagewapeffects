"use strict";

$(document).ready( () => {
	// preload images
	$("#image_list a").each( (index, element) => {
		const swappedImage = new Image();
		swappedImage.src = $(element).attr("href");
	});
	
	// set up event handlers for links    
	$("#image_list a").click( evt => {
		const link = evt.currentTarget; //clicked thumbnail is 'target'
                const imageURL = $(link).attr("href"); // new target image
                const caption = $(link).attr("title"); //new target caption
                
                $("#caption").fadeOut(1000);  // fade out current caption
                // fade out current image with callback to fade in new images
                $("#image").fadeOut(1000,
                         () => {
                               //callback function
                               $("#caption").text(caption).fadeIn(1000);
                               $("#image").attr("src", imageURL).fadeIn(1000);
                               
                               }
                         
                 );
                
		// cancel the default action of the link
	    evt.preventDefault();
	}); // end click
	
	// move focus to first thumbnail
	$("li:first-child a").focus();
}); // end ready