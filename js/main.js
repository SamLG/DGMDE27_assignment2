$(document).ready(function() {
  var mybodyid = $('body').attr('id');
  // alert(mybodyid);
  var mynavid = ('#nav' + mybodyid);
  // alert(mynavid);
  $(mynavid + " a").attr('class', 'iamhere');

});


// custom functionality for responsive header navigation http://www.w3schools.com/howto/howto_js_topnav.asp
function myFunction() {
    var x = document.getElementById("myTopnav");
    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}