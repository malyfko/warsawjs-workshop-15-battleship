class Cell {

  constructor (correspondingShip, attempted, cellAttempt, fieldType, activeField) {
    this.cell = document.createElement('div');
    this.attempted = attempted;
    this.correspondingShip = correspondingShip;

    this.cell.className = 'cell';
    this.cell.append(String.fromCharCode(0x000A0));
    if (fieldType === 'computer' && activeField) {
      this.cell.addEventListener('click', this.attemptCell.bind(this));
    }
  }

  attemptCell () {
    this.attempted = true;
    this.cell.innerHTML = this.correspondingShip ? 'X' : String.fromCharCode(0x000B7);
  }

}

export default Cell;
