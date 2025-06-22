About image
Fibre, C. (2021, January 12). boy in red hoodie wearing black headphones. Unsplash. https://unsplash.com/photos/boy-in-red-hoodie-wearing-black-headphones-JiOFFI3W7IA


const caption = createElement("figcaption", "");
const link = document.createElement("a");
link.href = "https://unsplash.com/photos/boy-in-red-hoodie-wearing-black-headphones-JiOFFI3W7IA";
link.target = "_blank";
link.rel = "noopener noreferrer";
link.textContent = "Image by Fibre, C. (2021) on Unsplash";

caption.appendChild(link);
const figure = document.createElement("figure");
figure.appendChild(aboutImage);
figure.appendChild(caption);
containerOuter.append(textContainer, figure);
