//schools, megan's list
var zillowFunc = require('zillow.js')
var craigslistAddressScrape = require('craiglist.js');


$(document).ready(function() {



  var currentEndAddress = $('.zsg-content-header').children(':first').text();
  var firstTime = false;
  setInterval(function(){
    var newAddress = $('.zsg-content-header').children(':first').text();
    if ((newAddress != currentEndAddress && newAddress) || !firstTime ){
      firstTime = true;
      console.log("change noticed");
      currentEndAddress = newAddress;
      var start = '';

      //var addressRegex = /[A-Za-z0-9,]{1,}/g;
      var end = $('.zsg-content-header').children(':first').text();
      start = chrome.storage.local.get("address", function(data){
        console.log(data["address"])
        start = data["address"];
        streetAddress1 = data["address"].split(',')

        //format address
        var urlAddress = "http://www.mapquestapi.com/directions/v2/route?key=aw2GKPeRowrbs9zGqAJPpouBkHflEy11&from=[start]&to=[end]&callback=";
        urlAddress = urlAddress.replace('[start]',start);
        urlAddress = urlAddress.replace('[end]',end);


          $.ajax({
            method:'GET',
            format: 'jsonp',
            url:urlAddress,
            success: function(directionsData){
              //inject the commute time in!
              console.log(directionsData);
              var distance = Math.round(directionsData.route.distance);
              var time = Math.round(directionsData.route.realTime/60);

              var commuteHTML = '<div style="background-color:rgba(100,100,0,0.3); padding:10px;font-family:Open Sans,open-sans,Arial;margin-top:10px"><strong>Commute:</strong> '+distance+" miles, " +time+' minutes by car to '+ streetAddress1[0]+'<br></div>';
              if(!isNaN(distance)){
                $('header.zsg-content-header').append(commuteHTML);
              }
            },
          });
        });

        start = chrome.storage.local.get("address-2", function(data){
          console.log(data["address-2"])
          start = data["address-2"];
          streetAddress = start.split(',');

          //format address
          var urlAddress = "http://www.mapquestapi.com/directions/v2/route?key=aw2GKPeRowrbs9zGqAJPpouBkHflEy11&from=[start]&to=[end]&callback=";
          urlAddress = urlAddress.replace('[start]',start);
          urlAddress = urlAddress.replace('[end]',end);


            $.ajax({
              method:'GET',
              format: 'jsonp',
              url:urlAddress,
              success: function(directionsData){
                //inject the commute time in!
                console.log(directionsData);
                var distance = Math.round(directionsData.route.distance);
                var time = Math.round(directionsData.route.realTime/60);

                var commuteHTML = '<div style="background-color:rgba(100,100,0,0.3); padding:10px;font-family:Open Sans,open-sans,Arial;margin-top:10px"><strong>Commute:</strong> '+distance+" miles, " +time+' minutes by car to '+ streetAddress[0]+'<br></div>';
                if(!isNaN(distance)){
                  $('header.zsg-content-header').append(commuteHTML);
                }
              },
            });







          });

    }

  },1000);

});
