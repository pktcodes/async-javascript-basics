// callbacks, promises, async/await

const heading1 = document.querySelector(".heading-1");
const heading2 = document.querySelector(".heading-2");
const heading3 = document.querySelector(".heading-3");
const imgContainer = document.querySelector(".img-container");
const btn = document.querySelector(".btn");

const url = "https://picsum.photos/1000 ";

btn.addEventListener("click", () => {
  loadImage(url)
    .then((data) => imgContainer.appendChild(data))
    .catch((error) => {
      console.log(error);
    });
});

function loadImage(url) {
  const promise = new Promise((resolve, reject) => {
    const img = new Image();
    img.addEventListener("load", () => {
      resolve(img);
    });
    img.addEventListener("error", () => {
      reject(new Error(`Failed to load image from the source: ${url}`));
    });
    img.src = url;
  });
  return promise;
}
