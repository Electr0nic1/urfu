const formToggle = document.getElementById("form-toggle");

const fullTimeEnrollment = document.getElementById("full-time_enrollment");
const distanceEnrollment = document.getElementById("distance_enrollment");
const fullTimeEntrance = document.getElementById("full-time_entrance");
const distanceEntrance = document.getElementById("distance_entrance");
const distanceText = document.querySelectorAll(".distance_text");

const budgetText = document.getElementById("budget_text");
const contractText = document.getElementById("contract_text");

formToggle.addEventListener("change", function () {
  if (this.checked) {
    distanceText.forEach((item) => {
      item.textContent = "Очно-заочная и заочная формы обучения:";
    });
    fullTimeEnrollment.textContent = "20.06 - 23.09";
    distanceEnrollment.textContent = "20.06 - 28.10";
    fullTimeEntrance.textContent = "04.07 - 13.08 и 22.08 - 24.09";
    distanceEntrance.textContent = "04.07 - 13.08 и 22.08 - 29.10";

    contractText.classList.add("form-toggle__text--active");
    budgetText.classList.remove("form-toggle__text--active");
  } else {
    distanceText.forEach((item) => {
      item.textContent = "Очно-заочная форма обучения:";
    });
    fullTimeEnrollment.textContent = "20.06 - 08.08";
    distanceEnrollment.textContent = "20.06 - 08.08";
    fullTimeEntrance.textContent = "04.07 - 13.08";
    distanceEntrance.textContent = "04.07 - 13.09 и 22.08 - 12.09";

    budgetText.classList.add("form-toggle__text--active");
    contractText.classList.remove("form-toggle__text--active");
  }
});
