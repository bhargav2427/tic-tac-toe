var boxes = document.getElementsByClassName("container-item");
var t = 1; //t stands for try
// console.log(boxes);
var i = 0;
while (boxes[i] != undefined) {
  boxes[i].addEventListener("click", function () {
    draw(this);
    check(this);
  });
  i++;
}

var row, diagonal;

// if t is odd then player 1
// if t is even then player 2
function draw(x) {
  // var node = document.getElementById(x.id);
  // var childnode = document.createElement("span");
  // var x = node.appendChild(childnode);
  // node.style.pointerEvents = "none";
  // x = x.chilren[0];
  if (t % 2 == 1) {
    x.innerHTML = "&#10060";
    x.style.pointerEvents = "none";
    x.style.fontSize = "70px";
  } else {
    x.innerHTML = "&#9675";
    x.style.fontSize = "85px";
    x.style.pointerEvents = "none";
  }
  t++;
}

function check(x) {
  if (checkRow(x) || checkColumn(x) || checkDiagonal(x)) {
    if ((t - 1) % 2 == 0) {
      alert("&#9675" + "won");
    }
  }
}

function checkRow(x) {
  var id = parseInt(x.id);
  if (id % 3 == 1) {
    row = [
      document.getElementById(id + "").firstChild.nodeValue,
      document.getElementById(id + 1 + "").firstChild.nodeValue,
      document.getElementById(id + 2 + "").firstChild.nodeValue,
    ];

    if (row[0] == row[1] && row[1] == row[2]) {
      return true;
    }
  }

  if (id % 3 == 2) {
    row = [
      document.getElementById(id + "").firstChild.nodeValue,
      document.getElementById(id - 1 + "").firstChild.nodeValue,
      document.getElementById(id + 1 + "").firstChild.nodeValue,
    ];
    if (row[0] == row[1] && row[1] == row[2]) {
      return true;
    }
  }
  if (id % 3 == 0) {
    row = [
      document.getElementById(id + "").firstChild.nodeValue,
      document.getElementById(id - 1 + "").firstChild.nodeValue,
      document.getElementById(id - 2 + "").firstChild.nodeValue,
    ];
    if (row[0] == row[1] && row[1] == row[2]) {
      return true;
    }
  }
  return false;
}

function checkColumn(x) {
  var id = parseInt(x.id);
  if (id < 4) {
    row = [
      document.getElementById(id + "").firstChild.nodeValue,
      document.getElementById(id + 3 + "").firstChild.nodeValue,
      document.getElementById(id + 6 + "").firstChild.nodeValue,
    ];
    if (row[0] == row[1] && row[1] == row[2]) {
      return true;
    }
  }
  if (id < 7 && id > 3) {
    row = [
      document.getElementById(id + "").firstChild.nodeValue,
      document.getElementById(id - 3 + "").firstChild.nodeValue,
      document.getElementById(id + 3 + "").firstChild.nodeValue,
    ];
    if (row[0] == row[1] && row[1] == row[2]) {
      return true;
    }
  }
  if (id < 10 && id > 6) {
    row = [
      document.getElementById(id + "").firstChild.nodeValue,
      document.getElementById(id - 3 + "").firstChild.nodeValue,
      document.getElementById(id - 6 + "").firstChild.nodeValue,
    ];
    if (row[0] == row[1] && row[1] == row[2]) {
      return true;
    }
  }
  return false;
}

function checkDiagonal(x) {
  var id = parseInt(x.id);
  var ans1, ans2;
  if (id % 2 == 0) {
    return false;
  }
  if (id == 1 || id == 5 || id == 9) {
    diagonal = [
      document.getElementById("1").firstChild.nodeValue,
      document.getElementById("5").firstChild.nodeValue,
      document.getElementById("9").firstChild.nodeValue,
    ];
    if (diagonal[0] == diagonal[1] && diagonal[1] == diagonal[2]) {
      ans1 = true;
    } else {
      ans1 = false;
    }
  }

  if (id == 3 || id == 5 || id == 7) {
    diagonal = [
      document.getElementById("3").firstChild.nodeValue,
      document.getElementById("5").firstChild.nodeValue,
      document.getElementById("7").firstChild.nodeValue,
    ];

    if (diagonal[0] == diagonal[1] && diagonal[1] == diagonal[2]) {
      ans2 = true;
    } else {
      ans2 = false;
    }
  }
  if (ans1 || ans2) {
    return true;
  }
}
