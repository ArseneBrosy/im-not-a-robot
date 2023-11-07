function selectImage(id) {
  const btn = document.querySelector(`#${id}`);
  if (btn.classList.contains("selected")) {
    btn.classList.remove("selected");
  } else {
    btn.classList.add("selected");
  }
}

const peoplesAdj = ["Select all little children", "Select all beautiful peoples", "Select all giga chads", "Select all gay peoples"];
let currentAdj = 0;

function nextImageQuestion() {
  for (let i = 0; i < 10; i++) {
    document.querySelector(`#image${i}`).classList.remove("selected");
  }

  document.querySelector("#adjectives").innerHTML = peoplesAdj[currentAdj];
  currentAdj ++;

  for (let i = 0; i < 10; i++) {
    document.querySelector(`#image${i}`).classList.remove("selected");
  }
}