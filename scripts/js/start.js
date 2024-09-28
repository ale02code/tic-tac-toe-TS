"use strict";
const choosePlayersOpt = document.querySelectorAll(".choose-player__content__opt");
const xIcon = document.getElementById("x-opt");
const oIcon = document.getElementById("o-opt");
const choosePlayer = "choose-player__content__opt-selected";
function selectPlayer() {
    choosePlayersOpt.forEach(function (player) {
        player.addEventListener("click", function () {
            choosePlayersOpt.forEach(function (p) {
                p.classList.remove(choosePlayer);
            });
            player.classList.add(choosePlayer);
            if (player.classList.contains("player-1")) {
                xIcon.src = "assets/img/icon-x-blue.svg";
                oIcon.src = "assets/img/icon-o-gray.svg";
            }
            else {
                xIcon.src = "assets/img/icon-x-gray.svg";
                oIcon.src = "assets/img/icon-o-blue.svg";
            }
        });
    });
}
selectPlayer();
const startView = document.querySelector(".start-game");
function quitStartView() {
    startView?.classList.add("start-game-quit");
}
const playBtn = document.querySelectorAll(".select-game-form");
function gameMode() {
    playBtn.forEach(function (btn) {
        btn.addEventListener("click", function () {
            quitStartView();
        });
    });
}
gameMode();
