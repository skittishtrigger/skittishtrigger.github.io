$(function() { //Loads default class="content" defaultcontent div.
  $("#defaultcontent").load("https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/default.html");  
});

//Define variables here:
var urlName; //This will be first var defined & used to search the array.
var urlMemory; //Used to store urlName value for future manipulation.
var getLink; //Var used in linkId function. Declared globally till I figure this out.
var linkUrls = [ //List of links used throughout the site.
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/index.html", //0
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/htmpages.html", //1
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/htmpages2.html", //2
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/css.html", //3
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/jscript.html", //4
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/git.io.html", //5
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/future.html", //6
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/future2.html", //7
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/css2.html", //8
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/jscript2.html", //9
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/git.io2.html", //10
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/future3.html", //11
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/footer.html", //8
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/footer2.html", //9
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/footer3.html", //10
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/misc.html", //11
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/default.html",//12
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/projects.html", //13
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/linkstop.html",//14
  "https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/futuretop.html"//15
  ];

window.onclick = linkId(); //Iniates script on click.
//Start of link onclick identification.
function linkId() {  
  urlName = document.querySelectorAll("a");
  for (let i = 0; i < urlName.length; i++) {
    urlName[i].addEventListener("click", function() {
      urlName = this.id;
      console.log(urlName + " - This is inside loop. After link click");
      confirmUrl();
      return (urlName = this.id);      
    });
  }
}//end of variable linkGrab

//Simple confirmation var urlName is accessible globally.
function confirmUrl() {
  console.log(urlName + " - Final check for success checking var urlName outside defining function.");
  findUrl();
}

//Start of array search script.
function findUrl(){
  console.log(urlName + " -This confirms urlName value inside of  findUrl()");
  getLink = linkUrls.indexOf('https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/' + urlName + '.html');
  console.log(getLink + " - Should be 0 base index number from string matching the array.");
  return getLink = linkUrls.indexOf('https://raw.githubusercontent.com/skittishtrigger/skittishtrigger.github.io/master/pages/' + urlName + '.html');
  postUrl();
}

//load page into correct div based on link(The ahrd part commeth//)
function postUrl(){
  
   document.getElementById("#defaultcontent").load.linkUrls[getLink];
}
