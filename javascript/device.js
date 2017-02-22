




window.addEventListener("load", adjustStyle());
window.addEventListener("resize", adjustStyle()); // This
// window.addEventListener("resize", function(){adjustStyle();}); //or this?


function adjustStyle() {
  var w = screen.width; { // sets variable inside()?
    confirm("Your screen is" + w + "px wide.");
    w = parseInt(w); //<---Needed?
    if (w === undefined) { //Default variable just in case?
      w = 900;
      confirm("Your screen does not respond with its size");
    } else if (w < 360) {
      $document.getElementById("#size-stylesheet").attr("href", "css/small.css");
    } else if (w < 480) {
       $document.getElementById("#size-stylesheet").attr("href", "css/medium.css");
    } else if (w < 720) {
      $ document.getElementById("#size-stylesheet").attr("href", "css/large.css");
    } else if (w > 721) {
       $document.getElementById("#size-stylesheet").attr("href", "css/default.css");
      confirm("WoW, that " + w + "px screen is huge");
    } else {
     $document.getElementById("#size-stylesheet".attr("href", "css/default.css");
    }
    // if/else if statements  ^^^^  "linking" proper css based on screen.width
  }

}

