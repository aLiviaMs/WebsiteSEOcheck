document.addEventListener('DOMContentLoaded', () => {

    //Animações ao iniciar a página index. (Pode ser aplicado a qualquer página da aplicação caso queira)
    let tl1 = new TimelineMax();

    tl1
        .fromTo('.menu-center', 2,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')

        .fromTo('.title', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')
        .fromTo('.menu-left', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')

        .fromTo('.menu-right', 0.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')
        .fromTo('.container', 1.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')
        .fromTo('.categories', 1.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')
        .fromTo('.footer-informations', 1.7,
            { y: 50, opacity: 0, },
            {
                y: 0, opacity: 1, ease: Back.easeOut.config(1.7)
            }, '-=0.5')
})