import cardimg1 from "./assets/pasta.webp";
import cardimg2 from "./assets/salad.jpg";
import cardimg3 from "./assets/burger.jpg";
import cardimg4 from "./assets/salmon.jpg";

export default function menu() {
  // MENU DIV
  const menuSection = document.createElement("div");
  menuSection.id = "menu";
  menuSection.classList.add("menu");

  // MENU HEADER
  const menuHeader = document.createElement("div");
  menuHeader.classList.add("menu-header");

  // MENU HEADER TEXT
  const menuLead = document.createElement("h1");
  menuLead.innerText = "OUR MENU";
  menuLead.classList.add("menu-lead");

  // MENU HEADER BUTTONS
  const menuBtn1 = document.createElement("button");
  menuBtn1.innerText = "STARTERS";
  menuBtn1.classList.add("menu-btn");

  const menuBtn2 = document.createElement("button");
  menuBtn2.innerText = "MAINS";
  menuBtn2.classList.add("menu-btn");

  const menuBtn3 = document.createElement("button");
  menuBtn3.innerText = "DESSERTS";
  menuBtn3.classList.add("menu-btn");

  // Append header elements
  menuHeader.appendChild(menuLead);
  menuHeader.appendChild(menuBtn1);
  menuHeader.appendChild(menuBtn2);
  menuHeader.appendChild(menuBtn3);

  // MENU CARD GRID
  const menuGrid = document.createElement("div");
  menuGrid.classList.add("menu-grid");

  // Helper function to make cards
  function createMenuCard(imgSrc, imgAlt, title, description, price) {
    const card = document.createElement("div");
    card.classList.add("menu-card");

    const cardImg = document.createElement("img");
    cardImg.src = imgSrc;
    cardImg.alt = imgAlt;
    cardImg.classList.add("menu-card-img");

    const cardTitle = document.createElement("h1");
    cardTitle.innerText = title;
    cardTitle.classList.add("menu-title");

    const cardDes = document.createElement("p");
    cardDes.innerText = description;
    cardDes.classList.add("menu-des");

    const cardPrice = document.createElement("p");
    cardPrice.innerText = price;
    cardPrice.classList.add("menu-price");

    card.appendChild(cardImg);
    card.appendChild(cardTitle);
    card.appendChild(cardDes);
    card.appendChild(cardPrice);

    return card;
  }

  // Create cards
  const card1 = createMenuCard(
    cardimg1,
    "pasta img",
    "PASTA",
    "Italian staple made of wheat, versatile and delicious.",
    "$14"
  );

  const card2 = createMenuCard(
    cardimg2,
    "salad img",
    "CEASER SALAD",
    "Fresh lettuce tossed with parmesan, croutons, and dressing.",
    "$8"
  );

  const card3 = createMenuCard(
    cardimg3,
    "burger img",
    "BURGER",
    "Juicy grilled patty with cheese, lettuce, and tomato.",
    "$21"
  );

  const card4 = createMenuCard(
    cardimg4,
    "salmon img",
    "GRILLED SALMON",
    "Tender salmon fillet grilled to perfection with herbs.",
    "$34"
  );

  // Append cards to grid
  menuGrid.appendChild(card1);
  menuGrid.appendChild(card2);
  menuGrid.appendChild(card3);
  menuGrid.appendChild(card4);

  // Append everything to section
  menuSection.appendChild(menuHeader);
  menuSection.appendChild(menuGrid);

  return menuSection;
}
