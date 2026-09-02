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
/* =========================================
   SERVICES SECTION
========================================= */

const servicesSection =
    document.querySelector(".services");

const serviceElements =
    document.querySelectorAll(".reveal-service");

const serviceCards =
    document.querySelectorAll(".service-card");


/* =========================================
   SCROLL REVEAL
========================================= */

if (servicesSection) {

    const servicesObserver =
        new IntersectionObserver(

            (entries) => {

                entries.forEach((entry) => {

                    if (entry.isIntersecting) {

                        serviceElements.forEach(
                            (element, index) => {

                                const delay =
                                    element.dataset.delay
                                    || index * 150;

                                setTimeout(() => {

                                    element.classList.add("show");

                                }, Number(delay));

                            }
                        );

                    } else {

                        /*
                         * Remove this if you want the
                         * animation to happen only once.
                         */

                        serviceElements.forEach(
                            (element) => {

                                element.classList.remove("show");

                            }
                        );

                    }

                });

            },

            {
                threshold: 0.15
            }

        );


    servicesObserver.observe(servicesSection);
}


/* =========================================
   CARD MOUSE TILT
========================================= */

serviceCards.forEach((card) => {

    card.addEventListener("mousemove", (event) => {

        const rect =
            card.getBoundingClientRect();

        const x =
            event.clientX - rect.left;

        const y =
            event.clientY - rect.top;

        const centerX =
            rect.width / 2;

        const centerY =
            rect.height / 2;

        const rotateX =
            ((y - centerY) / centerY) * -4;

        const rotateY =
            ((x - centerX) / centerX) * 4;

        card.style.transform = `
            translateY(-10px)
            perspective(800px)
            rotateX(${rotateX}deg)
            rotateY(${rotateY}deg)
            scale(1.02)
        `;

    });


    card.addEventListener("mouseleave", () => {

        card.style.transform = "";

    });

});


/* =========================================
   CREATE BACKGROUND PARTICLES
========================================= */

const particleContainer =
    document.getElementById("serviceParticles");


if (particleContainer) {

    const particleCount = 35;

    for (let i = 0; i < particleCount; i++) {

        const particle =
            document.createElement("span");

        particle.classList.add(
            "service-particle"
        );


        /* Random position */

        particle.style.left =
            Math.random() * 100 + "%";

        particle.style.top =
            Math.random() * 100 + "%";


        /* Random movement */

        particle.style.setProperty(
            "--move-x",
            (Math.random() * 100 - 50) + "px"
        );

        particle.style.setProperty(
            "--move-y",
            (Math.random() * 100 - 50) + "px"
        );


        /* Random animation duration */

        particle.style.setProperty(
            "--duration",
            (4 + Math.random() * 6) + "s"
        );


        /* Random delay */

        particle.style.animationDelay =
            (Math.random() * 5) + "s";


        particleContainer.appendChild(
            particle
        );

    }

}
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
