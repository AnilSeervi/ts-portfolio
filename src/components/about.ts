import Profile from "../assets/profile.jpg";
// about section
export const about: HTMLElement = document.createElement("section");
about.id = "about";
// Container
const container: HTMLDivElement = document.createElement("div");
about.appendChild(container);
container.className = "container";
// About Me h2
const h2: HTMLHeadingElement = document.createElement("h2");
container.appendChild(h2);
h2.className = "section-title";
h2.textContent = "About Me";
// about wrapper
const wrapper: HTMLDivElement = document.createElement("div");
container.appendChild(wrapper);
wrapper.classList.add("row", "about-wrapper");
// about image wrapper
const imageWrapper: HTMLDivElement = document.createElement("div");
wrapper.appendChild(imageWrapper);
imageWrapper.className = "about-wrapper__image";
// about you image
const img: HTMLImageElement = document.createElement("img");
imageWrapper.appendChild(img);
img.className = "img-fuild";
img.src = Profile;
img.alt = "Profile Image";
// about info wrapper
const infoWrapper: HTMLDivElement = document.createElement("div");
wrapper.appendChild(infoWrapper);
infoWrapper.className = "about-wrapper__info";
// info text
const infoText: string[] = [
  "I am a self-taught Web Developer specialized in Design and the Front-End Development.",
  "I'm passionate about technology and enjoy nothing more than learning the new trends and implementing it in the web development to make life much easier and nicer.",
  "Basically I like to code to develop some nice and cool looking responsive Websites",
  "Feel free to reach out to me through any platform.",
];
infoText.map((text) => {
  const p: HTMLParagraphElement = document.createElement("p");
  infoWrapper.appendChild(p);
  p.className = "about-wrapper__info-text";
  p.textContent = text;
});
// about wrapper CTA
const cta: HTMLSpanElement = document.createElement("span");
infoWrapper.appendChild(cta);
cta.className = "about-wrapper__cta";
// cta link
const ctaLink: HTMLAnchorElement = document.createElement("a");
cta.appendChild(ctaLink);
ctaLink.href = "https://github.com/AnilSeervi";
ctaLink.classList.add("cta-btn", "cta-btn--resume");
ctaLink.target = "_blank";
ctaLink.rel = "noopener noreferrer";
ctaLink.textContent = "View My GitHub";

document.getElementById("hero")?.insertAdjacentElement("afterend", about);
