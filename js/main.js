 var text = new Blotter.Text("Molo", {
        size : 800,
        fill : "#fff",
        weight : 900
       
      });

      var material = new Blotter.LiquidDistortMaterial();
      material.uniforms.uSpeed.value = 0.2;
      material.uniforms.uSeed.value = 0.1;
      material.uniforms.uVolatility.value = 1.0;
      var blotter = new Blotter(material, { texts : text });
      var scope = blotter.forText(text);

      scope.appendTo(satu);
/* 
Google SpreadSheet
*/
$(document).ready(function() {
       $(window).scroll(function(){ 
                $('canvas').css("opacity", 1- $(window).scrollTop() / 250) 
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
          
          $("#container").append('<a class="link" target="_blank"><article><div class="content"><h2>' + json.feed.entry[i].gsx$name.$t + '</h2><h3>' + json.feed.entry[i].gsx$aside.$t + '</h3></div><div class="flip-box"><div class="flip-box-inner"><div class="flip-box-front"><video autoplay loop poster="' + json.feed.entry[i].gsx$urlimg.$t + '"> <source src="' + json.feed.entry[i].gsx$urlvid.$t + '" type="video/mp4" /></video></div><div class="flip-box-back"></div></div></div></article></a>');
        
          
        }
       
      })
       .done(function() {
        console.log( "second success" );
        $("#loading").fadeOut(1000);
        $("#butter img").removeClass(rotating);
      })
      ;
    
});




