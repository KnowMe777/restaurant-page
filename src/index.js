import "./style.css";
import hero from "./hero.js"
import menu from "./menu.js";
import about from "./about.js";

const container = document.getElementById("container");
container.appendChild(hero());
container.appendChild(menu());
container.appendChild(about());


//LOGIC FOR SMOOTH SCROLLING
document.querySelectorAll(".nav-btn").forEach(button => {
    button.addEventListener("click", () => {
        const targetId = button.getAttribute("data-target");
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
            targetSection.scrollIntoView({behaviour: "smooth"});
        } 
    });
});