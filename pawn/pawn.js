function knightPositions(pawnPositions) {
    var isValidPosition = function (_a) {
        var file = _a[0], rank = _a[1];
        return file >= 0 && file < 8 && rank >= 0 && rank < 8;
    };
    var knightMoves = [
        [1, 2],
        [-1, 2],
        [2, 1],
        [-2, 1],
        [2, -1],
        [-2, -1],
        [1, -2],
        [-1, -2],
    ];
    var maxCaptureCount = 0;
    var bestPositions = [];
    for (var file = 0; file < 8; file++) {
        for (var rank = 0; rank < 8; rank++) {
            var captureCount = 0;
            var currentPosition = [file, rank];
            for (var _i = 0, knightMoves_1 = knightMoves; _i < knightMoves_1.length; _i++) {
                var move = knightMoves_1[_i];
                var newPosition = [
                    currentPosition[0] + move[0],
                    currentPosition[1] + move[1],
                ];
                if (isValidPosition(newPosition)) {
                    var newPositionStr = String.fromCharCode(newPosition[0] + 97) + (newPosition[1] + 1);
                    if (pawnPositions.includes(newPositionStr)) {
                        captureCount++;
                    }
                }
            }
            if (captureCount > maxCaptureCount) {
                maxCaptureCount = captureCount;
                bestPositions = [String.fromCharCode(file + 97) + (rank + 1)];
            }
            else if (captureCount === maxCaptureCount) {
                bestPositions.push(String.fromCharCode(file + 97) + (rank + 1));
            }
        }
    }
    return bestPositions;
}
var pawnPositions = ["a1", "b6", "c3", "e5", "f8", "h4"];
console.log(knightPositions(pawnPositions)); // Output should be: ["g6","d7"]
var pawnPositions2 = ["a1", "b6", "c3", "f8", "h4"];
console.log(knightPositions(pawnPositions2)); // Output should be: ["g6","d7"]
