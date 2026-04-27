const btn = document.getElementById("gooey-btn");
const box = btn.querySelector(".box");

btn.addEventListener("click", (e) => {
    createExplosion();
    createRipple(e);
    impactBounce();
});

function createExplosion() {
    for (let i = 0; i < 40; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const angle = Math.random() * Math.PI * 2;
        const distance = 150 + Math.random() * 150;

        const dx = Math.cos(angle) * distance + "px";
        const dy = Math.sin(angle) * distance + "px";

        particle.style.setProperty("--dx", dx);
        particle.style.setProperty("--dy", dy);

        box.appendChild(particle);
        setTimeout(() => particle.remove(), 1500);
    }
}

function createRipple(e) {
    const ripple = document.createElement("div");
    ripple.classList.add("ripple");

    const rect = box.getBoundingClientRect();
    ripple.style.left = e.clientX - rect.left + "px";
    ripple.style.top = e.clientY - rect.top + "px";

    box.appendChild(ripple);
    setTimeout(() => ripple.remove(), 700);
}

function impactBounce() {
    box.classList.add("impact");
    setTimeout(() => box.classList.remove("impact"), 150);
}