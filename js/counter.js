document.addEventListener('DOMContentLoaded', () => {
    const counters = document.querySelectorAll('.count-number');
    const duration = 1500; // duration in milliseconds
    const frameDuration = 1000 / 60; // 60 frames per second
    const totalFrames = Math.round(duration / frameDuration);

    const observerOptions = {
        threshold: 0.5
    };

    const updateCount = (counter, countTo) => {
        let frame = 0;

        const incrementCount = () => {
            frame++;
            const progress = frame / totalFrames;
            const currentCount = Math.round(countTo * progress);

            if (frame < totalFrames) {
                counter.innerText = currentCount.toLocaleString() + '+';
                requestAnimationFrame(incrementCount);
            } else {
                counter.innerText = countTo.toLocaleString() + '+';
            }
        };

        incrementCount();
    };

    const startCounter = (entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                const counter = entry.target;
                const target = +counter.getAttribute('data-to');
                updateCount(counter, target);
                observer.unobserve(counter);
            }
        });
    };

    const observer = new IntersectionObserver(startCounter, observerOptions);

    counters.forEach(counter => {
        observer.observe(counter);
    });
});