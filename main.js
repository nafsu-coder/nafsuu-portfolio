const cursorGlow = document.querySelector(".cursor-glow");

document.addEventListener("mousemove", (e) => {
    cursorGlow.style.left = e.clientX + "px";
    cursorGlow.style.top = e.clientY + "px";

    const x = e.clientX / window.innerWidth;
    const hue = Math.floor(x * 120 + 180);

    cursorGlow.style.background = `
        radial-gradient(
            circle,
            hsla(${hue}, 100%, 60%, 0.20) 0%,
            hsla(${hue}, 100%, 50%, 0.08) 35%,
            transparent 60%
        )
    `;
});
var typed = new Typed('.text', {
    strings: [ 'Student 🎓', 'Graphic Design Student', 'Learner 📚', 'Gamer 🎮' ],
    typeSpeed: 100,
    backSpeed: 100,
    backDelay: 1000,
    loop: true
});
const revealElements = document.querySelectorAll(".reveal");

const revealOnScroll = () => {

    revealElements.forEach((element) => {

        const elementTop = element.getBoundingClientRect().top;
        const windowHeight = window.innerHeight;

        if (elementTop < windowHeight - 100) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }

    });

};

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();
const skillsSection = document.querySelector(".skills");

if (skillsSection) {

    const revealElements = document.querySelectorAll(".reveal-skill");
    const skillBars = document.querySelectorAll(".skill-bar span");
    const circles = document.querySelectorAll(".circle");

    const skillsObserver = new IntersectionObserver((entries) => {

        entries.forEach((entry) => {

            if (entry.isIntersecting) {

                // =========================
                // SHOW EVERYTHING
                // =========================

                revealElements.forEach((element, index) => {

                    setTimeout(() => {
                        element.classList.add("active");
                    }, index * 150);

                });


                // =========================
                // ANIMATE SKILL BARS
                // =========================

                skillBars.forEach((bar, index) => {

                    const width = bar.getAttribute("data-width");

                    setTimeout(() => {
                        bar.style.width = width;
                    }, 400 + index * 150);

                });


                // =========================
                // ANIMATE CIRCLES
                // =========================

                circles.forEach((circle, index) => {

                    const percent =
                        circle.getAttribute("data-percent");

                    setTimeout(() => {

                        circle.style.setProperty(
                            "--percent",
                            percent + "%"
                        );

                    }, 500 + index * 150);

                });

            } else {

                // =========================
                // RESET EVERYTHING
                // =========================

                revealElements.forEach((element) => {
                    element.classList.remove("active");
                });


                skillBars.forEach((bar) => {
                    bar.style.width = "0";
                });


                circles.forEach((circle) => {

                    circle.style.setProperty(
                        "--percent",
                        "0%"
                    );

                });

            }

        });

    }, {
        threshold: 0.25
    });


    skillsObserver.observe(skillsSection);
}
const projectsSection =
    document.querySelector(".projects");

const projectTitle =
    document.querySelector(".projects-title");

const projectCards =
    document.querySelectorAll(".project-card");


if (projectsSection) {

    const projectObserver =
        new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    // Title

                    projectTitle.classList.add("active");


                    // Cards appear one by one

                    projectCards.forEach((card, index) => {

                        setTimeout(() => {

                            card.classList.add("show");

                        }, 300 + index * 350);

                    });

                } else {

                    // Reset title

                    projectTitle.classList.remove("active");


                    // Reset cards

                    projectCards.forEach((card) => {

                        card.classList.remove("show");

                    });

                }

            });

        }, {

            threshold: 0.25

        });


    projectObserver.observe(projectsSection);
}
const projects = [

    {
        title: "Esports Visual Identity",
        category: "GRAPHIC DESIGN",
        description:
            "A practice project exploring esports branding, visual identity and promotional design.",

        images: [
            "image/LOGO.png",
            "image/JERSEY.png",
            "image/WELCOME.png",
            "image/CHAMPION.png"
        ]
    },


    {
        title: "Creative Brand Concept",
        category: "BRANDING",
        description:
            "A fictional branding project focused on typography, colors and visual identity.",

        images: [
            "image/pre.png",
            "image/logo.png",
            "image/ig.png"
        ]
    },


    {
        title: "Social Media Campaign",
        category: "SOCIAL MEDIA",
        description:
            "A collection of social media graphics created as a design practice project.",

        images: [
            "image/project1.png",
            "image/project2.png",
            "image/project3.png"
        ]
    }

];


