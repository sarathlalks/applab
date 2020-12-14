const MENU = document.querySelector("nav");
const BTN = document.querySelector("button");
function reveal () {
   MENU.classList.toggle('active');
   BTN.classList.toggle('activeBtn');
}
BTN.addEventListener('click',reveal,false);

const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    const { target } = entry;
    console.log(entry, target)
    
    if (entry.intersectionRatio >= 0.25) {
      target.classList.add("is-visible");
    } 
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});
