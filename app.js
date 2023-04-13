/* Make soup */
// boil water for 10 min
// chop carrots
// add carrots boil for 5 min
// chop onions
// add onion boil for 5 min
// BROWSER!!!!! Fetch Data, Get Geolocation, setTimeout, setTimer etc
// These are coming from browser not JavaScript. So, JavaScript gives this functionality to browser to handle, once it's doneit comes to JavaScript to execute if it is not busy

boilWater(0);
console.log("chop carrots");
for (let i = 0; i < 10000; i++) {
  console.log("JavaScript: I am busy");
}

function boilWater(time) {
  console.log("boiling...");
  setTimeout(() => {
    console.log("done.");
  }, time);
  // here time is the minimum, if javascript is busy then browser might wait until JavaScript is free
}

// JavaScript is still single threaded and synchronous, by giving the work to browser, it kind of works asynchronously - to make things happen background.
