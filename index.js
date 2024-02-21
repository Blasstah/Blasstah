let project_types = [];
project_types[0] = { title: "Current Focus", color: "green", tcolor: "white"}
project_types[1] = { title: "Secondary", color: "orange", tcolor: "black"}
project_types[2] = { title: "On Hold", color: "orange", tcolor: "black"}
project_types[3] = { title: "Discontinued", color: "#833", tcolor: "white"}
project_types[4] = { title: "One-Shot", color: "#6C6", tcolor: "black"}

class Badge {
    constructor(text, bgColor, textColor) {
        this.text = text;
        this.bgColor = bgColor;
        this.textColor = textColor;

        this.display = () => {
            let html = `<span class="badge badge-success" style="background-color: ${this.bgColor}; color: ${this.textColor}">${this.text}</span>`;
            return html;
        }
    }
}

class Project {
    
    constructor(name, type, logo, background, short, badges, href) {

        this.name = name;
        this.logo = logo;
        this.type = type;
        this.background = background;
        this.short = short;
        this.badges = badges;

        this.display = (holder) => {
            let type = project_types[this.type];

            let badges = "";
            if(this.badges != null) {
                this.badges.forEach(el => {
                    badges += el.display();
                });
            }

            let html = `
                <a href="${href}" alt={} class="project card">
                    <div class="thumb" style="height: 200px; background-image: url('${background}')">
                        <div>
                            <div style="display: inline-flex; margin-right: 4px; gap:8px;">
                                ${badges}
                            </div>
                            <span class="badge badge-success" style="background-color: ${type.color}; color: ${type.tcolor}">${type.title}</span>
                        </div>
                        <div>
                            <img class="logo" src="${this.logo}" style="width: 75%">
                        </div>
                    </div>
                    <div class="options p-2">
                        ${this.short}
                    </div>
                </a>`;

            $(holder).append(html);
        }
    }
}

var projects = [
    new Project("PHOTONS", 0, "images/projects/photons-logo.webp", "images/projects/photons-bg.png", 
    "A cooperative, multiplayer horror game about exploring procedurally generated caves and resource management.",
    [new Badge("Unity Engine", "white", "black"), new Badge("TBA on Steam", "#252f3d", "#c5c3c0")], "https://store.steampowered.com/app/2303780/PHOTONS/"),
    
    /*
    new Project("Untold Story", 1, "images/projects/untoldstory-logo.png", "", 
    "Story-telling party game, where players try to write a whole story by seeing only few last quotes, that other players entered.",
    [new Badge("HTML5 / Web Game", "white", "black")]),
    */

    new Project("Crawl", 4, "images/projects/crawl-logo.png", "images/projects/crawl-bg.png", 
    "Game about crawling in tight cave spaces, taking photos of \"accidents\", and defending yourself from a monster.",
    [new Badge("Unity Engine", "white", "black"), new Badge("Itch.io", "#f25959", "white")], "https://sole-rift.itch.io/crawl"),
    
    new Project("Cortis", 3, "images/projects/cortis-logo.png", "images/projects/cortis-bg.bmp", 
    "Rogue-lite, tower defense game, where you drop modules from above to build a space-station that fights waves of enemies.",
    [new Badge("Unity Engine", "white", "black")]),

    new Project("Blaster Royale: Rewrite", 3, "images/projects/brr-logo.png", "images/projects/brr-bg.png", 
    "Gamemode, in which last player standing wins. From time-to-time, a scan begins that shows other players positions.",
    [new Badge("Garry's Mod Gamemode", "white", "black")], "https://steamcommunity.com/sharedfiles/filedetails/?id=2228940250")
];

function initializeProjects() {
    let holder = $(".project-holder")

    projects.forEach(el => {
        el.display(holder)
    });
}

$(document).ready(() => {
    initializeProjects();
})