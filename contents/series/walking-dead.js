import { infos, initializeIntro } from "../infos.js";
import { loadSaisons } from "../saison.js";

const container = document.getElementById("container");
const containerSeasons = document.getElementById("seasons");
container.classList.add("hidden!");

initializeIntro("The Walking Dead");

/**
 * @type {{active: boolean, vignettes:(HTMLDivElement)[], links:string[]}[]}
 */
const seasons = [
  ["755985", "757913", "757945", "757962", "757976", "757997"], // saison 1
  [
    "758013",
    "758035",
    "758584",
    "783006",
    "758618",
    "758631",
    "758664",
    "758690",
    "758697",
    "758709",
    "758724",
    "759288",
    "759310",
  ],

  [
    "817631",
    "773460",
    "777725",
    "780099",
    "786496",
    "788603",
    "789447",
    "796097",
    "813237",
    "817692",
    "823041",
    "833758",
    "834615",
    "835047",
    "836638",
    "837068",
  ],

  ["839104", "843721", "871310", "878941", "888215", "890257", "904668"],
].map((el) => el.map((t) => `https://www.tokyvideo.com/fr/embed/${t}`));

loadSaisons(seasons, containerSeasons, container);
