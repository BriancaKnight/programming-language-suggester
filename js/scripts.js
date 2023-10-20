// Buisness Logic

function radio(event) {
  event.preventDefault();
  const shinySelect = document.querySelector("input#shinyDull:checked").value;
  // const petSelect = document.querySelector("input[name='petNoPet']:checked").value;
  // const rSelect = document.querySelector("input[name='letter']:checked").value;
  // const fabergeSelect = document.querySelector("input[name='faberge']:checked").value;
  // const tasteSelect = document.querySelector("input[name='taste']:checked").value;
  console.log(shinySelect)
  // console.log(petSelect)
  // console.log(rSelect)
  // console.log(fabergeSelect)
  // console.log(tasteSelect)
}


// User Interface logic

let answer;
  if (shinySelect === true){
    answer = "Ruby";
    document.getElementById("result").innerText = answer;
    document.getElementById("resultDisplay").removeAttribute("class");
  } else if (shinySelect === false){
    answer = "Rust";
    document.getElementById("result").innerText = answer;
    document.getElementById("resultDisplay").removeAttribute("class");
  }


window.addEventListener("load", function () {
  let form = document.getElementById("shinyDull");
  form.addEventListener("submit", radio);
});



// // if (shinySelect && petSelect && rSelect && fabergeSelect && tasteSelect) {
//   if ((shinySelect === true) && (petSelect === false) && (rSelect === true) && (fabergeSelect === true) && (tasteSelect === true)){
//     answer = "Ruby";
//     document.getElementById("result").innerText = answer;
//   }