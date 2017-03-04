 //loads default.html page first
 $(function() {
   $("#defaultcontent").load("https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/default.html");
 });

 // Array to house list of all urls

 var linkUrls = [
   "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/default.html", //0
   "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/default.html", //1
   "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/html.html", //2
   "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/css.html", //3
   "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/jscript.html", //4
   "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/git.io.html", //5
   "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/future.html", //6
   "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/future.html" //7
 ];

 /* Link listening code - Insert into next variable for next function */

 var urlName = null; //declare variable name and default "value"
 console.log(urlName + "-default value");
 var getLink = document.querySelectorAll("a");
 console.log(urlName + "-second check inside query");
 for (var i = 0; i < getLink.length; i++) {
   getLink[i].addEventListener("click", function() {
console.log(this.id + "-link clicked");
     urlName = this.id; //set global var??
     console.log(urlName + "-logging after urlName=(this should be passed to global urlName var)");
   });
 } //end of variable linkGrab

 console.log("test placeholder");
 //should confirm urlName changed based on "ooo" (order of opertations)
 console.log(urlName + "-Final check for success");

 /* Next function will search array for string match and load that array as url after removing/unloading previous url?*/

 // link description https://www.w3schools.com/js/js_function_definition.asp //
 // https://snook.ca/archives/javascript/javascript_pass //
