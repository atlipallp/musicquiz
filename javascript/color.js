function openColor(buttonID, text) {
  let b = document.getElementById(buttonID);
  if (b.innerHTML === "") {
    b.innerHTML = text;
  } else {
    b.innerHTML = "";
  }
} 

