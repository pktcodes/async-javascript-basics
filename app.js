/* Make soup */
// boil water for 10 min
// chop carrots
// add carrots boil for 5 min
// chop onions
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// These are coming from browser not JavaScript. So, JavaScript gives this functionality to browser to handle, once it's doneit comes to JavaScript to execute if it is not busy

boilWater();
console.log("chop carrots");

function boilWater() {
  console.log("boiling...");
  setTimeout(() => {
    console.log("boiling water done.");
    console.log("add carrots, boiling...");
    setTimeout(() => {
      console.log("carrots are done");
      console.log("add onions, boiling...");
      setTimeout(() => {
        console.log("onions are done");
      }, 5000);
    }, 5000);
    console.log("chop onions");
  }, 10000);
}

// The more things we need to run sequentially, the more nesting callbacks it becomes, which is hard to understand i.e. callback hell
