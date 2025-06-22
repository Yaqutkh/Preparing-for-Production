
const createElement = (elementType, text) => {
  const element = document.createElement(elementType);
  element.textContent = text;
  return element;
};


const createImage = (url, alt) => {
  const img = document.createElement('img');
  img.src = url;
  img.alt = alt;
  return img;
};


const createHeader = (headerType, text, dataCy) => {
  const header = document.createElement(headerType);
  header.textContent = text;
  header.setAttribute('data-cy', dataCy);
  return header;
};


const createToggleButton = (text, element) => {
  const button = document.createElement('button');
  button.textContent = text;
  button.addEventListener('click', () => {
    const isHidden = element.classList.contains('hidden');
    element.classList.toggle('hidden', !isHidden);
  });
  return button;
};


const createLabel = (forId, text) => {
  const label = document.createElement('label');
  label.setAttribute('for', forId);
  label.textContent = text;
  return label;
};

const createInput = (id, name, type = 'text', placeholder = '') => {
  const input = document.createElement('input');
  input.id = id;
  input.name = name;
  input.type = type;
  input.placeholder = placeholder;
  return input;
};

const createSubmitButton = (text) => {
  const button = document.createElement('button');
  button.type = 'submit';
  button.textContent = text;
  return button;
};


export {
  createElement,
  createImage,
  createHeader,
  createToggleButton,
  createLabel,
  createInput,
  createSubmitButton
};
