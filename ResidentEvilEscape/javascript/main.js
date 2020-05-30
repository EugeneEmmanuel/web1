"use strict";
/**
 * Mets toutes mes images dans un array
 * @type {array}
 */
let tabItems = ["item/acid_rounds.png", "item/blue_herb.png", "item/colt.png", "item/first_aid_spray.png", "item/flame_rounds.png", "item/green_herb.png", "item/grenade_gun.png", "item/grenade_rounds.png", "item/handgun_a.png", "item/handgun_b.png", "item/handgun_bullets.png", "item/handgun_c.png", "item/handgun_d.png", "item/knife.png", "item/magnum.png", "item/magnum_rounds.png", "item/managers_key.png", "item/master_key.png", "item/mixed_herb_(g+b).png", "item/mixed_herb_(g+g).png", "item/mixed_herb_(g+g+b).png", "item/mixed_herb_(g+g+g).png", "item/mixed_herb_(g+r).png", "item/mixed_herb_(g+r+b).png", "item/prison_cell_key.png", "item/red_herb.png", "item/rocket_launcher.png", "item/shotgun.png", "item/shotgun_bullets.png", "item/vip_card.png"];
/**
 * Tableau de sring qui permet de savoir si une image à été drop dans mon drop container
 * @type {array}
 */
let tabBoolItems = ["false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false", "false"];
/**
 * Permet de savoir conbiem d'élément sont dans mon drop container
 * @type {number}
 */
let nbrItem = 0;

/**
 * Classes permettant de générer des images
 */
class ImageGenerator {
    /**
     * Constructeur de la classe ImageGenerator
     * @constructs
     * @param itemImageLink {string}
     */
    constructor(itemImageLink) {
        this._itemImageLink = itemImageLink;
    }
    /**
     * @returns {string}
     */
    get itemImage() {
        return this._itemImageLink;
    }
}

/**
 * Fonction 2 en 1 permettant à la fois de mettre mes images dans mon id="item" en passant par une classe
 * mais aussi en faisant un nettoyage du text reçu pour le mettre dans mon alt.
 */
function spawnImages() {
    /**
     * Permet de stocker le alt de mon image une fois nettoyé
     * @type {string}
     */
    let altCleaned;
    /**
     * Permet de recevoir les éléments qui se trouve dans un tableau en passant par ma classe
     * @type {array}
     */
    let imgFounded;
    /**
     * Permet de trouver nom id="item"
     * @type {string}
     */
    let img;
    for (let i = 0; i < tabItems.length; i++) {
        altCleaned = tabItems[i].replace("item/", "").replace(/[_]/g, " ").replace(".png", "");
        imgFounded = new ImageGenerator(tabItems[i]);
        img = document.getElementById("item");
        img.innerHTML +='<img alt=\"'+altCleaned+'\" src=\"'+imgFounded.itemImage+'\" width="142" height="102" id=\"drag'+[i]+'"\>';
    }
}
spawnImages(); // Appel de la fonction

///////////////////////////////////
function menuHamburger(x) {
    x.classList.toggle("change");
}


////////////////////////////////////


/**
 * @commence le drag
 * @param event
 */
function dragstart_id(event) {
    event.dataTransfer.setData("text",event.target.id );
}

/**
 * @permet de deplacer
 * @param event
 */
function dragover(event) {
    event.preventDefault(); // empêcher l'action par défaut
    return false;
}

/**
 * @permet de drop les elem
 * @param event
 */
function drop(event) {
    /**
     * Permet la comparaison entre le terme "drag" et un id
     * @type {string}
     */
    let drag = "drag";
    event.preventDefault();                    // empêcher l'action par défaut
    let id = event.dataTransfer.getData("text"); // récupérer l'ID
    let dragged = document.getElementById(id); // récupérer l'élément glissé
    for (let i = 0; i < tabItems.length; i++ ) {
        if ((id === drag+[i]) && (event.currentTarget.id === "item")) {
            if (tabBoolItems[i] === "true") {
                tabBoolItems[i] = "false";
                nbrItem--;
            }
            event.target.append(dragged);              // déplacer l'élément glissé
            event.target.closest('div').append(dragged);
            return false;
        }
        else if ((id === drag+[i]) && (event.currentTarget.id === "dropInvisibleBox")) {
            if (nbrItem === 8) {
                return false;
            }
            if (tabBoolItems[i] === "false") {
                nbrItem++;
                tabBoolItems[i] = "true";
            }
            event.target.append(dragged);              // déplacer l'élément glissé
            event.target.closest('div').append(dragged);
            return false;
        }
    }
}



/**
 * Formulaire
 *
 */
function envoyerFormulaire() {
    let prenom = document.getElementById("fname");
    let nom = document.getElementById("lname");
    let mail = document.getElementById("mail").value.valueOf("@");
    let msg = document.getElementById("msg");

    if (!prenom.value) {
        alert("Veuillez mettre votre prénom");
        return false;
    }

    if (!nom.value) {
        alert("Veuillez mettre votre nom");
        return false;
    }

    if (mail === -1) {
        alert("Veullez mettre une adresse e-mail valide");
        return false;
    }

    if (!msg.value) {
        alert("Veuillez mettre un message");
        return false;
    }
    else {
        alert("Merci pour votre commentaire !");
    }
}