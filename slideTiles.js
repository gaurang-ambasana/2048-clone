export default (cells) => {
  Promise.all(
    cells.flatMap((group) => {
      const promises = [];

      for (let i = 1; i < group.length; i++) {
        const cell = group[i];

        if (cell.tile === null) continue;

        let lastValidCell = null;

        for (let j = i - 1; j >= 0; j--) {
          const moveToCell = group[j];

          if (moveToCell.canAccept(cell.tile)) lastValidCell = moveToCell;
          else break;
        }

        if (lastValidCell !== null) {
          promises.push(cell.tile.waitForTransition());

          if (lastValidCell.tile !== null) lastValidCell.mergeTile = cell.tile;
          else lastValidCell.tile = cell.tile;
        }

        cell.tile = null;
      }
      return promises;
    })
  );
};
