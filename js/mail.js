jQuery(document).ready(function () {
     
     $(".phone").mask("+7 (999) 999-99-99"); 
    
   
    jQuery('form button').click( function() {
    	var form = jQuery(this).closest('form');
    	
    	if ( form.valid() ) {
    		form.css('opacity','1');
    		var actUrl = form.attr('action');

    		jQuery.ajax({
    			url: actUrl,
    			type: 'post',
    			dataType: 'html',
    			data: form.serialize(),
    			success: function(data) {
                    form.find('.status .status__desc, .status__close');
					form.find('.status .status__desc').html('Form has been  submitted correctly.');
					form.find('.status')
					$('.status').css('display', 'block');
					$(".status").addClass("correct");
					$("form")[0].reset(); 
    			},
    			error: function() {
    			    form.find('.status .status__desc, .status__close');
					form.find('.status .status__desc').html('Please fill all required fields.');
					$('.status').css('display', 'block');
					form.find(".status").addClass("mistake");
					
    			}
    		});
    	}
    });


});

