// Smooth scroll for nav links
// document.querySelectorAll('a[href^="#"]').forEach(anchor => {
//   anchor.addEventListener("click", function(e) {
//     e.preventDefault();
//     document.querySelector(this.getAttribute("href")).scrollIntoView({
//       behavior: "smooth"
//     });
//   });
// });



    const scrollButtons = document.querySelectorAll('button[data-target]');
    scrollButtons.forEach(btn => {
      btn.addEventListener('click', () => {
        const targetId = btn.getAttribute('data-target');
        const targetSection = document.getElementById(targetId);
        if(targetSection) {
          const offset = 0; // adjust if you have a fixed header
          window.scrollTo({
            top: targetSection.offsetTop - offset,
            behavior: 'smooth'
          });
        }
      });
    });