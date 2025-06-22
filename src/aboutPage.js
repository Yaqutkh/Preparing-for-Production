
import { createImage } from "./components/imageComponent.js";

import aboutPageImage from "url:../images/aboutImage.png";

export const renderAboutPage = () => {
  const main = document.querySelector("main");
  main.innerHTML = "";

  const aboutContainer = document.createElement("div");
  aboutContainer.classList.add("aboutContainer");

  const aboutTitle = document.createElement("h2");
  aboutTitle.textContent = "About Study Night";

  const aboutText = document.createElement("p");
  aboutText.textContent =
    "Study Night is your companion in academic excellence. Whether you're preparing for a final exam or just revising today's lecture, our tools are designed to help you create, manage, and master flashcards with ease. Dive into a smarter way to study!";

  const aboutImage = createImage(aboutPageImage, "Child Studying");

  const textContainer = document.createElement("div");
  textContainer.classList.add("textContainer");
  textContainer.appendChild(aboutTitle);
  textContainer.appendChild(aboutText);

  aboutContainer.appendChild(aboutImage);
  aboutContainer.appendChild(textContainer);

  main.appendChild(aboutContainer);
};