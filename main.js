/* =====================================================
   CURSOR GLOW
===================================================== */

const cursorGlow = document.querySelector(".cursor-glow");

if (cursorGlow) {
    document.addEventListener("mousemove", (event) => {

        const { clientX, clientY } = event;

        cursorGlow.style.left = `${clientX}px`;
        cursorGlow.style.top = `${clientY}px`;

        const x = clientX / window.innerWidth;

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
}


/* =====================================================
   TYPED TEXT
===================================================== */

if (typeof Typed !== "undefined") {

    new Typed(".text", {
        strings: [
            "Student 🎓",
            "Graphic Design Student",
            "Learner 📚",
            "Gamer 🎮"
        ],

        typeSpeed: 100,
        backSpeed: 100,
        backDelay: 1000,
        loop: true
    });

}


/* =====================================================
   GENERAL SCROLL REVEAL
===================================================== */

const revealElements =
    document.querySelectorAll(".reveal");

function revealOnScroll() {

    revealElements.forEach((element) => {

        const elementTop =
            element.getBoundingClientRect().top;

        if (elementTop < window.innerHeight - 100) {
            element.classList.add("active");
        } else {
            element.classList.remove("active");
        }

    });

}

window.addEventListener("scroll", revealOnScroll);

revealOnScroll();


/* =====================================================
   SKILLS
===================================================== */

const skillsSection =
    document.querySelector(".skills");

if (skillsSection) {

    const skillElements =
        document.querySelectorAll(".reveal-skill");

    const skillBars =
        document.querySelectorAll(".skill-bar span");

    const circles =
        document.querySelectorAll(".circle");


    const skillsObserver =
        new IntersectionObserver((entries) => {

            entries.forEach((entry) => {

                if (entry.isIntersecting) {

                    /* Reveal cards */

                    skillElements.forEach(
                        (element, index) => {

                            setTimeout(() => {
                                element.classList.add("active");
                            }, index * 150);

                        }
                    );


                    /* Skill bars */

                    skillBars.forEach(
                        (bar, index) => {

                            const width =
                                bar.dataset.width;

                            setTimeout(() => {
                                bar.style.width = width;
                            }, 400 + index * 150);

                        }
                    );


                    /* Skill circles */

                    circles.forEach(
                        (circle, index) => {

                            const percent =
                                circle.dataset.percent;

                            setTimeout(() => {

                                circle.style.setProperty(
                                    "--percent",
                                    `${percent}%`
                                );

                            }, 500 + index * 150);

                        }
                    );

                } else {

                    skillElements.forEach(
                        (element) => {
                            element.classList.remove("active");
                        }
                    );

                    skillBars.forEach(
                        (bar) => {
                            bar.style.width = "0";
                        }
                    );

                    circles.forEach(
                        (circle) => {

                            circle.style.setProperty(
                                "--percent",
                                "0%"
                            );

                        }
                    );

                }

            });

        }, {
            threshold: 0.25
        });


    skillsObserver.observe(skillsSection);

}


/* =====================================================
   PROJECTS
===================================================== */

const projectsSection =
    document.querySelector(".projects");

const projectTitle =
    document.querySelector(".projects-title");

const projectCards =
    document.querySelectorAll(".project-card");


if (projectsSection) {

    const projectObserver =
        new IntersectionObserver(
            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        projectTitle?.classList.add("active");

                        projectCards.forEach(
                            (card, index) => {

                                setTimeout(() => {

                                    card.classList.add("show");

                                }, 300 + index * 350);

                            }
                        );

                    } else {

                        projectTitle?.classList.remove("active");

                        projectCards.forEach(
                            (card) => {
                                card.classList.remove("show");
                            }
                        );

                    }

                });

            },
            {
                threshold: 0.25
            }
        );


    projectObserver.observe(projectsSection);

}


/* =====================================================
   PROJECT DATA
===================================================== */

