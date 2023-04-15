// callbacks, promises, async/await
// what if
//  no resolve - then will no execute
//  one is rejected - dependent functionality will get ignored

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const btn = document.querySelector(".btn");

btn.addEventListener("click", () =>
  addColor(1000, heading1, "red")
    .then(() => addColor(2000, heading2, "green"))
    .then(() => addColor(1000, heading3, "blue"))
    .catch((error) => console.log(error))
);

function addColor(time, element, color) {
  return new Promise((resolve, reject) => {
    if (element) {
      setTimeout(() => {
        element.style.color = color;
        resolve();
      }, time);
    } else {
      reject(new Error(`There is no such element ${element}`));
    }
  });
}