let currentProject = 0;
let currentImage = 0;


const viewer =
    document.getElementById("projectViewer");

const viewerImage =
    document.getElementById("viewerImage");

const viewerTitle =
    document.getElementById("viewerTitle");

const viewerCategory =
    document.getElementById("viewerCategory");

const viewerDescription =
    document.getElementById("viewerDescription");

const imageCounter =
    document.getElementById("imageCounter");


function openProject(projectIndex) {

    currentProject = projectIndex;

    currentImage = 0;

    const project = projects[currentProject];


    viewerTitle.textContent =
        project.title;

    viewerCategory.textContent =
        project.category;

    viewerDescription.textContent =
        project.description;


    updateImage();


    viewer.classList.add("active");


    document.body.style.overflow = "hidden";
}


function closeProject() {

    viewer.classList.remove("active");

    document.body.style.overflow = "";
}


function updateImage() {

    const project =
        projects[currentProject];


    viewerImage.style.opacity = "0";


    setTimeout(() => {

        viewerImage.src =
            project.images[currentImage];

        viewerImage.style.opacity = "1";

    }, 150);


    imageCounter.textContent =
        String(currentImage + 1).padStart(2, "0")
        + " / " +
        String(project.images.length).padStart(2, "0");
}


function nextImage() {

    const project =
        projects[currentProject];


    currentImage++;

    if (currentImage >= project.images.length) {

        currentImage = 0;

    }


    updateImage();
}


function previousImage() {

    const project =
        projects[currentProject];


    currentImage--;

    if (currentImage < 0) {

        currentImage =
            project.images.length - 1;

    }


    updateImage();
}


/* ESC closes viewer */

document.addEventListener("keydown", (event) => {

    if (event.key === "Escape") {

        closeProject();

    }

});


/* Click outside closes viewer */

viewer.addEventListener("click", (event) => {

    if (event.target === viewer) {

        closeProject();

    }

});
const contactSection =
    document.querySelector(".contact");

const contactHeading =
    document.querySelector(".contact-heading");

const discordCard =
    document.querySelector(".discord-card");

const socialSection =
    document.querySelector(".social-section");

const socialCards =
    document.querySelectorAll(".social-card");


const contactObserver =
    new IntersectionObserver(

        (entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {


                    /* =================
                       HEADING
                    ================= */

                    contactHeading.classList.add("show");


                    /* =================
                       DISCORD
                    ================= */

                    setTimeout(() => {

                        discordCard.classList.add("show");

                    }, 250);


                    /* =================
                       SOCIAL TITLE
                    ================= */

                    setTimeout(() => {

                        socialSection.classList.add("show");

                    }, 500);


                    /* =================
                       SOCIAL CARDS
                    ================= */

                    socialCards.forEach(
                        (card, index) => {

                            setTimeout(() => {

                                card.classList.add("show");

                            }, 650 + index * 150);

                        }
                    );


                } else {


                    /* =================
                       RESET ANIMATION
                    ================= */

                    contactHeading
                        .classList
                        .remove("show");


                    discordCard
                        .classList
                        .remove("show");


                    socialSection
                        .classList
                        .remove("show");


                    socialCards.forEach(
                        (card) => {

                            card.classList.remove("show");

                        }
                    );

                }

            });

        },

        {
            threshold: 0.2
        }

    );


contactObserver.observe(contactSection);
/* =========================
   BACKGROUND MUSIC
========================= */

const bgMusic = document.getElementById("bgMusic");
const musicToggle = document.getElementById("musicToggle");

let musicPlaying = false;

musicToggle.addEventListener("click", () => {

    if (musicPlaying) {

        bgMusic.pause();

        musicToggle.textContent = "🎵";
        musicToggle.classList.remove("playing");

        musicPlaying = false;

    } else {

        bgMusic.volume = 0.25;

        bgMusic.play()
            .then(() => {

                musicToggle.textContent = "🔊";
                musicToggle.classList.add("playing");

                musicPlaying = true;

            })
            .catch(() => {

                console.log("Music could not be played.");

            });
    }

});
