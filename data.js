/**
 *
 * @param {{link: string, name: string}} a
 * @param {{link: string, name: string}} b
 */
function sorter(a, b) {
  return a.name.localeCompare(b.name);
}

/**
 * @type {{link: string, name: string}[]}
 */
const animes = [
  { link: "cyberpunk", name: "cyberpunk : edgerunners" },
  { link: "7seeds", name: "7 Seeds" },
].sort(sorter);
/**
 * @type {{link: string, name: string}[]}
 */
const films = [
  { link: "equilibrium", name: "equilibrium" },
  { link: "athena", name: "athena" },
  { link: "moloch", name: "moloch" },
  { link: "segpas", name: "Les segpas" },
].sort(sorter);
/**
 * @type {{link: string, name: string}[]}
 */
const series = [{ link: "walking-dead", name: "the walking dead" }].sort(
  sorter,
);

/**
 * @type {{array: {link: string, name: string}[], name: string, folder:string, consulted:boolean, template: HTMLDivElement | null}[]}
 */
export const categories = [
  {
    array: animes,
    name: "Animés",
    consulted: false,
    template: null,
    folder: "animes",
  },
  {
    array: films,
    name: "Films",
    consulted: false,
    template: null,
    folder: "films",
  },
  {
    array: series,
    name: "Séries",
    consulted: false,
    template: null,
    folder: "series",
  },
];
