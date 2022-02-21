$(window).on('unload', function() {
   $(window).scrollTop(0);
});

/* 
Google SpreadSheet
*/
$(document).ready(function() {
  $('.rumble').jrumble();
    $('.rumble').hover(function(){
  $(this).trigger('startRumble');
}, function(){
  $(this).trigger('stopRumble');
});
      

    var spreadsheet_id = '1hTWYmtNHxk64kJ0yk7tYYiKQZKqG7r8bVbH28Whz17c';
    var tab_name = 'Sayfa1';
    var api_key = 'AIzaSyAQFLR8Dke0DsYNgwublszRuIzKB877v8E';

    var url = 'https://sheets.googleapis.com/v4/spreadsheets/' +
           spreadsheet_id + '/values/' + tab_name +
           '?alt=json&key=' + api_key;

    var bonneurl = 'https://sheets.googleapis.com/v4/spreadsheets/1BxiMVs0XRA5nFMdKvBdBZjgmUUqptlbs74OgvE2upms/values/Class%20Data?alt=json&key=AIzaSyAQFLR8Dke0DsYNgwublszRuIzKB877v8E';
 
  


      var tableArray = [];
      /* First parameter in .getJSON method is published google spreadsheet's modified link for getting data formed with JSON. Tricky key is putting key between link template over here : https://spreadsheets.google.com/feeds/list/PUT-KEY_HERE/od6/public/values?alt=json  | You might be get key when you published your data spreadsheet. The key inside the URL. After getting JSON object you can investigate which key represent data. In this example json.feed.entry is an array that includes my data. Your solution should look similar like that.
      */


      $.getJSON(url, function(json) {


          if (json.values.length > 0) {
           
            for (i = 0; i < json.values.length; i++) {
              var row = json.values[i];
              var p_name = row[1];
              var p_aside = row[2];
              var p_url = row[3];
              var p_urlvid = row[4];
              var p_urlimg = row[5];
              var p_color = row[6];
              var p_responsive = row[7];
              // CHECK IF MOBILE 
              if(p_responsive == 'mobile'){
                
                 // is a video mobile
                 if (p_urlvid) {
                 
                    $("#container").append('<a href="' + p_url + '" class="link" target="_blank"><article><div class="content"><h2>' + p_name + '</h2><span>&#8212;</span><h3> ' + p_aside + '</h3><span class="arrow">&#x2197;</span></div><div class="mask"><span data-url="' + p_url + '">&#x2197;</span></div><div class="mobile"><video style="background:'+ p_color +';" class="front" autoplay loop muted playsinline poster="' + p_urlimg + '"><source src="' + p_urlvid + '" type="video/mp4" /></video></div></article></a>');

                 } else {
                    $("#container").append('<a href="' + p_url + '" class="link" target="_blank"><article><div class="content"><h2>' + p_name + '</h2><span>&#8212;</span><h3> ' + p_aside + '</h3><span class="arrow">&#x2197;</span></div><div class="mask"><span data-url="' + p_url + '">&#x2197;</span></div><div class="mobile"><img src="' + p_urlimg + '" style="background:'+ p_color +';" class="front" /></div></article></a>');
                 }
              } else {
               
                // is a video desktop
                 if (p_urlvid) {
                   $("#container").append('<a href="' + p_url + '" class="link" target="_blank"><article><div class="content"><h2>' + p_name + '</h2><span>&#8212;</span><h3> ' + p_aside + '</h3><span class="arrow">&#x2197;</span></div><div class="mask"><span data-url="' + p_url + '">&#x2197;</span></div><div class="vidz"><video style="background:'+ p_color +';" class="front" autoplay loop muted playsinline poster="' + p_urlimg + '"><source src="' + p_urlvid + '" type="video/mp4" /></video></div></article></a>');
                  
                 } else {
                    $("#container").append('<a href="' + p_url + '" class="link" target="_blank"><article><div class="content"><h2>' + p_name + '</h2><span>&#8212;</span><h3> ' + p_aside + '</h3><span class="arrow">&#x2197;</span></div><div class="mask"><span data-url="' + p_url + '">&#x2197;</span></div><div class="vidz"><img src="' + p_urlimg + '" style="background:'+ p_color +';" class="front" /></div></article></a>');
 
                 }
              }


              
            }
          } else {
            // console.log('No data found.');
          }

            
      })
       .done(function() {
        // console.log( "second success" );


          
       

          var options = {
            strings: ['Bruno Landowski<br> Interactive Designer and Developer based in Paris'],
            typeSpeed: 10,
            showCursor: false,
            onStringTyped: function(){
              $("#works").addClass('show');
              $("#info").addClass('show');
              $("body").addClass("show");
              
            }
          };

          var typed = new Typed('#intro h1', options);


            checkScreenSize();

       
      })
      ;
    
});

function checkScreenSize(){
  if ($(window).width() > 740) {
    $('#container .link').on('mouseover', function (e) {
     var vid = $(this).find('video').get(0);
     vid.currentTime = 0;
     vid.play();
    
              
    });
    console.log('big');
   
     $('#container .link').hover(function(){
            $(this).addClass('side-open');
        },function(){
            $(this).removeClass('side-open');
        });  

  } else {
    console.log('small');
    $('#container .link').on('click', function (e) {
        console.log('clicksmall');
        
      $(this).toggleClass('side-open');
      return false;

     });
     $('.mask span').on('click', function (e) {
        
        var urlspan = $(this).attr("data-url");
        console.log(urlspan);
        window.open(urlspan);
        return false;
     });
    
  }
}

$(window).on("resize", function (e) {
  checkScreenSize();
});




//     $(window).on("resize", function (e) {
//         checkScreenSize();
//     });

//     checkScreenSize();

//     function checkScreenSize(){
//          if ($(window).width() > 740) {
//               $('article').hover(function(){
//                   $('article').addClass('side-open-desktop');
//               },function(){
//                   $('article').removeClass('side-open-desktop');
//               });         

//           }


//           if ($(window).width() < 740) {         
//               $('article').click(function(){
//                 if ($('article').hasClass('side-open-mobile')){
//                     $('article').removeClass('side-open-mobile');
//                 }
//                 $('article').toggleClass('side-open-mobile');
//             }); 
      
//           }  
//     }
// });