export const createImage = (src, alt) => {
  const image = document.createElement("img");
  image.src = src;
  image.alt = alt;
  image.style.width = "400px";    
  image.style.display = "block";   
  image.style.border = "2px solid red";
  return image;
};