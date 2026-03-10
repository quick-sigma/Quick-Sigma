import { component$, useStore } from "@builder.io/qwik";

const SIGMA_GRID: number[][] = [[1, 1, 1, 1, 1, 1, 1],[1, 1, 0, 0, 0, 0, 0],[0, 1, 1, 0, 0, 0, 0],[0, 0, 1, 1, 0, 0, 0],[0, 0, 0, 1, 0, 0, 0],[0, 0, 1, 1, 0, 0, 0],[0, 1, 1, 0, 0, 0, 0],[1, 1, 0, 0, 0, 0, 0],[1, 1, 1, 1, 1, 1, 1],
];

const BASE_DELAY = 2; // 2 segundos de espera inicial

export const HeroTiles = component$(() => {
  const clickedTiles = useStore<Record<string, "green" | "red">>({});
  let activeTileIndex = 0;
  let dimTileIndex = 0;

  return (
    <div id="tilesGraphics" class="qs-tiles">
      {SIGMA_GRID.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          const key = `${rowIdx}-${colIdx}`;
          const status = clickedTiles[key];

          if (cell === 1) {
            const delay = BASE_DELAY + activeTileIndex * 0.04;
            activeTileIndex++;
            return (
              <div
                key={key}
                class={`qs-tile qs-tile--active ${status === "green" ? "qs-tile--green" : ""}`}
                data-tile="true"
                data-row={String(rowIdx)}
                data-col={String(colIdx)}
                style={{ animationDelay: `${delay}s` }}
                onClick$={() => {
                  clickedTiles[key] = "green";
                }}
              />
            );
          }
          const delay = BASE_DELAY + dimTileIndex * 0.03;
          dimTileIndex++;
          return (
            <div
              key={key}
              class={`qs-tile qs-tile--dim ${status === "red" ? "qs-tile--red" : ""}`}
              data-row={String(rowIdx)}
              data-col={String(colIdx)}
              style={{ animationDelay: `${delay}s` }}
              onClick$={() => {
                clickedTiles[key] = "red";
              }}
            />
          );
        })
      )}
    </div>
  );
});

export default HeroTiles;