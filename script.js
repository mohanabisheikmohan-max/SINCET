document.addEventListener("DOMContentLoaded", () => {

    // Loader
    setTimeout(() => {
        document.body.classList.add("loaded");
    }, 700);


    // Scroll reveal animation
    const elements = document.querySelectorAll(
        ".section > *, .application, .timeline article, .steps article, .card, .challenge-grid article"
    );

    const observer = new IntersectionObserver(
        (entries, observer) => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    entry.target.classList.add("reveal-on-scroll");

                    setTimeout(() => {
                        entry.target.classList.add("show");
                    }, 80);

                    observer.unobserve(entry.target);
                }

            });

        },
        {
            threshold: 0.12
        }
    );


    elements.forEach(element => {
        observer.observe(element);
    });


    // Parallax effect
    window.addEventListener("scroll", () => {

        const scrollY = window.scrollY;

        const grid = document.querySelector(".grid");
        const quantum = document.querySelector(".quantum");

        if (grid) {
            grid.style.transform =
                `translateY(${scrollY * 0.08}px)`;
        }

        if (quantum && window.innerWidth > 900) {

            quantum.style.transform =
                `translateY(calc(-50% + ${scrollY * 0.025}px))`;
        }

    });


    // Active navigation
    const sections = document.querySelectorAll("section[id]");
    const links = document.querySelectorAll("nav a");

    const navObserver = new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (entry.isIntersecting) {

                    links.forEach(link => {
                        link.classList.remove("active");
                    });

                    const activeLink =
                        document.querySelector(
                            `nav a[href="#${entry.target.id}"]`
                        );

                    if (activeLink) {
                        activeLink.classList.add("active");
                    }

                }

            });

        },
        {
            rootMargin: "-40% 0px -50% 0px"
        }
    );


    sections.forEach(section => {
        navObserver.observe(section);
    });

});