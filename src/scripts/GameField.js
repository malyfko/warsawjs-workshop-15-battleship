const GameField = (type) => {

  const gameField = document.createElement('div');
  gameField.className = `game-field ${type}`;

  return (
    gameField
  );

};

export default GameField;
