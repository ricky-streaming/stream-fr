import { categories } from "../data.js";

/**
 * @type {{name: string, synopsis: string, recommendation?:string}[]}
 */
export const infos = [
  {
    name: "walking-dead",
    synopsis: `Le monde tel que nous le connaissions a disparu. 
    Une épidémie, aux proportions apocalyptiques, s'est abattue sur cette Terre, où les morts se lèvent pour se nourrir 
    des vivants. En quelques mois, la société est tombée en poussières.`,
    recommendation: "-16",
  },
  {
    name: "cyberpunk",
    synopsis: `Cyberpunk: Edgerunners raconte l'histoire d'un enfant des rues qui tente de survivre dans une ville du futur 
    obsédée par la technologie et les modifications corporelles. Ayant tout perdu, il choisit de rester en vie en devenant 
    un edgerunner, un mercenaire hors-la-loi également connu sous le nom de cyberpunk.`,
  },
  {
    name: "athena",
    synopsis: `Quelques heures après la mort tragique de leur plus jeune frère dans des circonstances inexpliquées, 
    la vie de la famille restante est bouleversée. La fratrie se retrouve rapidement dans un chaos qu'elle a du mal 
    à surmonter.`,
    recommendation: "-16",
  },
  {
    name: "equilibrium",
    synopsis: `Dans la cité futuriste de Libria, les émotions n'existent plus, supprimées par l'absorption quotidienne 
    d'une drogue anti-anxiété qui rend les gens plus heureux et plus productifs. 
    John Preston, privé de sa dose, va se révolter contre ce système.`,
  },
  {
    name: "moloch",
    synopsis: `Betriek, une jeune femme de 38 ans, vit avec sa fille Hanna et ses parents dans une maison isolée en 
    lisière d'une tourbière, dans le nord des Pays-Bas. La région est soudainement le théâtre de fouilles archéologiques 
    majeures après la découverte, dans les marécages, de corps de femmes étonnamment bien conservés et présentant tous une 
    profonde entaille verticale à la gorge.`,
    recommendation: "-16",
  },
  {
    name: "Anon",
    synopsis: `Dans un avenir où l'intimité est abolie, un enquêteur se penche sur le profil d'un tueur en série qui a été 
    effacé de tous les enregistrements visuels.`,
  },
  {
    name: "Archive",
    synopsis: `2038: George Almore travaille sur une intelligence artificielle. Son dernier prototype est presque prêt. 
    Cette phase sensible est également la plus risquée. D'autant qu'il a un objectif secret: retrouver sa femme décédée.`,
  },
  {
    name: "segpas",
    synopsis: `Les SEGPA se font virer de leur établissement. À leur grande surprise, ils intègrent le prestigieux 
    collège Franklin D. Roosevelt.
    Le Principal, peu enclin à voir la réputation de son école se détériorer, imagine un stratagème pour virer les SEGPA 
    tout en conservant les aides. Alors qu’ils savourent leur nouvelle vie, lient des amitiés et deviennent de plus en plus 
    populaires, les SEGPA découvrent le projet du Principal. Ils décident alors de tout faire pour déjouer ses manigances...`,
  },
  {
    name: "7seeds",
    synopsis: `Dans un futur proche, une météorite géante est entrée en collision avec la Terre éradiquant toute forme de vie. 
    Les gouvernements, qui avaient anticipé cette catastrophe, cherchent à éviter ce scénario catastrophe avec Projet 7SEEDS, 
    un programme dans lequel cinq groupes de sept jeunes hommes et femmes, soigneusement sélectionnés doivent trouver le moyen
    de survivre sur une île déserte.`,
  },
  {
    name: "Blackhat",
    synopsis: `À Hong Kong, la centrale nucléaire de Chai Wan a été hackée. Un logiciel malveillant a ouvert la porte 
    à un autre malware plus puissant qui a détruit le système de refroidissement de la centrale, provoquant la fissure 
    d'un caisson de confinement et la fusion de son cœur.`,
  },
  {
    name: "i-robot",
    synopsis: `En 2035, les robots sont devenus de parfaits assistants pour les êtres humains. 
    Le détective Del Spooner enquête sur le meurtre du docteur Alfred Lanning, un chercheur en robotique. 
    Le principal suspect semble être un androïde nommé Sonny. Or, si l'on s'en réfère aux lois de la robotique, 
    les robots ne sont pas dotés de la faculté de tuer...`,
  },
];

/**
 *
 * @param {string} searchedName
 */
export function initializeIntro(searchedName) {
  const element = document.getElementsByTagName("h2").item(0);
  const info = _getElement(searchedName);

  if (info && element) {
    element.insertAdjacentHTML(
      "afterend",
      '<p class="hidden intro" id="intro"></p>',
    );
    const name =
      (element.textContent = categories
        .flatMap((el) => el.array)
        .find((el) => el.link.toUpperCase() === info.name.toUpperCase()))?.name
        .split(" ")
        .map((el) => el.charAt(0).toUpperCase() + el.substring(1))
        .join(" ") ?? null;
    console.log(name);

    element.textContent = name;
    element.classList.add("uppercase");
    const intro = document.getElementById("intro");
    intro.classList.remove("hidden");
    intro.textContent = info.synopsis;
    document.title = name;
  } else if (element) {
    element.textContent = searchedName;
    element.classList.add("uppercase");
    document.title = searchedName;
  }
}

export function getInfosFrom(searchedName) {
  return _getElement(searchedName);
}

function _getElement(searchedName) {
  return infos.find(
    (el) =>
      el.name.toUpperCase() === searchedName.toUpperCase() && !!el.synopsis,
  );
}
