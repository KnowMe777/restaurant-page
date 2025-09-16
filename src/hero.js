import heroimg from "./assets/pasta.jpg";

export default function hero() {
    const heroSection = document.getElementById("hero")
    heroSection.id = "hero";
    const heroImg = document.createElement("img");
    heroImg.src = heroimg;
    heroImg.alt = "pasta image";
    heroImg.classList.add("hero-img");

    const overlaydiv = document.createElement("div");
    overlaydiv.classList.add("overlaydiv");

    const heroText = document.createElement("h1");
    heroText.classList.add("hero-text");
    heroText.innerText = "CUPO CECI";

    const heroBtn = document.createElement("button");
    heroBtn.classList.add("hero-btn");
    heroBtn.setAttribute("data-target", "menu");
    heroBtn.innerText = "VIEW MENU";

    overlaydiv.appendChild(heroText);
    overlaydiv.appendChild(heroBtn);
    heroSection.appendChild(heroImg);
    heroSection.appendChild(overlaydiv);

    return heroSection; 
}