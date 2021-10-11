import { socials, github } from "../Projects.json";

// Footer Section
const footer: HTMLElement = document.createElement("footer");
footer.className = "footer";

// container
const footerContainer: HTMLDivElement = document.createElement("div");
footer.appendChild(footerContainer);
footerContainer.className = "container";

// goto top link
const gotoTop: HTMLAnchorElement = document.createElement("a");
footerContainer.appendChild(gotoTop);
gotoTop.href = "#hero";
gotoTop.className = "back-to-top";

// arrow icon
const arrowIcon: HTMLElement = document.createElement("i");
gotoTop.appendChild(arrowIcon);
arrowIcon.classList.add("fa", "fa-angle-up", "fa-2x");
arrowIcon.ariaHidden = "true";

// social links container
const socialLinks: HTMLDivElement = document.createElement("div");
footerContainer.appendChild(socialLinks);
socialLinks.className = "social-links";

// individual social links
socials.map((social) => {
  const link: HTMLAnchorElement = document.createElement("a");
  socialLinks.appendChild(link);
  link.href = social.href;
  link.target = "_blank";
  link.rel = "noopener noreferrer";
  const icon: HTMLElement = document.createElement("i");
  link.appendChild(icon);
  icon.classList.add(...social.icon);
});

// horizontal ruler
const hr: HTMLHRElement = document.createElement("hr");
footerContainer.appendChild(hr);

// footer text
const footerText: HTMLParagraphElement = document.createElement("p");
footerContainer.appendChild(footerText);
footerText.className = "footer__text";
footerText.textContent = String.fromCharCode(169) + String.fromCharCode(32);

// footer copy year
const year: HTMLSpanElement = document.createElement("span");
footerText.appendChild(year);
year.textContent = new Date().getFullYear().toString();
footerText.insertAdjacentText("beforeend", " - Template by ");
const githubLink: HTMLAnchorElement = document.createElement("a");
footerText.insertAdjacentElement("beforeend", githubLink);
githubLink.href = github;
githubLink.target = "_blank";
githubLink.rel = "noopener noreferrer";
githubLink.textContent = "Anil Seervi";
footerText.insertAdjacentElement("beforeend", document.createElement("br"));
footerText.insertAdjacentText(
  "beforeend",
  `Made with ${String.fromCharCode(9829)}`
);

document.getElementById("contact")?.insertAdjacentElement("afterend", footer);
