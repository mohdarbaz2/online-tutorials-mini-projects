const btn = document.getElementById("gooey-btn");

btn.addEventListener("mouseenter", () => {
    const box = btn.querySelector(".box");

    for (let i = 0; i < 20; i++) {
        const particle = document.createElement("div");
        particle.classList.add("particle");

        const dx = (Math.random() - 0.5) * 250 + "px";
        const dy = (Math.random() - 0.5) * 120 + "px";

        particle.style.setProperty("--dx", dx);
        particle.style.setProperty("--dy", dy);

        box.appendChild(particle);

        setTimeout(() => particle.remove(), 2000);
    }
});