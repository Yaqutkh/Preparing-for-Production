//DO NOT CHANGE ANYTHING IN THIS FILE//

//// This file is responsible for generating the form used to create a new study set.

// This function will be used to render the new study set on submit
import { renderCardSetsPage } from "./cardSetsPage.js";
// This function will render errors
import { showError } from "./errors.js";

// These function create elements for our form
import {
  createLabel,
  createInput,
  createSubmitButton,
} from "./utilityRenderFunctions.js";

// This function generates the form for creating new study sets
const createSetForm = (setCards) => {
  const section = document.createElement("section");
  section.id = "create-set-section";
  section.style.display = "none"; // مخفي افتراضياً

  // Generates a new form element
  const form = document.createElement("form");
  // توحيد data-cy مع اختبار سايبريس
  form.setAttribute("data-cy", "create-set-form");

  // Creates the label for the title input
  const label = createLabel("Card Set Title", "titleInput");
  // Creates the input for the title
  const input = createInput("titleInput");
  input.setAttribute("data-cy", "create-set-input"); // إضافة لتحديده في الاختبارات
  // Creates the submit button
  const submitButton = createSubmitButton("Submit Set");
  submitButton.setAttribute("data-cy", "create-set-submit"); // إضافة لتحديده في الاختبارات

  // Adds an event listener to the form.
  // On submission, a new study set will be created.
  form.addEventListener("submit", (e) => submitSet(e, setCards));

  // Adds elements to the form
  form.append(label, input, submitButton);
  section.appendChild(form);

  return section;
};

// This function creates a new study set.
// It assigns a title to the set and initializes an empty array for cards,
// which can be added later on the flashcards page.
const submitSet = (e, setCards) => {
  e.preventDefault();

  const title = e.target.titleInput.value;

  if (!title) {
    showError("TITLE CANNOT BE EMPTY");
  } else {
    const id = setCards.length ? setCards[setCards.length - 1].id + 1 : 1;
    setCards.push({ id, title, cards: [] });
    renderCardSetsPage();
  }
};

export { createSetForm };
