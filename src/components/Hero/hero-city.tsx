import { component$, useSignal, useVisibleTask$ } from "@builder.io/qwik";

interface Building {
    id: number;
    row: number;
    col: number;
    type: "tree" | "house" | "tower" | "bush";
    delay: number;
}

// Positions on and around the Sigma where structures will "grow"
const CITY_POSITIONS: Omit<Building, "id" | "delay">[] = [
    // Top bar — city skyline
    { row: 0, col: 0, type: "tower" },
    { row: 0, col: 1, type: "house" },
    { row: 0, col: 2, type: "tree" },
    { row: 0, col: 3, type: "tower" },
    { row: 0, col: 4, type: "house" },
    { row: 0, col: 5, type: "tree" },
    { row: 0, col: 6, type: "house" },
    // Upper diagonal
    { row: 1, col: 0, type: "bush" },
    { row: 1, col: 1, type: "tree" },
    { row: 2, col: 1, type: "house" },
    { row: 2, col: 2, type: "tree" },
    // Middle
    { row: 3, col: 2, type: "bush" },
    { row: 3, col: 3, type: "tree" },
    { row: 4, col: 3, type: "tower" },
    // Lower diagonal
    { row: 5, col: 2, type: "tree" },
    { row: 5, col: 3, type: "bush" },
    { row: 6, col: 1, type: "house" },
    { row: 6, col: 2, type: "tree" },
    { row: 7, col: 0, type: "tree" },
    { row: 7, col: 1, type: "bush" },
    // Bottom bar — ground structures
    { row: 8, col: 0, type: "tree" },
    { row: 8, col: 1, type: "house" },
    { row: 8, col: 2, type: "tower" },
    { row: 8, col: 3, type: "tree" },
    { row: 8, col: 4, type: "house" },
    { row: 8, col: 5, type: "bush" },
    { row: 8, col: 6, type: "tree" },
];

const EMOJIS: Record<string, string> = {
    tree: "🌲",
    house: "🏠",
    tower: "🏢",
    bush: "🌿",
};

export const HeroCity = component$(() => {
    const visible = useSignal(false);
    const buildings = useSignal<Building[]>([]);

    // eslint-disable-next-line qwik/no-use-visible-task
    useVisibleTask$(() => {
        const timer = setTimeout(() => {
            const built = CITY_POSITIONS.map((pos, i) => ({
                ...pos,
                id: i,
                delay: i * 0.08,
            }));
            buildings.value = built;
            visible.value = true;
        }, 15000);

        return () => clearTimeout(timer);
    });

    if (!visible.value) return null;

    return (
        <div id="heroCity" class="qs-city" aria-hidden="true">
            {buildings.value.map((b) => (
                <span
                    key={b.id}
                    class="qs-city__structure"
                    data-city-row={String(b.row)}
                    data-city-col={String(b.col)}
                    style={{
                        gridRow: b.row + 1,
                        gridColumn: b.col + 1,
                        animationDelay: `${b.delay}s`,
                    }}
                >
                    {EMOJIS[b.type]}
                </span>
            ))}
        </div>
    );
});

export default HeroCity;