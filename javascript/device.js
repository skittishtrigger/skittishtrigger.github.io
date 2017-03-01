




window.addEventListener("load", adjustStyle());
window.addEventListener("resize", adjustStyle()); // This
// window.addEventListener("resize", function(){adjustStyle();}); //or this?


function adjustStyle() {
  var w = window.screen.availWidth; { // sets variable inside()?
    w = parseInt(w);//<---Needed?
    if (w === undefined) { //Default variable just in case?
      w = 900;
      confirm("Your screen does not respond with its size");
    } else if (w < 360) {
<<<<<<< HEAD
<<<<<<< HEAD
      document.getElementById("#size-stylesheet").href="css/small.css";
=======
      document.getElementById("#size-stylesheet").attr("href", "css/small.css");
>>>>>>> refs/remotes/origin/master
=======
      document.getElementById("size-stylesheet").setAttribute("href", "css/small.css");
>>>>>>> refs/remotes/origin/master
    } else if (w < 480) {
       document.getElementById("size-stylesheet").setAttribute("href", "css/medium.css");
    } else if (w < 720) {
      document.getElementById("size-stylesheet").setAttribute("href", "css/large.css");
    } else if (w > 721) {
       document.getElementById("size-stylesheet").setAttribute("href", "css/default.css");
    } else {
<<<<<<< HEAD
<<<<<<< HEAD
     $document.getElementById("#size-stylesheet").attr("href", "css/default.css");
=======
     document.getElementById("#size-stylesheet").attr("href", "css/default.css");
>>>>>>> refs/remotes/origin/master
=======
     document.getElementById("#size-stylesheet").setAttribute("href", "css/default.css");
>>>>>>> refs/remotes/origin/master
    }
    // if/else if statements  ^^^^  "linking" proper css based on screen.width
  }

}

