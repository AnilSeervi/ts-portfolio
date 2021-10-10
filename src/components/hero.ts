// Hero Section
export const hero: HTMLDivElement = document.createElement("div");
hero.id = "hero";
// Container
const container: HTMLElement = document.createElement("section");
hero.appendChild(container);
container.className = "container";
// h1
const h1: HTMLHeadingElement = document.createElement("h1");
container.appendChild(h1);
h1.className = "hero-title";
h1.textContent = "Hi, my name is ";
// span inside h1
const span: HTMLSpanElement = document.createElement("span");
h1.appendChild(span);
span.classList.add("text-color-main", "name");
span.textContent = "Anil Seervi";
h1.appendChild(document.createElement("br"));
h1.append("I like to design stuff with code.");
// p tag
const p: HTMLParagraphElement = document.createElement("p");
container.appendChild(p);
p.className = "hero-cta";
// a tag
const a: HTMLAnchorElement = document.createElement("a");
p.appendChild(a);
a.classList.add("cta-btn", "cta-btn--hero");
a.href = "#projects";
a.textContent = "My Projects";
// scroll down
const scrollLink: HTMLAnchorElement = document.createElement("a");
container.appendChild(scrollLink);
scrollLink.href = "#about";
scrollLink.className = "scroll-down-link";
const scrollDiv: HTMLDivElement = document.createElement("div");
scrollLink.appendChild(scrollDiv);
scrollDiv.className = "scroll-down";

document.body.prepend(hero);
