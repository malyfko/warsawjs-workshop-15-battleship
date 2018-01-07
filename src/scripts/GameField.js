import Cell from './Cell';

const GameField = (type) => {

  const gameField = document.createElement('div');
  gameField.className = `game-field ${type}`;
  for (let i = 0; i < 100; i++) {
    gameField.append(new Cell(null, false, null, type, true).htmlNode);
  }

  return (
    gameField
  );

};

export default GameField;
