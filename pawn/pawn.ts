function knightPositions(pawnPositions: string[]): string[] {
  const isValidPosition = ([file, rank]: number[]): boolean => {
    return file >= 0 && file < 8 && rank >= 0 && rank < 8;
  };

  const knightMoves: [number, number][] = [
    [1, 2],
    [-1, 2],
    [2, 1],
    [-2, 1],
    [2, -1],
    [-2, -1],
    [1, -2],
    [-1, -2],
  ];

  let maxCaptureCount = 0;
  let bestPositions: string[] = [];

  for (let file = 0; file < 8; file++) {
    for (let rank = 0; rank < 8; rank++) {
      let captureCount = 0;
      const currentPosition = [file, rank];

      for (const move of knightMoves) {
        const newPosition = [
          currentPosition[0] + move[0],
          currentPosition[1] + move[1],
        ];

        if (isValidPosition(newPosition)) {
          const newPositionStr =
            String.fromCharCode(newPosition[0] + 97) + (newPosition[1] + 1);
          if (pawnPositions.includes(newPositionStr)) {
            captureCount++;
          }
        }
      }

      if (captureCount > maxCaptureCount) {
        maxCaptureCount = captureCount;
        bestPositions = [String.fromCharCode(file + 97) + (rank + 1)];
      } else if (captureCount === maxCaptureCount) {
        bestPositions.push(String.fromCharCode(file + 97) + (rank + 1));
      }
    }
  }

  return bestPositions;
}

const pawnPositions: string[] = ["a1", "b6", "c3", "e5", "f8", "h4"];
console.log(knightPositions(pawnPositions)); // Output should be: [ 'd7', 'g6' ]

const pawnPositions2: string[] = ["a1", "b6", "c3", "f8", "h4"];
console.log(knightPositions(pawnPositions2)); // Output should be: [ 'a4', 'd5', 'd7', 'g6' ]
