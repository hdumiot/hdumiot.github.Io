/*======= hamburger=====*/
let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');


menuIcon.onclick = () => {
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');

};

/*=======script pour changer la couleur du titre du header=====*/

let sections = document.querySelectorAll('section');
let navLinks = document.querySelectorAll('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let height = sec.offsetHeight;
        let id = sec.getAttribute('id');

        if(top >= offset && top < offset + height) {
            navLinks.forEach(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        }
    });
    /*=======script pour sticky navbar=====*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky',window.scrollY >100);


    /*=======supprimer l'icône de basculement et la barre de navigation lorsque vous cliquez sur le lien de la barre de navigation =====*/
    menuIcon.classList.remove('bx-x');
    navbar.classList.remove('active');
};

 /*=======Scroll reveal =====*/

ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 2000,
    delay:200
});

ScrollReveal().reveal('.home_content, .heading', {origin: 'top'});
ScrollReveal().reveal('.home_img, .skills_container, .project_box , .contact form', {origin: 'bottom'});
ScrollReveal().reveal('.home_content h1, .about_img', {origin: 'left'});
ScrollReveal().reveal('.home_content p, .about_content', {origin: 'right'});

 /*=======library typed JS =====*/
 const typed = new Typed('.multiple_text', {
    strings: ['Data analyst','Student', 'Bodybuilder'],
    typeSpeed: 100,
    backSpeed:100,
    backDelay: 1000,
    lopp:true
  });