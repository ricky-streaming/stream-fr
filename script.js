import { categories } from "./data.js";

const containerCategories = document.createElement("h2");
containerCategories.id = "categories";

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
  divInfos.classList.add(
    "grid",
    "grid-cols-5",
    "w-[95%]",
    "bg-gray-600",
    "rounded-lg",
    "p-6",
    "mx-auto",
  );
  el.array.forEach((item) => {
    const linkItem = document.createElement("a");
    linkItem.classList.add("linker");
    const { link, name } = item;
    linkItem.textContent = name.toUpperCase();
    linkItem.role = "button";
    linkItem.href = `contents/${el.folder}/${link}.html`;
    divInfos.appendChild(linkItem);
  });

  el.template = divInfos;

  if (isRelevant) {
    divCat.addEventListener("click", () => displayCategory(el, arr));
  }
});

document.body.appendChild(containerCategories);

/**
 * Affiche une catégorie
 * @param {{array: string[], name: string, consulted:boolean, template: HTMLDivElement | null}} el
 * @param {{array: string[], name: string, consulted:boolean, template: HTMLDivElement | null}[]} arr
 */
function displayCategory(el, arr) {
  const processingCategory = arr.find((el) => el.consulted);
  if (el && processingCategory && el.name === processingCategory.name) {
    return;
  }
  if (processingCategory) {
    const removed = document.body.removeChild(processingCategory.template);
    processingCategory.consulted = false;
    console.log(removed);
  }

  el.consulted = true;
  document.body.appendChild(el.template);
}
