document.addEventListener("DOMContentLoaded", function () {
  document.querySelectorAll(".tooltip").forEach(function (el) {
    el.addEventListener("click", function () {
      el.classList.toggle("clicked");
    });
  });
});