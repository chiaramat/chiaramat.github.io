document.addEventListener("DOMContentLoaded", function () {
    const projects = document.querySelectorAll(".project-card.unlocked");
    const lockedProjects = document.querySelectorAll(".project-card.locked");

    // Effetto hover con suono
    projects.forEach((project) => {
        project.addEventListener("click", () => {
            project.classList.add("selected");
            playSound(); // Effetto sonoro di selezione
        });
    });

    // Messaggio per progetti bloccati
    lockedProjects.forEach((locked) => {
        locked.addEventListener("click", () => {
            alert("Questo progetto non è ancora disponibile!");
        });
    });

    function playSound() {
        const audio = new Audio("assets/click.mp3"); // Percorso corretto al file MP3
        audio.play();
    }

    // Imposta lo sfondo dinamicamente per i progetti
    projects.forEach(project => {
        const imagePath = project.getAttribute("data-image");
        if (imagePath) {
            project.style.backgroundImage = `url(${imagePath})`;
        }
    });

    // Reindirizzamento alla pagina del progetto
    projects.forEach(project => {
        project.addEventListener("click", () => {
            const projectId = project.getAttribute("data-project");
            if (projectId) {
                window.location.href = `project-${projectId}.html`;
            }
        });
    });
});

document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-card");

    const modalTitle = document.getElementById("modalTitle");
    const modalDesc = document.getElementById("modalDesc");
    const modalImg = document.getElementById("modalImg");
    const modalLink = document.getElementById("modalLink");

    // Dati dei progetti
    const projectData = {
        game1: {
            title: "LabTest",
            desc: "Vesti i panni di uno scienziato ed effettua esperimenti su uno strano essere organico",
            img: "assets/LabTest/LabTestBG.png",
            link: "project-labtest.html"
        },
        
        game2: {
            title: "Pillole di Teatro",
            desc: "Progetto VR per la visualizzazione video in 360 by Gold VR",
            img: "assets/Pillole/logo.png",
            link: "project-pillole.html"
        },

        game3: {
            title: "FPS",
            desc: "Un gioco FPS con dinamiche di combattimento intense.",
            img: "assets/FPS/LabirintoDallAlto.png",
            link: "project-fps.html"
        },
        
        game4: {
            title: "Escape Room",
            desc: "Trova gli indizi e supera gli enigmi per uscire dalla stanza.",
            img: "assets/EscapeRoom/FrameEscapeRoom.png",
            link: "project-escaperoom.html"
        },

        game5: {
            title: "Sudoku",
            desc: "Mettiti alla prova e completa l'intera griglia.",
            img: "assets/Sudoku/ScreenSudoku.png",
            link: "project-sudoku.html"
        }
    };

    projects.forEach(project => {
        project.addEventListener("click", () => {
            const projectId = project.getAttribute("data-project");
            if (projectData[projectId]) {
                modalTitle.innerText = projectData[projectId].title;
                modalDesc.innerText = projectData[projectId].desc;
                modalImg.src = projectData[projectId].img;
                modalLink.href = projectData[projectId].link;
                modal.style.display = "block";
            }
        });
    });

    
});

document.addEventListener("DOMContentLoaded", () => {
    const projects = document.querySelectorAll(".project-item");

    projects.forEach(project => {
        project.addEventListener("click", () => {
            const link = project.querySelector("a.btn").href; // Prende il link della pagina
            window.location.href = link; // Reindirizza
        });
    });
});