const projects = [

    {
        title: "Esports Visual Identity",

        category: "GRAPHIC DESIGN",

        description:
            "Logo, jersey and promotional graphics created as a practice project.",

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
            "A fictional branding project exploring color, typography and visual identity.",

        images: [
            "project2.jpg",
            "project2-2.jpg",
            "project2-3.jpg"
        ]
    },


    {
        title: "Social Media Campaign",

        category: "SOCIAL MEDIA",

        description:
            "Creative social media graphics designed for a fictional campaign.",

        images: [
            "project3.jpg",
            "project3-2.jpg",
            "project3-3.jpg"
        ]
    },


    {
        title: "Portfolio Website",

        category: "WEB DESIGN",

        description:
            "My personal portfolio website created while learning HTML, CSS and JavaScript.",

        images: [
            "project4.jpg",
            "project4-2.jpg",
            "project4-3.jpg"
        ]
    }

];


/* =====================================================
   PROJECT VIEWER
===================================================== */

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


/* =====================================================
   OPEN PROJECT
===================================================== */

function openProject(index) {

    currentProject = index;
    currentImage = 0;

    const project =
        projects[currentProject];

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


/* =====================================================
   CLOSE PROJECT
===================================================== */

function closeProject() {

    viewer.classList.remove("active");

    document.body.style.overflow = "";

}


/* =====================================================
   UPDATE IMAGE
===================================================== */

function updateImage() {

    const project =
        projects[currentProject];

    viewerImage.src =
        project.images[currentImage];

    viewerImage.alt =
        `${project.title} - Image ${currentImage + 1}`;

    imageCounter.textContent =
        `${String(currentImage + 1).padStart(2, "0")} / ${String(project.images.length).padStart(2, "0")}`;

}


/* =====================================================
   NEXT IMAGE
===================================================== */

function nextImage() {

    const project =
        projects[currentProject];

    currentImage =
        (currentImage + 1) %
        project.images.length;

    updateImage();

}


/* =====================================================
   PREVIOUS IMAGE
===================================================== */

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


/* =====================================================
   KEYBOARD CONTROLS
===================================================== */

document.addEventListener("keydown", (event) => {

    if (!viewer.classList.contains("active")) {
        return;
    }

    switch (event.key) {

        case "Escape":
            closeProject();
            break;

        case "ArrowRight":
            nextImage();
            break;

        case "ArrowLeft":
            previousImage();
            break;

    }

});


/* =====================================================
   CLOSE VIEWER OUTSIDE
===================================================== */

viewer.addEventListener("click", (event) => {

    if (event.target === viewer) {
        closeProject();
    }

});


/* =====================================================
   CONTACT ANIMATION
===================================================== */

const contactSection =
    document.querySelector(".contact");

if (contactSection) {

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

                        contactHeading?.classList.add("show");


                        setTimeout(() => {

                            discordCard?.classList.add("show");

                        }, 250);


                        setTimeout(() => {

                            socialSection?.classList.add("show");

                        }, 500);


                        socialCards.forEach(
                            (card, index) => {

                                setTimeout(() => {

                                    card.classList.add("show");

                                }, 650 + index * 150);

                            }
                        );

                    } else {

                        contactHeading?.classList.remove("show");

                        discordCard?.classList.remove("show");

                        socialSection?.classList.remove("show");

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

}


/* =====================================================
   ACTIVE NAVIGATION
===================================================== */

const sections =
    document.querySelectorAll("section[id]");

const navLinks =
    document.querySelectorAll(".navbar a");


window.addEventListener("scroll", () => {

    let currentSection = "";

    sections.forEach((section) => {

        const sectionTop =
            section.offsetTop - 150;

        if (window.scrollY >= sectionTop) {
            currentSection = section.id;
        }

    });


    navLinks.forEach((link) => {

        link.classList.remove("active");

        if (
            link.getAttribute("href") ===
            `#${currentSection}`
        ) {
            link.classList.add("active");
        }

    });

});