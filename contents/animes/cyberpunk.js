import { initializeIntro } from "../infos.js";

const container = document.getElementById("container");
const containerSkeleton = document.getElementById("skeleton");
initializeIntro("Cyberpunk:edgerunners");

container.classList.add("hidden!");

let loaded = 0;
const urls = [
  "547463",
  "547464",
  "547479",
  "547480",
  "547481",
  "547484",
  "547486",
  "547489",
  "547492",
  "547494",
];
urls.forEach((el, index, arr) => {
  const divSkeleton = document.createElement("div");
  divSkeleton.classList.add("skeleton-vignette");
  containerSkeleton.appendChild(divSkeleton);

  const div = document.createElement("div");
  const iframe = document.createElement("iframe");
  iframe.src = `https://www.tokyvideo.com/fr/embed/${el}`;
  iframe.frameBorder = "0";
  iframe.height = "125";
  iframe.width = "300";
  iframe.scrolling = "no";
  iframe.allowFullscreen = true;
  iframe.addEventListener("load", () => {
    loaded++;

    if (loaded === urls.length) {
      containerSkeleton.remove();
      container.classList.remove("hidden!");
    }
  });

  const indexLastRow = (index / 4) | 0;
  if (arr.length % 4 !== 0 && indexLastRow === ((arr.length / 4) | 0)) {
    const nbElementsInLastRow = arr.length % 4;
    switch (nbElementsInLastRow) {
      case 1:
        div.classList.add("col-span-4", "justify-self-center");
        divSkeleton.classList.add("col-span-4", "justify-self-center");
        break;
      case 2:
        div.classList.add("col-span-2", "justify-self-center");
        divSkeleton.classList.add("col-span-2", "justify-self-center");
        break;
      default:
        if (index % 4 === 0) {
          div.classList.add("justify-self-start");
          divSkeleton.classList.add("justify-self-start");
        } else {
          div.classList.add("justify-self-center");
          divSkeleton.classList.add("justify-self-center");
        }
        break;
    }
  } else {
    switch (index % 4) {
      case 0:
        div.classList.add("justify-self-start");
        divSkeleton.classList.add("justify-self-start");
        break;
      case 3:
        div.classList.add("justify-self-end");
        divSkeleton.classList.add("justify-self-end");
        break;
      default:
        div.classList.add("justify-self-center");
        divSkeleton.classList.add("justify-self-center");
        break;
    }
  }
  divSkeleton.classList.add(
    "flex",
    "flex-col",
    "gap-1",
    "p-1",
    "bg-gray-600",
    "rounded-lg",
  );
  div.appendChild(iframe);
  const span = document.createElement("span");
  const episodeName = `Episode ${index + 1}`;
  span.textContent = episodeName;
  div.appendChild(span);
  span.classList.add("text-center");
  div.classList.add(
    "flex",
    "flex-col",
    "gap-1",
    "p-1",
    "bg-gray-100",
    "rounded-lg",
  );
  container.appendChild(div);
});
