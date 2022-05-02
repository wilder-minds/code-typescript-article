let a = "Shawn";
console.log(typeof a); // string
a = 1;
console.log(typeof a); // number

function writeName(name) {
  if (name) { // Could be undefined
    console.log(name);
  }
}

writeName("Bob");
writeName();