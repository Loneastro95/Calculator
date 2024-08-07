const display = document.getElementById('display');
const equal = document.querySelector('.equal')

const number = document.querySelectorAll(".numbers").forEach(function (item) {
    item.addEventListener("click", function (e) {
      if (display.value === "NaN") {
        display.value = "";
      }
      if (display.value === "0") {
        display.value = "";
      }
      display.value += e.target.innerHTML.trim();
    });
  });

  const calculate = document
  .querySelectorAll(".operations")
  .forEach(function (item) {
    item.addEventListener("click", function (e) {
      display.value += e.target.innerHTML.trim();
    });
  });
  
  equal.addEventListener('click', function(e) {
    if (display.value === '') {
        display.value = "Please enter";
    } else {
        try {
            let answer = eval(display.value);
            display.value = answer;
        } catch (error) {
            display.value = "Error";
        }
    }
});
