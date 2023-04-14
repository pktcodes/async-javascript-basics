// callbacks, promises, async/await

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const btn = document.querySelector(".btn");

/* Initial Example */
// btn.addEventListener("click", () => {
//   console.log("You clicked the button.");
// });

// console.log("I'm second");
// for (let i = 0; i < 10000; i++) {
//   console.log("I am busy");
// }

/* Second Example - The challenge here second one should start executing once first one completes and same goes for third to second*/
btn.addEventListener("click", () => {
  setTimeout(() => {
    heading1.style.color = "red";
    setTimeout(() => {
      heading2.style.color = "green";
      setTimeout(() => {
        heading3.style.color = "blue";
      }, 1000);
    }, 2000);
  }, 1000);
});
