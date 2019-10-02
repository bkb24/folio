let home = document.querySelector('.home-screen.home');
let projects = document.querySelector('.home-screen.projects');
let services = document.querySelector('.home-screen.services');
let competences = document.querySelector('.home-screen.competences');
let blog = document.querySelector('.home-screen.blog');
let contact = document.querySelector('.home-screen.contact');
let servicesMenuItems = document.querySelectorAll('.services-item-heading');
let servicesWrap = document.querySelector('.services-wrap');
let servicesNavItems = document.querySelectorAll('.services-overview li');
let servicesNav = document.querySelector('.services-overview');

let homeScreens = {
    home, projects, blog, competences, services, contact
}

let mainMenu = document.getElementById('main-menu-js');
let opened = 'home';
let hovered = mainMenu.children[0];

mainMenu.addEventListener('mouseover', e => {
    let targetName = e.target.className;

    if (!homeScreens[targetName]) return;

    if (opened === targetName) return;

    // Add active class to hovered
    // if (hovered)
    hovered.classList.remove('active-js');

    hovered = (e.target.tagName.toLocaleLowerCase() === 'a') ?
        e.target.parentElement : e.target;

    hovered.classList.add('active-js');

    homeScreens[opened].classList.add('hidden');
    homeScreens[targetName].classList.remove('hidden');
    opened = targetName;
});

let fixedNav = document.getElementById('main-nav-js');
let mainMenuItems = Array.from(mainMenu.children);

window.addEventListener('scroll', function(e) {
    window.scrollY + 70 > mainMenu.offsetTop ?
        fixedNav.classList.remove('hidden') : fixedNav.classList.add('hidden');

    mainMenuItems.forEach((item, index) => {
        if (window.scrollY + 70 > item.offsetTop + mainMenu.offsetTop) {
            if (!item.classList.contains('hidden')) {
                item.classList.add('hidden');
                moveMenu(index);
            }
        } else {
            if (item.classList.contains('hidden')) {
                item.classList.remove('hidden');
                moveMenu(index - 1);
            }
        }
    });

    let fromTop = window.scrollY;
    let servicesOffsetTop = servicesWrap.offsetTop;

    if (servicesOffsetTop > fromTop) return;

    servicesMenuItems.forEach((item, i) => {
        let elTop = servicesOffsetTop + item.offsetTop;
        let elBottom = elTop + item.parentElement.offsetHeight;

        if (elTop <= fromTop + 160 && elBottom - 100 > fromTop
            ) {
                document.querySelector(`li[data-name="${item.dataset.name}"]`).classList.add('active');
                item.classList.add('active');
            } else {
                document.querySelector(`li[data-name="${item.dataset.name}"]`).classList.remove('active');
                item.classList.remove('active');
            }
    })
});

function moveMenu(index) {
    let len = 0;
    let arr = Array.from(fixedNav.children[0].children);

    arr.forEach((item, i) => {
        if (i > index) return;
        len += item.offsetWidth;
    });
    fixedNav.children[0].style.transform = `translateX(${fixedNav.children[0].offsetWidth - len}px)`;
}

servicesNav.addEventListener('click', e => {
    let name = e.target.dataset.name ? e.target.dataset.name : e.target.parentElement.dataset.name;
    let servicesOffsetTop = servicesWrap.offsetTop;

    servicesNavItems.forEach(item => {
        if (item.dataset.name == name) {
            let itemOffsetTop = document.querySelector(`.services-item-heading[data-name="${name}"]`).offsetTop;
            window.scrollTo(0, servicesOffsetTop + itemOffsetTop - 100);
        }
    })
});
