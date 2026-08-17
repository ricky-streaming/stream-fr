import { getInfosFrom } from "./contents/infos.js";
import { categories } from "./data.js";

const containerCategories = document.createElement("h2");
containerCategories.id = "categories";

let firstToShow = null;

categories.forEach((el, index, arr) => {
  const start = 0;
  const end = arr.length - 1;
  let classPosition = "justify-self-center";
  const divCat = document.createElement("div");
  const divsize = document.createElement("div");
  divCat.classList.add("flex", "gap-2", "rounded-lg", "p-1");
  divsize.classList.add(
    "rounded-lg",
    "bg-white",
    "font-bold",
    "px-1",
    "text-black",
  );
  divsize.textContent = el.array.length;

  const title = document.createElement("span");
  divCat.classList.add(classPosition);
  const isRelevant = el.array.length > 0;
  title.textContent = el.name;
  divCat.appendChild(title);
  divCat.appendChild(divsize);
  if (isRelevant) {
    divCat.role = "button";
  } else {
    divCat.title = "Cet élément ne contient aucune donnée";
    divCat.classList.add("cursor-not-allowed");
  }
  containerCategories.appendChild(divCat);

  const divInfos = document.createElement("div");
  divInfos.classList.add("content-banner");
  el.array.forEach((item, rank) => {
    const linkItem = document.createElement("a");
    linkItem.classList.add("linker");
    const { link, name } = item;

    linkItem.textContent = name.toUpperCase();
    linkItem.role = "button";
    linkItem.href = `contents/${el.folder}/${link}.html`;

    const infos = getInfosFrom(link);
    if (infos) {
      const spanInfos = document.createElement("span");
      spanInfos.classList.add("infobulle");
      if (rank % 4 === 0 && rank > 0) {
        spanInfos.classList.add("end");
      } else {
        spanInfos.classList.add("start");
      }
      spanInfos.textContent = infos.synopsis;
      if (infos.recommendation) {
        const spanReco = document.createElement("span");
        spanReco.classList.add(
          "text-red-500",
          "p-2",
          "absolute",
          "bottom-1",
          "right-1",
          "bg-red-500",
          "text-white!",
          "rounded-full",
          "not-italic",
          "translate-1/2",
        );
        spanReco.textContent = infos.recommendation;
        spanInfos.appendChild(spanReco);
      }
      linkItem.appendChild(spanInfos);
    }
    divInfos.appendChild(linkItem);
  });

  el.template = divInfos;
  el.button = divCat;

  if (isRelevant) {
    divCat.addEventListener("click", () => displayCategory(el, arr));
  }
  if (index === 0) {
    firstToShow = [el, arr];
  }
});

document.body.appendChild(containerCategories);
displayCategory(...firstToShow);

/**
 * Affiche une catégorie
 * @param {{array: string[], name: string, consulted:boolean, template: HTMLDivElement | null, button: HTMLElement | null}} el
 * @param {{array: string[], name: string, consulted:boolean, template: HTMLDivElement | null, button: HTMLElement | null}[]} arr
 */
function displayCategory(el, arr) {
  const processingCategory = arr.find((el) => el.consulted);
  if (el && processingCategory && el.name === processingCategory.name) {
    return;
  }
  if (processingCategory) {
    const removed = document.body.removeChild(processingCategory.template);
    processingCategory.consulted = false;
    processingCategory.button.classList.remove("active");
  }

  el.consulted = true;
  el.button.classList.add("active");
  document.body.appendChild(el.template);
}
