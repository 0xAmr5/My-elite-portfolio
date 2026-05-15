document.addEventListener('DOMContentLoaded', () => {
    // 1. AOS Animations
    AOS.init({ duration: 1200, once: true });

    // 2. Mouse Glow Follow
    const glow = document.getElementById('mouse-glow');
    window.addEventListener('mousemove', (e) => {
        glow.style.left = e.clientX + 'px';
        glow.style.top = e.clientY + 'px';
    });

    // 3. Scroll Progress Bar
    window.addEventListener('scroll', () => {
        const winScroll = document.body.scrollTop || document.documentElement.scrollTop;
        const height = document.documentElement.scrollHeight - document.documentElement.clientHeight;
        const scrolled = (winScroll / height) * 100;
        document.getElementById("progress-bar").style.width = scrolled + "%";
    });

    console.log("Masterpiece V6 // The Royal Gold // Amr Othman Edition");
});