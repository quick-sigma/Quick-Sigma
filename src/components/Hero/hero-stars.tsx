import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface Star {
    id: number;
    x: number;
    y: number;
    z: number;
    size: number;
    baseOpacity: number;
}

export const HeroStars = component$(() => {
    const stars = useSignal<Star[]>([]);
    const activeStarId = useSignal(-1);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const generated: Star[] = [];
        const TOTAL = 100;

        for (let i = 0; i < TOTAL; i++) {
            const z = i < TOTAL * 0.5 ? 1 : i < TOTAL * 0.8 ? 2 : 3;
            const size = z === 1 ? Math.random() * 1.2 + 0.4
                : z === 2 ? Math.random() * 2 + 0.8
                    : Math.random() * 2.5 + 1.5;
            const baseOpacity = z === 1 ? 0.25 : z === 2 ? 0.45 : 0.7;

            generated.push({
                id: i,
                x: Math.random() * 100,
                y: Math.random() * 100,
                z,
                size,
                baseOpacity,
            });
        }
        stars.value = generated;

        // Pick a random star to glow every ~1s
        const interval = setInterval(() => {
            const idx = Math.floor(Math.random() * TOTAL);
            activeStarId.value = idx;
        }, 1000);

        return () => clearInterval(interval);
    });

    return (
        <div id="heroStars" class="qs-stars" aria-hidden="true">
            {stars.value.map((star) => (
                <span
                    key={star.id}
                    class={[
                        "qs-star",
                        `qs-star--z${star.z}`,
                        activeStarId.value === star.id ? "qs-star--bright" : "",
                    ].join(" ")}
                    style={{
                        left: `${star.x}%`,
                        top: `${star.y}%`,
                        width: `${star.size}px`,
                        height: `${star.size}px`,
                        opacity: `${star.baseOpacity}`,
                    }}
                />
            ))}
        </div>
    );
});

export default HeroStars;