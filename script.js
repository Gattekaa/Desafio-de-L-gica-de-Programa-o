n = 10
string = "";
for (let i = 0; i < n / 2; i++) {
  for (let j = 0; j < i; j++) {
    if (j === 0) {
      string += "#";
    } else
      string += " ";

  }
  for (let k = 0; k < 2 * (n / 2 - i) - 1; k++) {

    string += "#";
  }
  for (l = 0; l < i; l++) {
    string += " ";
  }
  string += "#";
  string += "\n"
}
for (let i = 1; i <= n / 2; i++) {
  for (let j = 0; j < n / 2 - i; j++) {
    if (j === 0) {
      string += "#";
    } else {
      string += " ";
    }

  }
  for (let k = 0; k < 2 * i - 1; k++) {
    if (i === 1 || i === n / 2) {
      string += "#";
    }
    else {
      if (k === 0 || k === 2 * i - 2) {
        string += "#";
      }
      else {
        string += " ";
      }
    }
  }
  for (l = n / 2; i < l; l--) {
    string += " "
  }
  string += "#"
  string += "\n";
}

console.log(string);