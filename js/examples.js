$(function() {
  $(".clippy-1").on("click", function() {
    var clippy = document.getElementById('clippy-good');
    clippy.classList.add('being-helpful');
  });

  $(".clippy-2").on("click", function() {
    var clippy = document.getElementById('clippy');
    clippy.classList.add('being-helpful');
  });  

  $(".greasemonkey").on("click", function() {
    var wtfIHateClippySoMuch = document.getElementById('clippy');
    wtfIHateClippySoMuch.parentNode.removeChild( wtfIHateClippySoMuch );
  });

  window.onerror = function(error){ alert(error)}
});