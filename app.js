/* Make soup */
// boil water for 10 min
// chop carrots
// add carrots boil for 5 min
// chop onions
// add onion boil for 5 min

boilWater(100000);
console.log("chop carrots");
boilWater(5000);
console.log("chop onions");
boilWater(5000);

function boilWater(time) {
  console.log("boiling...");
  for (let i = 0; i < time; i++) {
    console.log("still not done...");
  }
  console.log("done.");
}
