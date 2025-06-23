import { renderCardSetsPage } from "./cardSetsPage.js";
import { showError } from "./errors.js";
import {
  createLabel,
  createInput,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

const createSetForm = (setCards) => {
  const section = document.createElement("section");
  section.id = "create-set-section";
  section.classList.add("hidden"); 

  const form = document.createElement("form");
  form.setAttribute("data-cy", "create-set-form");

  const label = createLabel("titleInput", "Card Set Title");
  const input = createInput("titleInput", "titleInput");
  input.setAttribute("data-cy", "create-set-input");
  const submitButton = createSubmitButton("Submit Set");
  submitButton.setAttribute("data-cy", "create-set-submit");

  form.addEventListener("submit", (e) => submitSet(e, setCards));

  form.append(label, input, submitButton);
  section.appendChild(form);

  return section;
};

const submitSet = (e, setCards) => {
  e.preventDefault();

  const title = e.target.titleInput.value.trim();

  if (!title) {
    showError("error: TITLE CANNOT BE EMPTY");
  } else {
    const id = setCards.length ? setCards[setCards.length - 1].id + 1 : 1;
    setCards.push({ id, title, cards: [] });
    renderCardSetsPage();
  }
};

export { createSetForm };
