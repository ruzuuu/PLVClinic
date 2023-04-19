jQuery.noConflict();
            // Use jQuery via jQuery() instead of via $()
jQuery(document).ready(function(){
    jQuery("#uname").click(function(){
        jQuery("#options").slideToggle();
        jQuery("#userdown").toggleClass("rotate");
    });
});  
jQuery(document).ready(function(){
    jQuery("#transbutton").click(function(){
        jQuery("#transaction").slideToggle();
        jQuery("#tansdown").toggleClass("rotate");
    });
});  
jQuery(document).ready(function(){
    jQuery("#accbutton").click(function(){
        jQuery("#accounting").slideToggle();
        jQuery("#accdown").toggleClass("rotate");
    });
});
jQuery(document).ready(function() {
   jQuery("#fullMenu").click(function() {
       jQuery('#menuFull').slideToggle();
       jQuery('#menuFull').toggleClass("display");
   });
});
jQuery(document).ready(function(){
    jQuery("#collapseMSR").click(function(){
        jQuery("#monthlyChart").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery("#closeMSR").click(function(){
        jQuery("#monthlyReport").hide();
    });
});

jQuery(document).ready(function(){
    jQuery("#collapsePSR").click(function(){
        jQuery("#packageChart").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery("#closePSR").click(function(){
        jQuery("#packageSalesReport").hide();
    });
});

jQuery(document).ready(function(){
    jQuery("#collapseFR").click(function(){
        jQuery("#financialChart").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery("#closeFR").click(function(){
        jQuery("#financialReport").hide();
    });
});
jQuery(document).ready(function(){
    jQuery('.seeCheck').click(function(){
        jQuery("#del").toggle();
        jQuery("#mod").toggle();
    });
});



jQuery(document).ready(function(){
    jQuery("#collapseTDL").click(function(){
        jQuery(".options").slideToggle();
        jQuery(".tasks").slideToggle();
    });
});
jQuery(document).ready(function(){
    jQuery("#closeTDL").click(function(){
        jQuery("#toDoList").hide();
    });
});






jQuery(document).ready(function () {

    jQuery(".chat").hide();

    jQuery('#showChat').click(function () {
        jQuery("#dash").toggleClass("col-md-10");
        jQuery("#dash").toggleClass("col-md-7");
        jQuery("#showChat").toggleClass("active");
        jQuery(".chat").toggle("slide", { direction: "right" });
    });
        
    jQuery('#openChat').click(function () {
        jQuery(".chat").toggle("slide", { direction: "right" });
    });

});
jQuery(document).ready(function () {

    jQuery('#closeChat').click(function () {
        jQuery("#dash").toggleClass("col-md-10");
        jQuery("#dash").toggleClass("col-md-7");
        jQuery("#showChat").toggleClass("active");
        jQuery(".chat").toggle("slide", { direction: "right" });
    });

});




jQuery(document).ready(function () {

    jQuery(".message-block").hide();

    jQuery('.chat-members').click(function () {
        jQuery(".chats").hide();
        jQuery(".message-block").toggle("slide", { direction: "right" });
    });

});

jQuery(document).ready(function () {

    jQuery('.mb-back').click(function () {
        jQuery(".message-block").toggle("slide", { direction: "right" });
        jQuery(".chats").show();
        jQuery("..message-block").hide();
        
    });

});