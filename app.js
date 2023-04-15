// callbacks, promises, async/await
// must have async to use await
// await waits till promise is settled i.e either resolved or rejected
// error handling - try/catch
// async function by itself always returns a promise so we can use .then on it

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const btn = document.querySelector(".btn");

/* Async/Await Syntax */
// async function someFunction() {
//   await
// }

// const otherFunction = async () => {
//   await
// };

btn.addEventListener("click", async () => {
  // displayColor().then((data) => {
  //   console.log(data);
  // });

  const result = await displayColor();
  console.log(result);
});

/* This returns a promise */
async function displayColor() {
  try {
    const first = await addColor(1000, heading1, "red");
    await addColor(2000, heading2, "green");
    await addColor(1000, heading3, "blue");
    console.log(first);
  } catch (error) {
    console.log(error);
  }
  return "hello";
}

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
