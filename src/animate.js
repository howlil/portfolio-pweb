document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-bar a[href^="#"]');

  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    const targetSection = document.querySelector(targetId);

    const headerOffset = 70; // Height of the fixed header or any other offset you have
    const elementPosition = targetSection.getBoundingClientRect().top;
    const offsetPosition = elementPosition + window.pageYOffset - headerOffset;

    window.scrollTo({
      top: offsetPosition,
      behavior: "smooth",
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
});






document.addEventListener("DOMContentLoaded", (event) => {
  let paragraphs = document.querySelectorAll(".card-body p");
  paragraphs.forEach((p) => {
    let words = p.innerText.split(" ");
    if (words.length > 25) {
      p.innerText = words.slice(0, 25).join(" ") + "...";
    }
  });
});


document.addEventListener("DOMContentLoaded", function () {
  const hamburger = document.querySelector(".hamburger");
  const navBar = document.querySelector(".nav-bar");
  const navLinks = document.querySelectorAll('.nav-bar a');


  hamburger.addEventListener("click", function() {
      navBar.classList.toggle("active");
  });

  navLinks.forEach(link => {
        link.addEventListener("click", () => {
            if(navBar.classList.contains("active")) {
                navBar.classList.remove("active");
            }
        });
    });
});
