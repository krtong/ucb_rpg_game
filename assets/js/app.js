class Player {
    constructor(name, img, hp, attack, blurb, val) {
        Object.assign(this, {name,img,hp,attack,blurb,val});
        this.status = "choose-character"
    }
    strike(target) {
        console.log(`attacked ${target}`)
        target.hp -= this.attack;
        target.hp > 0 ? this.hp -= target.attack : target.status = "graveyard";
        this.hp > 0 ? this.attack = Math.floor(this.attack * 1.5) : this.status = "graveyard";
        this.status === "graveyard" ? Object.values(characters).forEach(char => char.status === "graveyard" ? null : char.status = "choose-character") : null;
    }
};

//instantiate class to create characters
const n = (min, max) => Math.floor(Math.random() * (max - min) + min);

let characters = {
    obiWanKenobi: new Player("Obi-Wan Kenobi","obi_wan_kenobi.webp", n(110, 130), n(5, 10),"Loves italian food","obiWanKenobi"),
    lukeSkywalker: new Player("Luke Skywalker","luke_skywalker.png",n(80, 260),n(5,10),"Hates his father.","lukeSkywalker"),
    darthMaul: new Player("Darth Maul","darth_maul.jfif",n(100, 300),n(5,10),"Has a dog named 'Bingo.'","darthMaul", ),
    darthSidious: new Player("Darth Sidious","darth_sidious.jpeg",n(200, 500),n(10,40),"Writes haikus.","darthSidious")
};

/* helper functions */
const initialize = () => {
    $("#choose-character").empty();
    $("#choose-enemy").empty();
    $("#fight-enemy").empty();

    Object.values(characters).map((character, index) => {
        //creates card
        let [name, img, hp, attack, blurb, val, status] = Object.values(character);
        let buttonText = {
            "choose-character": `Select player`,
            "player-chosen": `Player Selected`,
            "choose-enemy": `Select Opponent`,
            "enemy-chosen": `Attack`,
            "graveyard": `Deceased`
        };

        let $cardHTML = `<div class="card" style="width: 18rem;" id="player-${index}">
                            <img class="card-img-top" src="./assets/img/${img}" alt="Card image cap">
                            <div class="card-body">
                                <h5 class="card-title">${name}</h5>
                                <p class="card-text">${blurb}</p>
                                <p class="text-muted">Atk: ${attack} | HP: ${hp}</p>
                                <a a href="#" class="btn btn-primary ${status}" value="${val}">${buttonText[status]}</a>
                            </div>
                        </div>`;
        //"wherever you are, there you go."
        $(`#player-${index}`).remove();
        //"wherever you go, there you are."
        $(`#${status}`).append($cardHTML); //status is either: "choose-character" | "player-chosen' | ""choose-enemy" | "enemy-chosen" | "graveyard" 

    });
    eventListeners();
};

let hero;
const eventListeners = () => {
    const player = (ugh) => (characters[ugh[0].attributes[3].value]); //$(this).val() wasn't working. It hates me. 

    $("a.choose-character").click(function () {
        hero = player($(this))
        Object.values(characters).forEach(char => char.status = "choose-enemy");
        player($(this)).status = "player-chosen";
        initialize();
    });

    $("a.choose-enemy").click(function () {
        player($(this)).status = "enemy-chosen";
        initialize();
    });

    $("a.enemy-chosen").click(function () {
        hero.strike(player($(this)));
        initialize();
    });
}

/* initialize page */
initialize();