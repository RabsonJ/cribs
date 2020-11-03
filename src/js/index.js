const header = document.querySelector('.header');
const navbar = document.querySelector('.nav');
const navlist = document.querySelector('.nav__list');

const headerOptions = {
   rootMargin: "-140px 0px 0px 0px"
};

const headerObserver = new IntersectionObserver(function(entries, headerObserver) {
	entries.forEach((entry) => {
		if (!entry.isIntersecting) {
			navbar.classList.remove('nav__unScrolled');
			navlist.classList.remove('nav__unScrolled');

			navbar.classList.add('nav__scrolled');
			navlist.classList.add('nav__scrolled');
		} else {
			navbar.classList.remove('nav__scrolled');
			navlist.classList.remove('nav__scrolled');

			navbar.classList.add('nav__unScrolled');
			navlist.classList.add('nav__unScrolled');
		}
	});
}, headerOptions);

headerObserver.observe(header);

// Animation On Scroll Library
AOS.init({
	offset: 200,
	duration: 1000
});