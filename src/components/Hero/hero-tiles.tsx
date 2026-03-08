import { component$ } from "@builder.io/qwik";

// 1 = sigma tile activo, 0 = tile dim de fondo
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

export const HeroTiles = component$(() => {
  let activeTileIndex = 0;

  return (
    <div id="tilesGraphics" class="qs-tiles">
      {SIGMA_GRID.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          if (cell === 1) {
            const delay = activeTileIndex * 0.04;
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
          // Tiles dim de fondo — dan contexto y profundidad
          return (
            <div
              key={`${rowIdx}-${colIdx}`}
              class="qs-tile qs-tile--dim"
              data-row={String(rowIdx)}
              data-col={String(colIdx)}
            />
          );
        })
      )}
    </div>
  );
});

export default HeroTiles;