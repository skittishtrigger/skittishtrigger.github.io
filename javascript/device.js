//<button onclick="myFunction()">Try it</button>
//
//var clickLink =
//function myFunction() {
//    var x = document.getElementById('myDIV');
//    if (x.style.display === 'none') {
//       x.style.display = 'block';
//  } else {
//       x.style.display = 'none';
//    }
//} ////
window.onload(adjustStyle(width)); //Calls function on load? force push

function adjustStyle(width) {
  width = parseInt(width);
  if (width < 360) {
    $("#size-stylesheet").attr("href", "css/small.css");
  } else if (width < 480) {
    $("#size-stylesheet").attr("href", "css/medium.css");
  } else if (width < 720) {
    $("#size-stylesheet").attr("href", "css/large.css");
  } else {
    $("#size-stylesheet").attr("href", "css/default.css");
  }
}

window.resize(adjustStyle(width));
