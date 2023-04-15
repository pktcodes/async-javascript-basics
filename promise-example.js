// callbacks, promises, async/await
// PROMISES - Pending, Resolved, Rejected
// then catch - pass another callback

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () => {
  console.log("You clicked the button.");
});

/* Promise */
const promise = new Promise((resolve, reject) => {
  const value = false;
  if (value) {
    resolve("The value is true");
  } else {
    reject("there was a error, value is false");
  }
});

promise
  .then((result) => {
    console.log(result);
  })
  .catch((error) => {
    console.log(error);
  });

console.log(promise);
