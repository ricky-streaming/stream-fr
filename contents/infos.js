/**
 * @type {{name: string, synopsis: string}[]}
 */
export const infos = [
  {
    name: "The walking dead",
    synopsis: `Le monde tel que nous le connaissions a disparu. 
    Une épidémie, aux proportions apocalyptiques, s'est abattue sur cette Terre, où les morts se lèvent pour se nourrir 
    des vivants. En quelques mois, la société est tombée en poussières.`,
  },
  {
    name: "Cyberpunk:edgerunners",
    synopsis: `Cyberpunk: Edgerunners raconte l'histoire d'un enfant des rues qui tente de survivre dans une ville du futur 
    obsédée par la technologie et les modifications corporelles. Ayant tout perdu, il choisit de rester en vie en devenant 
    un edgerunner, un mercenaire hors-la-loi également connu sous le nom de cyberpunk.`,
  },
  {
    name: "athena",
    synopsis: `Quelques heures après la mort tragique de leur plus jeune frère dans des circonstances inexpliquées, 
    la vie de la famille restante est bouleversée. La fratrie se retrouve rapidement dans un chaos qu'elle a du mal 
    à surmonter.`,
  },
  {
    name: "equilibrium",
    synopsis: `Dans la cité futuriste de Libria, les émotions n'existent plus, supprimées par l'absorption quotidienne 
    d'une drogue anti-anxiété qui rend les gens plus heureux et plus productifs. 
    John Preston, privé de sa dose, va se révolter contre ce système.`,
  },
  {
    name: "moloch",
    synopsis: `Dans une ville industrielle et labyrinthique, située en bord de mer, des inconnus prennent feu de manière 
    inexplicable. Bientôt, sur les murs de la cité portuaire s'affichent six lettres inquiétantes : Moloch. 
    Louise, une jeune journaliste instable et ambitieuse, et Gabriel, un psychiatre ébranlé par le décès de son fils des 
    années plus tôt, mènent l'enquête.`,
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
    de survivre sur une île déserte.`
  }
];

/**
 *
 * @param {string} searchedName
 */
export function initializeIntro(searchedName) {
  const element = document.getElementsByTagName("h2").item(0);
  const info = infos.find(
    (el) =>
      el.name.toUpperCase() === searchedName.toUpperCase() && !!el.synopsis,
  );

  if (info && element) {
    element.insertAdjacentHTML(
      "afterend",
      '<p class="hidden intro" id="intro"></p>',
    );
    const intro = document.getElementById("intro");
    intro.classList.remove("hidden");
    intro.textContent = info.synopsis;
  }
}
