window.addEventListener('scroll', () =>{
    document.querySelector('nav').classList.toggle
    ('window-scroll', window.scrollY > 0)
});

const navBar = document.querySelector('.nav_menu');
const openNav = document.querySelector('#open_menu_btn');
const closeNav = document.querySelector('#close_menu_btn');

openNav.addEventListener('click', () =>{
    navBar.style.display = 'flex';
    openNav.style.display = 'none';
    closeNav.style.display = 'inline-block';
    
})

closeNav.addEventListener('click', () =>{
    navBar.style.display = 'none';
    openNav.style.display = 'inline-block';
    closeNav.style.display = 'none';
    
})


