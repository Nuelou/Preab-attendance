var x = document.getElementById("demo");

function getLocation() {
    if (navigator.geolocation) {
        x.innerHTML = navigator.geolocation.getCurrentPosition(showPosition, noPosition, {timeout:10000});
        console.log(x.innerHTML)
    } else {
        console.log("theme")
        x.innerHTML = "Geolocation is not supported by this browser.";
        
    }
}
// console.log(getLocation)

function showPosition(position) {
    x.innerHTML = "Latitude: " + position.coords.latitude + "<br>Longitude: " + position.coords.longitude;
}

function noPosition() {
    $("#demo").watermark("Could not find location");
  }

// function display_ct5() {
//     var x = new Date()
//     var ampm = x.getHours( ) >= 12 ? ' PM' : ' AM';
//     var x1=x.getMonth() + 1+ "/" + x.getDate() + "/" + x.getFullYear();
//     x1 = x1 + " - " + x.getHours( )+ ":" + x.getMinutes() + ":" + x.getSeconds() + ":" + ampm;
//     document.getElementsById('ct5').innerHTML = x1;
//     display_ct5();
// }
// function display_ct5() {
//     var refresh=1000; // Refresh rate in milli seconds
//     mytime=setTimeout('display_ct5()',refresh)
// }
// display_ct5

