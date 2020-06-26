function Circle(el) {
  $(el)
    .circleProgress({ fill: { color: "#ffcd24" } })
    .on("circle-animation-progress", function (event, progress, stepValue) {
      $(this)
        .find("strong")
        .text(String(stepValue.toFixed(0)) + "%");
    });
}

Circle(".round");

(function () {
  emailjs.init("user_E43Rn5N9bcNkea4Jd11HC");
})();

window.onload = function () {
  document
    .getElementById("contact-form")
    .addEventListener("submit", function (event) {
      event.preventDefault();
      emailjs.sendForm("contact_service", "contact_form", this);
    });
};
