// Return Longitude and Latitude of user's position
// var x = document.getElementById("Geolocation");
//     function getLocation() {
//       if (navigator.geolocation) {
//             navigator.geolocation.getCurrentPosition(showPosition);
//           } else {
//             x.innerHTML = "Geolocation is not supported by this browser.";
//           }
//         }
        
        // function showPosition(position) {
        //   x.innerHTML = "Latitude: " + position.coords.latitude +
        //   "<br>Longitude: " + position.coords.longitude;
        // }
        // function showPosition(position) {
        //     x.innerHTML = "Latitude: " + position.coords.accuracy +
        //     "<br>Longitude: " + position.coords.accuracy;
        //   }

          var x = document.getElementById("Geolocation");
    function getLocation() {
      if (navigator.geolocation) {
            navigator.geolocation.watchPosition(showPosition);
          } else {
            x.innerHTML = "Geolocation is not supported by this browser.";
          }
        }

        function showPosition(position) {
            x.innerHTML = "Latitude: " + position.coords.accuracy +
            "<br>Longitude: " + position.coords.accuracy;
          }