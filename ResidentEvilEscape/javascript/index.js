"use strict";

let lastSong = null;
let selection = null;
let playlist = ["audio/re1_original_saveroom.mp3", "audio/re1_remake_saveroom.mp3", "audio/re3_original_saveroom.mp3", "audio/re2_original_saveroom.mp3"]; // Liste des musiques
let player = document.getElementById("audioplayer"); // Obtenir l'audio par son ID
player.autoplay=true;
player.addEventListener("ended", selectRandom); // Appel la fonction random quand la chanson se termine

function selectRandom(){
    while(selection === lastSong){ // Repeat until different song is selected
        selection = Math.floor(Math.random() * playlist.length);
    }
    lastSong = selection; // Se souvenir de la dernière chanson
    player.src = playlist[selection]; // Pour que mon site conaisse la prochaine chanson

}

selectRandom();
player.play(); // Jouer la musique