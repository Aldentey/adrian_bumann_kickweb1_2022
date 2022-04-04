// var colors = ["#f38630","#6fb936", "#ccc", "#6fb936"];

//initially colorize each box and position in a row
gsap.set(".box", {
//   backgroundColor: (i) => colors[i % colors.length],
  x: (i) => i * 50
});


gsap.to(".box", {
  duration: 5,
  ease: "none",
  x: "+=100vw", //move each box 500px to right
  modifiers: {
    x: gsap.utils.unitize(x => parseFloat(x) % 1000) //force x value to be between 0 and 500 using modulus
  },
  repeat: -1000
});


//toggle overflow
const overflow = document.querySelector("#overflow");
overflow.addEventListener("change", applyOverflow);

function applyOverflow() {
  if(overflow.checked) {
    gsap.set(".wrapper", {overflow: "visible"});
  } else {
    gsap.set(".wrapper", {overflow: "hidden"});
  }
}   