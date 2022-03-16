const content = document.querySelector("section");
let currentPos = window.pageYOffset;

const callDistort = function() {
  const newPos = window.pageYOffset;
  const diff = newPos - currentPos;
  const speed = diff * 0.35;

  content.style.transform = "skewY("+speed+"deg)";
  currentPos = newPos;
  requestAnimationFrame(callDistort)
};
callDistort();


function MouseEnter(e){
  var finder = document.getElementsByClassName('finder')[0];
  var x = e.clientX - 125;
  var y = e.clientY - 125;
  finder.style.top = y + "px";
  finder.style.left = x + "px";
}

function generator(){}