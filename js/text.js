var ctx = document.getElementById('circularLoader').getContext('2d');
let loader = document.getElementById("loader");
var al = 0;
var start = 4.72;
var cw = ctx.canvas.width;
var ch = ctx.canvas.height;
var diff;
function progressSim(){
	diff = ((al / 100) * Math.PI*2*10).toFixed(2);
	ctx.clearRect(0, 0, cw, ch);
	ctx.lineWidth = 17;
	ctx.fillStyle = '#91C827 ';
	ctx.strokeStyle = "#91C827 ";
	ctx.textAlign = "center";
	ctx.font="28px monospace";
	ctx.fillText(al+'%', cw*.52, ch*.5+5, cw+12);
	ctx.beginPath();
	ctx.arc(100, 100, 75, start, diff/10+start, false);
	ctx.stroke();
	if(al >= 100){
		clearTimeout(sim);
        loader.style.display = "none";
	}
	al++;
}
var sim = setInterval(progressSim, 30);

// start in navbar
let navbar = document.getElementById("nav");
let link = document.querySelectorAll(".nav-item .link");

window.onscroll = function () {
  if (document.body.scrollTop > 80 || document.documentElement.scrollTop > 80) {
    nav.classList.add("change");
    link.forEach(function (element) {
      element.style.color = "#fff";
    });
  } else {
    navbar.classList.remove("change");
    link.forEach(function (element) {
      element.style.color = "#162C3B";
    });
  }
};

// start in filter imges
function allfilterTransferText() {
  let filterBtn = document.querySelectorAll(".btn-groub button");
  let filterImg = document.querySelectorAll(".img-filter .filter");

  filterBtn.forEach(function (button) {
    button.addEventListener("click", manageImgs);
  });

  function manageImgs() {
    filterImg.forEach(function (img) {
      img.style.display = "none";
    });
    document.querySelectorAll(this.dataset.cat).forEach((el) => {
      el.style.display = "inherit";
    });
  }

  // transfer text in fitst charcter in uoupeercase
function touper() {
    let print = document.getElementById("soft");
    let text = "software engineering specialization";
    let show = text.split(" ");
  
    for (let i = 0; i < text.length; i++) {
      let result = show[i].charAt(0).toUpperCase() + show[i].slice(1);
      print.innerHTML += " "  + result ;
    }
  }
  touper();
}
allfilterTransferText();



// start in animate css in about

// let contenAbout = document.getElementById("content-about");
// let text = document.getElementById("about");

// window.onscroll = function () {
//   if (window.scrollY >= contenAbout) {
//     text.classList.add("animate__rubberBand");
//   }
// };
