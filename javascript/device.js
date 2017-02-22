




window.addEventListener("load", adjustStyle());
window.addEventListener("resize", adjustStyle()); // This
// window.addEventListener("resize", function(){adjustStyle();}); //or this?


function adjustStyle() {
  var w = window.innerwidth; { // sets variable inside()?
    w = parseInt(w); //<---Needed?
    if (w === undefined) { //Default variable just in case?
      w = 900;
      confirm("Your screen does not respond with its size");
    } else if (w < 360) {
      document.getElementById("size-stylesheet").setAttribute("href", "css/small.css");
    } else if (w < 480) {
       document.getElementById("size-stylesheet").setAttribute("href", "css/medium.css");
    } else if (w < 720) {
      document.getElementById("size-stylesheet").setAttribute("href", "css/large.css");
    } else if (w > 721) {
       document.getElementById("size-stylesheet").setAttribute("href", "css/default.css");
    } else {
     document.getElementById("#size-stylesheet").setAttribute("href", "css/default.css");
    }
    // if/else if statements  ^^^^  "linking" proper css based on screen.width
  }

}

