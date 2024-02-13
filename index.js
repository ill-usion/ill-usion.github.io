function updateLinkColor() {
    const currentlyViewing = window.location.hash;
    if (currentlyViewing) {
        const currentLink = document.querySelector(`.links-container a[href="${currentlyViewing}"]`);
        const otherLinks = document.querySelectorAll(`.links-container a:not(a[href="${currentlyViewing}"])`)

        if (currentLink) {
            currentLink.classList.add('green-glow');
            currentLink.classList.remove('glow');
        }

        otherLinks.forEach(lnk => {
            lnk.classList.remove('green-glow');
            lnk.classList.add('glow');
        });
    }
}

function handleParagraphIntersection(entries, observer) {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.opacity = '1';
            entry.target.style.animation = 'slide-in-ltr 1s ease-in-out forwards';

            observer.unobserve(entry.target);
        }
    });
}

document.addEventListener('DOMContentLoaded', () => {
    const navbar = document.getElementById('navbar');
    document.addEventListener('scroll', () => {
        if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
            navbar.style.top = "0";
        } else {
            navbar.style.top = "-500px";
        }
    });

    // Give all project images hover effects 
    const images = document.querySelectorAll('.project img');
    images.forEach(img => {
        img.addEventListener('mousemove', (e) => {
            const mouseX = (e.clientX / window.innerWidth - 0.5) * 50;
            const mouseY = (e.clientY / window.innerHeight - 0.5) * 50;
            const scale = 1.1;

            img.style.transform = `translate(${mouseX}px, ${mouseY}px) scale(${scale})`;
        });

        img.addEventListener('mouseleave', () => {
            img.style.transform = 'translate(0, 0)';
        });
    });

    // Make the paragraphs fade in once they're rendered
    const paragraphs = document.querySelectorAll('#about p');
    const paragraphsObserver = new IntersectionObserver(handleParagraphIntersection, { threshold: 0.5 });

    paragraphs.forEach(paragraph => {
        paragraphsObserver.observe(paragraph);
    });


    // Update the navbar links color based on the window hash
    // updateLinkColor();
    // window.addEventListener('hashchange', updateLinkColor);

    // Get the navbar links
    var navLinks = document.querySelectorAll(".links-container a");

    // Options for the IntersectionObserver
    var options = {
        root: null,
        rootMargin: "0px",
        threshold: 0.5 // Adjust this threshold based on your layout
    };

    // Callback function for the IntersectionObserver
    function handleIntersection(entries, observer) {
        var mostVisibleSection = null;
        var maxIntersectionRatio = 0;

        entries.forEach(function (entry) {
            if (entry.isIntersecting && entry.intersectionRatio > maxIntersectionRatio) {
                mostVisibleSection = entry.target;
                maxIntersectionRatio = entry.intersectionRatio;
            }
        });

        // Remove the 'active' class from all navbar links
        navLinks.forEach(navLink => {
            navLink.classList.remove("green-glow");
        });

        // Add the 'active' class to the corresponding navbar link

        console.log(maxIntersectionRatio)
        if (mostVisibleSection /*&& maxIntersectionRatio > 0.1*/) {
            const link = document.querySelector(".links-container a[data-section='" + mostVisibleSection.id + "']");
            console.log(link);
            if (link) {
                link.classList.add("green-glow");
            }
        }
    }

    // Create an IntersectionObserver with the callback and options
    var observer = new IntersectionObserver(handleIntersection, options);

    // Observe each section
    ['about', 'work', 'contact'].forEach(function (sectionId) {
        var section = document.getElementById(sectionId);
        if (section) {
            observer.observe(section);
        }
    });

    function calculateAge(birthday) {
        var ageDifMs = Date.now() - birthday;
        var ageDate = new Date(ageDifMs);

        return Math.abs(ageDate.getUTCFullYear() - 1970);
    }

    const ageSpan = document.getElementById('age');
    const experienceSpan = document.getElementById('experience-years');

    const birthday = new Date(2006, 9, 24);
    const startedProgrammingDate = new Date(2017, 0, 1);

    ageSpan.textContent = calculateAge(birthday);
    experienceSpan.textContent = calculateAge(startedProgrammingDate);
});

