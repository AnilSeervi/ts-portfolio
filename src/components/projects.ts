import { projects as data } from "../Projects.json";

// Projects Section
export const projects: HTMLElement = document.createElement("section");
projects.id = "projects";

// projects container
const container: HTMLDivElement = document.createElement("div");
projects.appendChild(container);
container.className = "container";

// projects wrapper
const wrapper: HTMLDivElement = document.createElement("div");
container.appendChild(wrapper);
wrapper.className = "project-wrapper";

// projects heading
const h2: HTMLHeadingElement = document.createElement("h2");
wrapper.appendChild(h2);
h2.classList.add("section-title", "dark-blue-text");
h2.textContent = "Projects";

// individual projects
data.map((item) => {
  const row: HTMLDivElement = document.createElement("div");
  wrapper.appendChild(row);
  row.className = "row";
  const textWrapper: HTMLDivElement = document.createElement("div");
  row.appendChild(textWrapper);
  textWrapper.className = "project-wrapper__text";
  const title: HTMLParagraphElement = document.createElement("p");
  textWrapper.appendChild(title);
  title.className = "project-wrapper__text-title";
  title.textContent = item.title;
  item.info.map((para) => {
    const p: HTMLParagraphElement = document.createElement("p");
    textWrapper.appendChild(p);
    p.className = "project-wrapper__text-info";
    p.textContent = para;
  });
  const btnsWrapper: HTMLDivElement = document.createElement("div");
  textWrapper.appendChild(btnsWrapper);
  btnsWrapper.className = "project-wrapper__text-btns";

  // live link
  const liveBtnLink: HTMLAnchorElement = document.createElement("a");
  btnsWrapper.appendChild(liveBtnLink);
  liveBtnLink.classList.add("cta-btn", "cta-btn--hero", "cta-btn--projects");
  liveBtnLink.href = item.liveAt;
  liveBtnLink.target = "_blank";
  liveBtnLink.rel = "noopener noreferrer";
  liveBtnLink.textContent = "See Live";

  //  source code link
  const sourceBtnLink: HTMLAnchorElement = document.createElement("a");
  btnsWrapper.appendChild(sourceBtnLink);
  sourceBtnLink.classList.add("cta-btn", "text-color-main");
  sourceBtnLink.href = item.sourceCode;
  sourceBtnLink.target = "_blank";
  sourceBtnLink.rel = "noopener noreferrer";
  sourceBtnLink.textContent = "Source Code";

  // image
  const imageWrapper: HTMLDivElement = document.createElement("div");
  row.appendChild(imageWrapper);
  imageWrapper.className = "project-wrapper__image";
  const imageLiveLink: HTMLAnchorElement = document.createElement("a");
  imageWrapper.appendChild(imageLiveLink);
  imageLiveLink.href = item.liveAt;
  imageLiveLink.target = "_blank";
  imageLiveLink.rel = "noopener noreferrer";

  // image thumbnail
  const imageThumbnail: HTMLDivElement = document.createElement("div");
  imageLiveLink.appendChild(imageThumbnail);
  imageThumbnail.classList.add("thumbnail", "rounded");

  // image
  const displayImg: HTMLImageElement = document.createElement("img");
  imageThumbnail.appendChild(displayImg);
  displayImg.loading = "lazy";
  displayImg.src = item.image;
  displayImg.className = "img-fluid";
  displayImg.alt = item.title + " Project Image";
  displayImg.title = item.title;
});

document.getElementById("about")?.insertAdjacentElement("afterend", projects);
