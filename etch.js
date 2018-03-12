let n=50;
let boxSize = 500/n
let boxWidth = 500/n*n;

var container = document.querySelector(".container").style.width = boxWidth;
document.querySelector(".container").style.height = "500px";
document.querySelector(".container").style.margin = "0 auto";
document.querySelector(".container").style.display = "block";
document.querySelector(".container").style.width = 500/n*n;
document.querySelector(".container").style.border = "1px solid red";
document.querySelector(".container").style.height = "500px";
document.querySelector(".container").style.maxWidth= "100%";
console.log(document.querySelector(".container"));

(function(){
  for(var i = 0; i < n; i++) {
    var div = document.createElement('div');
    document.getElementById('container').appendChild(div);

    for(k = 0; k < n; k++) {
     var span = document.createElement('span');
     span.setAttribute('class', 'gridsquare');
     span.style.height = 500/n;
     span.style.width = 500/n;
     span.style.display = 'inline-block';
     document.getElementById('container').appendChild(span);

   }
 }
 hover("black")
})();



function hover(purple){
  let hover = document.querySelectorAll(".gridsquare");
  for (i=0;i<hover.length;i++){
    if (purple == "hue"){
      hover[i].addEventListener("mouseenter", function(each) {
        each.target.style.background = 'rgb(' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ',' + (Math.floor(Math.random() * 256)) + ')';
      });
    }
    else
      hover[i].addEventListener("mouseenter", function(each) {
        each.target.style.background = purple;
      });
  }
}

function clearGrid(){
  let hover = document.querySelectorAll(".gridsquare");
  for (i=0;i<hover.length;i++){
    hover[i].remove()};
    n = window.prompt("Enter amount of squares per side. 1-100")
    boxSize = 500/n
    boxWidth = 500/n*n;
    grid()
  }

  function buttonListen(){
    let button = document.querySelector("button");
    button.addEventListener("click", clearGrid);
  }

  let orange = document.getElementById('one');
  orange.addEventListener('click', function(){ hover("orange")},false);

  let red = document.getElementById('two');
  red.addEventListener('click', function(){ hover("red")},false);

  let rand = document.getElementById('three');
  rand.addEventListener('click', function(){ hover("hue")},false);

  grid()
  buttonListen()
