/**
 *
 * @param {{active: boolean, vignettes:(HTMLDivElement)[], links:string[]}[]} arr
 * @param {number} index
 * @param {HTMLElement} container
 */
function changeSeason(arr, index, container) {
  const indexCurrentSeason = arr.findIndex((el) => el.active);
  if (container.classList.contains("hidden!")) {
    container.classList.remove("hidden!");
  }
  if (indexCurrentSeason === -1) {
    arr[index].active = true;
    arr[index].vignettes.forEach((el) => {
      el.classList.remove("hidden");
    });

    document.getElementById(`saison_${index + 1}`).classList.add("active");
  } else if (index != indexCurrentSeason) {
    document.getElementById(`saison_${index + 1}`).classList.add("active");
    document
      .getElementById(`saison_${indexCurrentSeason + 1}`)
      .classList.remove("active");
    arr[indexCurrentSeason].vignettes.forEach((el) => {
      el.classList.add("hidden");
    });
    arr[indexCurrentSeason].active = false;
    arr[index].active = true;
    arr[index].vignettes.forEach((el) => {
      el.classList.remove("hidden");
    });
  }
}

/**
 * @param {(string | null)[][]} seasons
 * @param {HTMLElement} containerSeasons
 * @param {HTMLElement} container
 */
export function loadSaisons(seasons, containerSeasons, container) {
  /**
   * @type {{active: boolean, vignettes:(HTMLDivElement)[], links:string[]}[]}
   */
  const realSeasons = seasons.map((el) => ({
    active: false,
    vignettes: [],
    links: el,
  }));

  realSeasons.forEach((el, index, arr) => {
    const saison = document.createElement("span");
    saison.textContent = `Saison ${index + 1}`;
    saison.id = `saison_${index + 1}`;
    saison.classList.add("linker");
    saison.role = "button";

    containerSeasons.appendChild(saison);
    const urls = el.links;
    const vignettes = urls.map((el, index, arr) => {
      const div = document.createElement("div");
      const iframe = document.createElement("iframe");
      if (el) {
        iframe.src = el;
      }
      iframe.frameBorder = "0";
      iframe.height = "125";
      iframe.width = "300";
      iframe.scrolling = "no";
      iframe.webkitallowfullscreen = true;
      iframe.mozallowfullscreen = true;
      iframe.allowFullscreen = true;

      const indexLastRow = (index / 4) | 0;
      if (arr.length % 4 !== 0 && indexLastRow === ((arr.length / 4) | 0)) {
        const nbElementsInLastRow = arr.length % 4;
        switch (nbElementsInLastRow) {
          case 1:
            div.classList.add("col-span-4", "justify-self-center");
            break;
          case 2:
            div.classList.add("col-span-2", "justify-self-center");
            break;
          default:
            if (index % 4 === 0) {
              div.classList.add("justify-self-start");
            } else {
              div.classList.add("justify-self-center");
            }
            break;
        }
      } else {
        switch (index % 4) {
          case 0:
            div.classList.add("justify-self-start");
            break;
          case 3:
            div.classList.add("justify-self-end");
            break;
          default:
            div.classList.add("justify-self-center");
            break;
        }
      }

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
        "bg-gray-500",
        "rounded-lg",
      );
      div.classList.add("hidden");
      container.appendChild(div);
      return div;
    });
    el.vignettes = vignettes;

    saison.addEventListener("click", () => {
      changeSeason(arr, index, container);
    });
  });
  setTimeout(() => changeSeason(realSeasons, 0, container), 500);
}
