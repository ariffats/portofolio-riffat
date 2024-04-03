/*============= togle navbar ==============*/


let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () => {
    menuIcon.classList.toggle('fa-xmarks');
    navbar.classList.toggle('active');

}
/*============ scrol section active link ====================*/

let sections = document.querySelector('section');
let navLinks = document.querySelector('header nav a');

window.onscroll = () => {
    sections.forEach(sec => {
        let top = window.scrollY;
        let offset = sec.offsetTop - 150;
        let heigth = sec.offsetHeight;
        let id = sec.getAttribute('id');
        
        if(top >= offset && top < offset + heigth){
            navLinks.forEach.apply(links => {
                links.classList.remove('active');
                document.querySelector('header nav a[href*=' + id +']').classList.add('active');
            });
        };

    });
    /*======================= sticky navbar =======================*/
    let header = document.querySelector('header');
    header.classList.toggle('sticky', window.scrollY > 100);
    
    /*======================= remove toggle icon and navbar =======================*/
    menuIcon.classList.remove('fa-xmarks')
    navbar.classList.remove('active')
};

/*======================= scrool reveal =======================*/
ScrollReveal({
    distance: '80px',
    duration: 2000,
    delay: 200,
})

ScrollReveal().reveal('.home-content, heading', { origin: 'top' });
ScrollReveal().reveal('.home-img, .services-container, .portfolio-box, .contact form', { origin: 'buttom' });
ScrollReveal().reveal('.home-contact, h1, .about-img', { origin: 'left' });
ScrollReveal().reveal('.home-contact, p, .about-content', { origin: 'right' });

/*======================= typed js =======================*/
const typed = new Typed('.multiple-text', {
    strings: ["Student Developer", "Tahfidz Al-Quran","SIBS Lamongan"],
    typeSpeed: 70,
    backSpeed: 70,
    backDelay: 1000,
    loop: true,
})