/**
 *
 * @param {string} url
 */
export function loadFilms(url) {
  const container = document.getElementById("container");
  container.classList.add("hidden!");
  const containerSkeleton = document.getElementById("skeleton");

  const iframe = document.createElement("iframe");
  iframe.src = url;
  iframe.frameBorder = "0";
  iframe.scrolling = "no";
  iframe.allowFullscreen = true;
  iframe.addEventListener("load", () => {
    containerSkeleton.remove();
    container.classList.remove("hidden!");
  });
  iframe.classList.add("rounded-lg", "w-full", "h-full");

  container.appendChild(iframe);
}
