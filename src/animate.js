document.addEventListener("DOMContentLoaded", function () {
  const navLinks = document.querySelectorAll('.nav-bar a[href^="#"]');

  const smoothScroll = (event) => {
    event.preventDefault();
    const targetId = event.currentTarget.getAttribute("href");
    window.scrollTo({
      top: document.querySelector(targetId).offsetTop,
      behavior: "smooth",
    });
  };

  navLinks.forEach((link) => {
    link.addEventListener("click", smoothScroll);
  });
});

document.addEventListener("DOMContentLoaded", (event) => {
    const navLinks = document.querySelectorAll(".nav-bar a");
    const sections = document.querySelectorAll("section");
  
    function changeLinkState() {
      let index = sections.length;
  
      while(--index && window.scrollY + 50 < sections[index].offsetTop) {}
  
      navLinks.forEach((link) => {
        link.classList.remove("active");
        if (sections[index] && sections[index].getAttribute('id') === link.getAttribute('href').substring(1)) {
          link.classList.add("active");
        }
      });
    }
  
    changeLinkState();
    window.addEventListener("scroll", changeLinkState);
  });
  
