const card1 = document.querySelector(".main-card");
const card2 = document.querySelector(".main-card2");
const button = document.getElementById("button");
const choice = document.querySelectorAll(".choice");
const h4 = document.getElementById("h4");
button.addEventListener("click", () => {
  card1.style.display = "none";
  card2.style.display = "flex";
});

for (let i = 0; i < choice.length; i++) {
  choice[i].addEventListener("click", () => {
    if (choice[i].classList.contains("open")) {
      choice[i].style.backgroundColor = "";
      choice[i].style.color = "";
      choice[i].classList = "choice";
    } else {
      choice[i].style.backgroundColor = "#7C8798";
      choice[i].style.color = "#ffff";
      h4.textContent = "You selected " + choice[i].textContent + " out of 5";
      choice[i].classList = "open";
    }
    for (let k = 0; k < choice.length; k++) {
      if (choice[k].classList.contains("open") && choice[k] !== choice[i]) {
        choice[k].style.backgroundColor = "";
        choice[k].style.color = "";
        choice[k].classList = "choice";
      }
    }
  });
}
