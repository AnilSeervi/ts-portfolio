import { email } from "../Projects.json";

// Contact Section
export const contact: HTMLElement = document.createElement("section");
contact.id = "contact";

// contact container
const contactContainer: HTMLDivElement = document.createElement("div");
contact.appendChild(contactContainer);
contactContainer.className = "container";

// contact heading
const h2: HTMLHeadingElement = document.createElement("h2");
contactContainer.appendChild(h2);
h2.className = "section-title";
h2.textContent = "Contact";

// contact wrapper
const wrapper: HTMLDivElement = document.createElement("div");
contactContainer.appendChild(wrapper);
wrapper.className = "contact-wrapper";

// wrapper text
const p: HTMLParagraphElement = document.createElement("p");
wrapper.appendChild(p);
p.className = "contact-wrapper__text";
p.textContent = "Have something for me to build?";

// contact CTA
const cta: HTMLAnchorElement = document.createElement("a");
wrapper.appendChild(cta);
cta.classList.add("cta-btn", "cta-btn--resume");
cta.href = "mailto:" + email;
cta.textContent = "Let's get building!";

document.getElementById("projects")?.insertAdjacentElement("afterend", contact);
