const customTip = document.getElementById("customBtn");
const bill = document.getElementById("bill");
const numPeople = document.getElementById("numPeople");
const tipAmount = document.getElementById("tipAmount");
const total = document.getElementById("total");
const reset = document.getElementById("resetBtn");
const error = document.querySelectorAll(".error");

let billF = 0;
let tip = 0;
let numPeopleF = 0;


// If bill has zero value, give error
bill.addEventListener("change", () => {
  billF = bill.value;

  if (billF == 0) {
    error[0].style.opacity = "1";
    bill.classList.add("orange-border");

  // If bill has value, add bill and change opacity of reset button
  } else {
    error[0].style.opacity = "0";
    bill.classList.remove("orange-border");
    reset.style.opacity = "1";
  }
})

// If custom btn pressed, record tip
customTip.addEventListener("change", () => {
  tip = customTip.value;
})

// if tip button pressed, change color & tip
document.querySelectorAll(".tip").forEach(item => {
  item.addEventListener("click", () => {
    tip = item.value;
    item.classList.add("activeBtn");
  })
  // If new button pressed, remove color of old
  document.addEventListener("click", event => {
    if (tip != item.value){
      item.classList.remove("activeBtn");
    }
  });
});


// Calculate tip amount and total
numPeople.addEventListener("change", () => {
  numPeopleF = numPeople.value;

  let tipPerPerson = billF * (tip / 100) / numPeopleF;
  tipAmount.innerHTML = "$" + tipPerPerson.toFixed(2);
  let amountPerPerson = billF / numPeopleF + tipPerPerson;
  total.innerHTML = "$" + amountPerPerson.toFixed(2);

  // If numPeople has value, add amount and change opacity of reset button
  if (numPeopleF == 0) {
    error[1].style.opacity = "1";
    numPeople.classList.add("orange-border");
    tipAmount.innerHTML = "$0.00";
    total.innerHTML = "$0.00";
  // If zero value, give error
  } else {
    numPeople.classList.remove("orange-border");
    error[1].style.opacity = "0";
    reset.style.opacity = "1";
  }
})

// Reset the page to original settings
reset.addEventListener("click", () => {
  tipAmount.innerHTML = "$0.00";
  total.innerHTML = "$0.00";
  bill.value = "";
  customTip.value = "";
  numPeople.value = "";
  reset.style.opacity = "0.1";
  document.querySelectorAll(".tip").forEach(item => {
    item.classList.remove("activeBtn");
  })
})
