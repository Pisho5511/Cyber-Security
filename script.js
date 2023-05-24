let navbar = document.querySelector(' .navlist');

document.querySelector('#menu-icon').onclick = () =>{
    navbar.classList.toggle('active')
}


/*document.addEventListener('scroll', () =>{
    const navbar = document.querySelector('.navbar');

    if (window.scrollY > 15) {
        navbar.classList.add('sticky');
    } else {
        navbar.classList.remove('sticky')
    }

})*/