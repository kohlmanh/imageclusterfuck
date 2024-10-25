// JavaScript for bouncing effect
const images = document.querySelectorAll('.bouncing-image');

images.forEach(img => {
    // Set random starting positions and velocities
    let x = Math.random() * window.innerWidth;
    let y = Math.random() * window.innerHeight;
    let dx = (Math.random() - 0.5) * 4; // Random horizontal speed
    let dy = (Math.random() - 0.5) * 4; // Random vertical speed

    function animate() {
        // Update position
        x += dx;
        y += dy;

        // Check for boundary collision
        if (x <= 0 || x + img.width >= window.innerWidth) {
            dx = -dx; // Reverse direction
        }
        if (y <= 0 || y + img.height >= window.innerHeight) {
            dy = -dy; // Reverse direction
        }

        // Apply updated position
        img.style.left = `${x}px`;
        img.style.top = `${y}px`;

        // Repeat animation
        requestAnimationFrame(animate);
    }

    // Set initial positions
    img.style.left = `${x}px`;
    img.style.top = `${y}px`;

    // Start the animation
    animate();
});