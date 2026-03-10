import { component$ } from "@builder.io/qwik";

const SIGMA_GRID: number[][] = [
  [1, 1, 1, 1, 1, 1, 1],
  [1, 1, 0, 0, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 0, 0, 1, 0, 0, 0],
  [0, 0, 1, 1, 0, 0, 0],
  [0, 1, 1, 0, 0, 0, 0],
  [1, 1, 0, 0, 0, 0, 0],
  [1, 1, 1, 1, 1, 1, 1],
];

const BASE_DELAY = 2; // 2 segundos de espera inicial

export const HeroTiles = component$(() => {
  let activeTileIndex = 0;
  let dimTileIndex = 0;

  return (
    <div id="tilesGraphics" class="qs-tiles">
      {SIGMA_GRID.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          if (cell === 1) {
            const delay = BASE_DELAY + activeTileIndex * 0.04;
            activeTileIndex++;
            return (
              <div
                key={`${rowIdx}-${colIdx}`}
                class="qs-tile qs-tile--active"
                data-tile="true"
                data-row={String(rowIdx)}
                data-col={String(colIdx)}
                style={{ animationDelay: `${delay}s` }}
              />
            );
          }
          const delay = BASE_DELAY + dimTileIndex * 0.03;
          dimTileIndex++;
          return (
            <div
              key={`${rowIdx}-${colIdx}`}
              class="qs-tile qs-tile--dim"
              data-row={String(rowIdx)}
              data-col={String(colIdx)}
              style={{ animationDelay: `${delay}s` }}
            />
          );
        })
      )}
    </div>
  );
});

export default HeroTiles;