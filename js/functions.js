const MENU = document.querySelector("nav");
const SITE = document.querySelector('.site');
const BTN = document.querySelector("button");
const REVEAL = document.querySelector('nav');
function reveal () {
   MENU.classList.toggle('active');
   BTN.classList.toggle('activeBtn');
}
function clickTarget(e) {
	if (!REVEAL.contains(e.target) && MENU.classList.contains('active') ) {
		reveal();
	}
}
BTN.addEventListener('click',reveal,false);
SITE.addEventListener('click', function(e) { clickTarget(e); }, true);
const sections = [...document.querySelectorAll("section")];

let options = {
  rootMargin: "0px",
  threshold: 0.25
};

const callback = (entries, observer) => {
  entries.forEach(entry => {
    const { target } = entry;
    if (entry.intersectionRatio >= 0.25) {
      target.classList.add("is-visible");
    } 
  });
};

const observer = new IntersectionObserver(callback, options);

sections.forEach((section, index) => {
  observer.observe(section);
});
