var boxes = document.getElementsByClassName("container-item");
var t = 1; //t stands for try
console.log(boxes);
var i = 0;
while (boxes[i] != undefined) {
  boxes[i].addEventListener("click", function () {
    draw(this);
    check(this);
  });
  i++;
}

var row;

// if t is odd then player 1
// if t is even then player 2
function draw(x) {
  var node = document.getElementById(x.id);
  var childnode = document.createElement("span");
  var x = node.appendChild(childnode);
  node.style.pointerEvents = "none";

  if (t % 2 == 1) {
    x.innerHTML = "&#10060";
    x.style.pointerEvents = "none";
    x.style.fontSize = "70px";
  } else {
    console.log(x.id);
    x.innerHTML = "&#9675";
    x.style.fontSize = "85px";
    x.style.pointerEvents = "none";
  }
  t++;
}

function check(x) {
  if (getRow(x)) {
    console.log("Row Done");
  }
}

function getRow(x) {
  var id = parseInt(x.id);
  if (id % 3 == 1) {
    row = [
      document.getElementById("" + id).innerHTML,
      document.getElementById(id + 1 + "").innerHTML,
      document.getElementById(id + 2 + "").innerHTML,
    ];
  }
  return true;
}
