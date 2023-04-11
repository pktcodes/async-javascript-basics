/* JavaScript is single threaded, synchronous language */

console.log("I'm first");
console.log("I'm second");
console.log("I'm third");

console.log("I'm first");
boilingWater();
console.log("I'm third");

function boilingWater() {
  console.log("boiling...");
  for (let i = 0; i < 100000; i++) {
    console.log("still boiling...");
  }
  console.log("done.");
}
