"use strict";
const cells = document.querySelectorAll(".game-board__cell");
const turnIcon = document.querySelector(".header__turn-icon");
function turn() {
    cells.forEach((cell) => {
        const img2 = document.createElement("img");
        img2.draggable = false;
        const div2 = document.createElement("div");
        div2.appendChild(img2);
        div2.classList.add("game-board__cell-active2");
        cell.addEventListener("click", () => {
            const xIcon = "assets/img/icon-x-gray.svg";
            const oIcon = "assets/img/icon-o-gray.svg";
            if (!cell.classList.contains("game-board__cell-active-on")) {
                if (turnIcon && turnIcon.src.includes(oIcon)) {
                    img2.src = "assets/img/icon-o.svg";
                    cell.appendChild(div2);
                    turnIcon.src = xIcon;
                }
                else if (turnIcon && !turnIcon.src.includes(oIcon)) {
                    img2.src = "assets/img/icon-x.svg";
                    cell.appendChild(div2);
                    turnIcon.src = oIcon;
                }
                cell.classList.add("game-board__cell-active-on");
            }
        });
        const img = document.createElement("img");
        const div = document.createElement("div");
        div.appendChild(img);
        div.classList.add("game-board__cell-active");
        cell.addEventListener("mouseenter", () => {
            if (!cell.classList.contains("game-board__cell-active-on")) {
                if (turnIcon && turnIcon.src.includes("assets/img/icon-x-gray.svg")) {
                    img.src = "assets/img/icon-x-outline.svg";
                }
                else {
                    img.src = "assets/img/icon-o-outline.svg";
                }
                cell.appendChild(div);
            }
        });
        cell.addEventListener("mouseleave", () => {
            cell.removeChild(div);
        });
    });
}
turn();
