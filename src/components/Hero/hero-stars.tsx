import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface Star {
    id: number;
    x: number;
    y: number;
    size: number;
    delay: number;
    duration: number;
    opacity: number;
}

export const HeroStars = component$(() => {
    const stars = useSignal<Star[]>([]);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const generated: Star[] = [];
        for (let i = 0; i < 80; i++) {
            generated.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                size: Math.random() * 2.5 + 0.5,
                delay: Math.random() * 6,
                duration: Math.random() * 3 + 2,
                opacity: Math.random() * 0.7 + 0.3,
            });
        }
        stars.value = generated;
    });

    return (
        <div id="heroStars" class="qs-stars" aria-hidden="true">
            {stars.value.map((star) => (
                <span
                    key={star.id}
                    class="qs-star"
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        animationDelay: `${star.delay}s`,
                        animationDuration: `${star.duration}s`,
                        opacity: `${star.opacity}`,
                    }}
                />
            ))}
            {/* Shooting stars */}
            <span class="qs-shooting-star qs-shooting-star--1" />
            <span class="qs-shooting-star qs-shooting-star--2" />
            <span class="qs-shooting-star qs-shooting-star--3" />
        </div>
    );
});

export default HeroStars;