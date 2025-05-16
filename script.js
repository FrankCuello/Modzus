document.addEventListener('DOMContentLoaded', () => {
    const animatedElements = document.querySelectorAll('.animate-on-scroll');

    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
                // Opcional: dejar de observar una vez que es visible si no quieres que se repita la animación
                // observer.unobserve(entry.target); 
            } else {
                // Opcional: quitar la clase si quieres que la animación se repita al scrollear arriba y abajo
                // entry.target.classList.remove('is-visible'); 
            }
        });
    }, {
        threshold: 0.1 // El elemento se considera visible cuando el 10% está en pantalla
    });

    animatedElements.forEach(element => {
        observer.observe(element);
    });
});