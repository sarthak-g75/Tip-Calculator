const resetBtn = document.querySelector(".resetBtn");
const tipBtn = document.querySelector(".button");
let billAmt = document.querySelector(".billInput");
let peopleCount = document.querySelector(".peopleCountInput");
let tipAmt = document.querySelector(".tipAmount");
let totalAmt = document.querySelector(".totalAmount");
let tips = document.querySelector(".tips");
let Btn = document.getElementsByClassName("button");
let customTip = document.getElementsByClassName("customTip");
let perPersonTip = document.querySelector(".tipAmount");
let perPersonTotal = document.querySelector(".totalAmount");
// setting reset button to disabled initally
resetBtn.setAttribute("disabled", "disabled");

// will make the button disable or able to pree
function makeReset(val) {
  if (val != null) {
    resetBtn.removeAttribute("disabled");
    normalReset();
  } else {
    resetBtn.setAttribute("disabled", "disabled");
  }
}
// change css after making reset button clickable
function normalReset() {
  resetBtn.style.cursor = "pointer";
  resetBtn.addEventListener("mouseenter", () => {
    resetBtn.style.background = "#9FE8DF";
    resetBtn.style.color = "#00474b";
    resetBtn.style.fontWeight = "bolder";
  });
  resetBtn.addEventListener("mouseleave", () => {
    resetBtn.style.background = "#25bea9";
    resetBtn.style.color = "white";
  });
}
// will make the button disabled after clicking it
resetBtn.addEventListener("click", () => {
  resetBtn.setAttribute("disabled", "disabled");
  // console.log("hello")
  resetBtn.style.color = "#9FE8DF";
  resetBtn.style.background = "#25BEA9";
  resetBtn.style.cursor = "auto";
  billAmt.value = null;
  peopleCount.value = null;
  tipAmt.value = null;
  totalAmt.value = null;
  getIndex(6);
  perPersonTip.innerHTML = "$0.00";
  perPersonTotal.innerHTML = "$0.00";
});
// getting bill amt and saving in bAmt
var bAmt;
function getBAmt(val) {
  resetBtn.style.background = "#25bea9";
  resetBtn.style.color = "white";
  bAmt = Number(val);
  makeReset(val);
  calculation();
}
// storing no of person
var pAmt;
function getPAmt(val) {
  resetBtn.style.background = "#25bea9";
  resetBtn.style.color = "white";
  pAmt = Number(val);
  makeReset(val);
  calculation();
}

// mapping all the tipping %
const tip = ["5", "10", "15", "25", "50"];
tip.map(func);
function func(x, index) {
  let d = ` <button class="button" onclick = {getIndex(${index})}>${x}%</button>`;
  tips.innerHTML += d;
}

// tip button color changing and storing value in tAmt
var tAmt;

function getIndex(index) {
  // console.log();
  for (i = 0; i < 5; i++) {
    Btn[i].style.background = "#00474b";
    Btn[i].style.color = "white";
  }
  if (index == 6) {
    for (i = 0; i < 5; i++) {
      Btn[i].style.background = "#00474b";
      Btn[i].style.color = "white";
    }
  } else {
    // properties to be applied on the button we clicked on
    resetBtn.style.background = "#25bea9";
    resetBtn.style.color = "white";
    Btn[index].style.background = "#27C1AD";
    Btn[index].style.color = "#00474b";
    Btn[index].style.fontWeight = "bold";
    customTip[0].style.outline = "none";
    customTip[0].value = null;
    tAmt = Number(tip[index]);
    makeReset(tAmt);
    calculation();
  }
}

// changing css property when clicked on custom tip
function clrchange() {
  customTip[0].style.outline = "solid #26C2AD";
  resetBtn.style.background = "#25bea9";
  resetBtn.style.color = "white";
  getIndex(6);
}
// storing custom tip value
function defaultclr(x) {
  customTip[0].style.outline = "none";
  tAmt = Number(x);
  getIndex(6);
  calculation();
}

// To print the results
function calculation() {
  if (bAmt != null && pAmt != null && tAmt != null) {
    let tipPerPerson = (bAmt * tAmt) / 100 / pAmt;
    perPersonTip.innerHTML = "$" + tipPerPerson;
    // parseInt(bAmt,10);
    // bAmt.toNumber();
    // console.log(typeof(bAmt));
    let totalPerPerson = (tipPerPerson * pAmt + bAmt) / pAmt;
    perPersonTotal.innerHTML = "$" + totalPerPerson;
    // console.log(totalPerPerson);
  }
}
