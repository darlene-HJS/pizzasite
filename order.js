document.addEventListener("DOMContentLoaded", function () {
    var pizzaPrice = 900.00;
    const checkboxes = document.querySelectorAll("input[type='checkbox']");
    const totalAmountElement = document.getElementById("total-amount");
  
    checkboxes.forEach(function (checkbox) {
      checkbox.addEventListener("change", function () {
        let totalAmount = 0;
        checkboxes.forEach(function (checkbox) {
          if (checkbox.checked) {
            totalAmount += parseFloat(checkbox.getAttribute("data-price"));
          }
        });
        totalAmount += pizzaPrice;
        totalAmountElement.textContent = totalAmount.toFixed(2);
      });
    });
  });