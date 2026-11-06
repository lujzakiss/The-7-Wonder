console.log("behavior.js is running");

// first listener
const button = document.getElementById("change-btn");
const title = document.getElementById("changing-title");

function changeTitle() {
    title.textContent = "You can discover above, have fun!";
}

button.addEventListener("click", changeTitle);

// second listener
const button_copy = document.getElementById("copy-btn");
const link = document.getElementById("link");

function copyLink() {
  navigator.clipboard.writeText(link.textContent);
  button_copy.textContent = "Copied!";

  setTimeout(function () {
    button_copy.textContent = "Copy the link";
  }, 2000);
}

button_copy.addEventListener("click", copyLink);
