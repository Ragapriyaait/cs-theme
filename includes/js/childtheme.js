/*
 Theme Name:   Divi Child Theme
 description: >-
   A child theme of the Divi default WordPress theme
 Author:       D-THEMES
 Template:     divi
 Version:      4.6.5
*/

//wp-content/uploads/2020/07/21140239/GenooUserGuide-Email-Builder-Steps-V1.pdf


$(document).ready(function(){
/*$("#linkvalue").click(function(){



// var filepath = $(this).attr('data-href'); 
// var filepath = "https://supportfiles.genoo.com/wp-content/uploads/2020/07/21140239/GenooUserGuide-Email-Builder-Steps-V1.pdf";
 //  var filename  = $(this).attr('data-name');

 var req = new XMLHttpRequest();
  req.open("GET", filepath, true);
  req.responseType = "blob";

  req.onload = function (event) {
    var blob = req.response;
    console.log(blob.size);
    var link=document.createElement('a');
    link.href=window.URL.createObjectURL(blob);
    link.download= filename + new Date() + ".pdf";
    link.click();
  };

  req.send();

 });*/
  //Focus on search_bar right away
  $('#s').focus();

$('#s').removeAttr('placeholder');
$("#s").attr("placeholder", "");

  //Search_bar animation
  var pretext = '';
  var next_frame = {
    '.':'..',
    '..':'...',
    '...':'',
    '':'.'
  }
  window.setInterval(function(){
    $('#s').attr('placeholder',
    next_frame[ pretext + $('#s').attr('placeholder') ]);
  }, 1000);
/*
      jQuery(function(){
            // Set priority support height
            function resize_priority(){ $('#priority-support-form').css({ 'height': $(window).height() - 225 }); }
            $(window).resize( resize_priority );
            resize_priority();

            jQuery(document).on('click', '#topMenuTopEmail', function(event){
                // Block event
                event.returnValue = null;
                if(event.preventDefault) event.preventDefault();
                // Toggle
                jQuery('#topMenuBottom').slideToggle(300);
            });
            // Side panel
            jQuery(document).on('click', '#priority-support-button-click', function(event){
                // Block event
                event.returnValue = null;
                if(event.preventDefault) event.preventDefault();
                // Toggle
                var support = jQuery('#priority-support');
                var position = support.css('right');
                var animate = position == '-300px' ? '0px' : '-300px';
                // Animate
                support.animate({
                    'right' : animate
                }, 400);
            });
        });
    
        $('.mobile_menu_bar').on('click',function(){
          $('#toggle').toggle('slide');
          
      });*/
      $("span.select_page").text("");
        });










