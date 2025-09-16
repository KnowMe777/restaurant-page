import aboutImg from "./assets/about.jpg";

export default function about() {
  //ABOUT SECTION DIV
  const aboutSection = document.createElement("div");
  aboutSection.classList.add("about");
  aboutSection.id = "about";

  //ABOUT SECTION IMAGE
  const aboutSectionImage = document.createElement("img");
  aboutSectionImage.src = aboutImg;
  aboutSectionImage.alt = "about image";
  aboutSectionImage.classList.add("about-img");

  const aboutSectionLead = document.createElement("h1");
  aboutSectionLead.innerText = "OUR STORY";
  aboutSectionLead.classList.add("about-lead");

  const aboutStory = document.createElement("p");
  aboutStory.innerText = "For over two decades, our fine-dine Italian restaurant has carried a legacy of excellence, blending tradition with contemporary elegance. Rooted in authentic recipes passed down through generations, we take pride in serving handmade pastas, wood-fired pizzas, and carefully selected wines that embody the true spirit of Italy. Every dish is crafted with fresh, locally sourced ingredients and infused with passion. Beyond the cuisine, our dedicated team of chefs, sommeliers, and servers create a warm, inviting experience where guests feel cherished. With unwavering commitment to quality and hospitality, we continue to honor our heritage while delivering unforgettable dining moments.";
  aboutStory.classList.add("about-story");

  aboutSection.appendChild(aboutSectionImage);
  aboutSection.appendChild(aboutSectionLead);
  aboutSection.appendChild(aboutStory);

  return aboutSection;
}
