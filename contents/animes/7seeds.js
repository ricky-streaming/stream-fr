import { infos, initializeIntro } from "../infos.js";
import { loadSaisons } from "../saison.js";

const container = document.getElementById("container");
const containerSeasons = document.getElementById("seasons");
container.classList.add("hidden!");

initializeIntro("7seeds");

/**
 * @type {{active: boolean, vignettes:(HTMLDivElement)[], links:string[]}[]}
 */
const seasons = [
  [
    "7932043823859893052",
    "9215759542330066001",
    "9215759542330066002",
    "9215759542330066003",
    "9215759542330066004",
    "9215759542330066005",
    "9215759542330066006",
    "9215759542330066007",
    "9215759542330066008",
    "9215759542330066009",
    "9215759542330066010",
    "9215759542330066011",
  ], // saison 1
  [
    "9215759542330065976",
    "9215759542330065977",
    "9215759542330065978",
    "9215759542330065979",
    "9215759542330065980",
    "9215759542330065981",
    "9215759542330065982",
    "9215759542330065983",
    "9215759542330065984",
    "9215759542330065985",
    "9215759542330065986",
    "9215759542330065987",
  ],
].map((el) =>
  el.map((t) => (t ? `https://my.mail.ru/video/embed/${t}` : null)),
);

loadSaisons(seasons, containerSeasons, container);
