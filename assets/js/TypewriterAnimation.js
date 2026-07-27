window.onload = function() {
 typeWriter();
};


var i = 0;
var txt = '     Nasser Alzahrani';
var speed = 150;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("typeWriter").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}


