// Buisness Logic

function Radio(event) {
  event.preventDefault();
  const shinySelect = document.querySelector("input[name='shinyDull']:checked").value;
  const petSelect = document.querySelector("input[name='petNoPet']:checked").value;
  const rSelect = document.querySelector("input[name='letter']:checked").value;
  const fabergeSelect = document.querySelector("input[name='faberge']:checked").value;
  const tasteSelect = document.querySelector("input[name='taste']:checked").value;
  console.log(shinySelect)
  console.log(petSelect)
  console.log(rSelect)
  console.log(fabergeSelect)
  console.log(tasteSelect)
}


// User Interface logic

let answer;
if (shinySelect && petSelect && rSelect && fabergeSelect && tasteSelect) {
  if ((shinySelect === true) && (petSelect === false) && (rSelect === true) && (fabergeSelect === true) && (tasteSelect === true)){
    answer = "Ruby";
    document.getElementById("result").innerText = answer;
  }
}


window.addEventListener("load", function () {
  let form = document.querySelector("form");
  form.addEventListener("submit", Radio)
})