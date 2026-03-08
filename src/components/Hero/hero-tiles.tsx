import { component$ } from "@builder.io/qwik";
// ✅ No importar CSS aquí

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
  let tileIndex = 0;

  return (
    <div id="tilesGraphics" class="qs-tiles">
      {SIGMA_GRID.map((row, rowIdx) =>
        row.map((cell, colIdx) => {
          if (cell === 1) {
            const delay = tileIndex * 0.04;
            tileIndex++;
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
          return (
            <div
              key={`${rowIdx}-${colIdx}`}
              class="qs-tile--empty"
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