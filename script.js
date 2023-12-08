var count = 0;

function toggleVisibility() {
  var hiddenDiv = document.getElementById("hiddenDiv");
  if (hiddenDiv.style.display === "none") {
    hiddenDiv.style.display = "block";
  } else {
    hiddenDiv.style.display = "none";
  }
}

function changeColor() {
  document.body.style.backgroundColor = getRandomColor();
}

function increaseCounter() {
  count++;
  document.getElementById("count").innerText = count;
}
function increaseCounter1() {
  count--;
  document.getElementById("count").innerText = count;
}

function getRandomColor() {
  var letters = '0123456789ABCDEF';
  var color = '#';
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}
