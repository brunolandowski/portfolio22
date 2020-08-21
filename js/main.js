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
      
      var tableArray = [];
      /* First parameter in .getJSON method is published google spreadsheet's modified link for getting data formed with JSON. Tricky key is putting key between link template over here : https://spreadsheets.google.com/feeds/list/PUT-KEY_HERE/od6/public/values?alt=json  | You might be get key when you published your data spreadsheet. The key inside the URL. After getting JSON object you can investigate which key represent data. In this example json.feed.entry is an array that includes my data. Your solution should look similar like that.
      */
      $.getJSON('https://spreadsheets.google.com/feeds/list/1hTWYmtNHxk64kJ0yk7tYYiKQZKqG7r8bVbH28Whz17c/od6/public/values?alt=json', function(json) {
        for (var i = 0; i < json.feed.entry.length; i++) {
          var iArray = [];
          iArray.push(json.feed.entry[i].gsx$name.$t);
          iArray.push('<a href="'+json.feed.entry[i].gsx$url.$t+ '">URL</a>');
          tableArray.push(iArray);
          
          $("#container").append('<a class="link" target="_blank"><article><div class="content"><h2>' + json.feed.entry[i].gsx$name.$t + '</h2><h3>' + json.feed.entry[i].gsx$aside.$t + '</h3></div><video style="background:'+ json.feed.entry[i].gsx$color.$t +';" class="front" loop muted poster="' + json.feed.entry[i].gsx$urlimg.$t + '"><source src="' + json.feed.entry[i].gsx$urlvid.$t + '" type="video/mp4" /></video></article></a>');
        
          
        }
       
      })
       .done(function() {
        console.log( "second success" );


          
       

          var options = {
            strings: ['Molo — Interactive Designer based in Paris'],
            typeSpeed: 40,
            showCursor: false,
            onStringTyped: function(){
             
            }
          };

          var typed = new Typed('#intro h1', options);



        $('#container .link').hover(
           function () {
            var vid = $(this).find('video').get(0);
            vid.currentTime = 0;
            vid.play();
         
            
          
           }, 

           function () {
              
              
           }
        );
      })
      ;
    
});






