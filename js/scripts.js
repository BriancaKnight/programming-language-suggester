// Buisness Logic

function submit(event) {
  event.preventDefault();
// code to process values
}


// User Interface logic
window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", submit)
})