// Buisness Logic


function radio(event) {
  event.preventDefault();
  const shinySelect = document.querySelector("input[name='shinyDull']:checked").value;
  const petSelect = document.querySelector("input[name='petNoPet']:checked").value;
  const rSelect = document.querySelector("input[name='letter']:checked").value;
  const fabergeSelect = document.querySelector("input[name='faberge']:checked").value;
  const tasteSelect = document.querySelector("input[name='taste']:checked").value;


if (shinySelect === "yes" && petSelect === "no" && rSelect === "yes" && fabergeSelect === "yes" && tasteSelect === "yes"){
  answer = "Ruby";
  document.getElementById("result").innerText = answer;
  document.getElementById("resultDisplay").removeAttribute("class");
} else if (shinySelect === "yes" && petSelect === "yes" && rSelect === "no" && fabergeSelect === "yes" && tasteSelect === "no"){
  answer = "Python";
  document.getElementById("result").innerText = answer;
  document.getElementById("resultDisplay").removeAttribute("class");
} else if (shinySelect === "no" && petSelect === "no" && rSelect === "yes" && fabergeSelect === "no" && tasteSelect === "no"){
  answer = "Rust";
  document.getElementById("result").innerText = answer;
  document.getElementById("resultDisplay").removeAttribute("class");
} else if (petSelect === "no"){
  answer = "Python"
  document.getElementById("result").innerText = answer;
  document.getElementById("resultDisplay").removeAttribute("class");
} else if (tasteSelect === "yes"){
  answer = "Ruby"
  document.getElementById("result").innerText = answer;
  document.getElementById("resultDisplay").removeAttribute("class");
} else if (shinySelect === "no"){
  answer = "Ruby"
  document.getElementById("result").innerText = answer;
  document.getElementById("resultDisplay").removeAttribute("class");

// } else if (petSelect === "no"){
//   answer = "Python"
//   document.getElementById("result").innerText = answer;
//   document.getElementById("resultDisplay").removeAttribute("class");
// } else if (tasteSelect === "yes"){
//   answer = "Ruby"
//   document.getElementById("result").innerText = answer;
//   document.getElementById("resultDisplay").removeAttribute("class");
// } else if (shinySelect === "no"){
//   answer = "Ruby"
//   document.getElementById("result").innerText = answer;
//   document.getElementById("resultDisplay").removeAttribute("class");
// }
}

window.addEventListener("load", function() {
  document.getElementById("shinyDullForm").addEventListener("submit", radio);
});
