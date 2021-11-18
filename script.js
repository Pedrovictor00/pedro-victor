let menu = document.querySelector('#menu-bars');
let header = document.querySelector('header');

menu.onclick = () =>{
    menu.classList.toggle('fa-times');
    header.classList.toggle('active');
}

windows.onscroll = () =>{
    menu.classList.remove('fa-times');
    header.classList.remove('active');
}

//Texto animado

var typed = new Typed('.typing-text', {
    strings : ['Desenvolvedor fullstack', 'Web designer', 'Designer gráfico', 'Desenvolvedor front-end ', 'Desenvolvedor back-end'],
    loop : true,
    typeSpeed : 150
    })

 "https://cdnjs.cloudflare.com/ajax/libs/vanilla-tilt/1.7.2/vanilla-tilt.min.js">


    vanillTilt.init(document.querySelectorAll('.tilt'),{
        max : 25
    });

    VanillaTilt.init(document.querySelectorAll('.tilt'),{
    max:25
});
