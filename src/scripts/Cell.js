class Cell {

  constructor () {
    this.cell = document.createElement('div');
    this.attempted = false;
    this.correspondingShip = null;

    this.cell.className = 'cell';
    this.cell.append(String.fromCharCode(0x000A0));
    this.cell.addEventListener('click', this.attemptCell.bind(this));
  }

  attemptCell () {
    this.attempted = true;
    this.cell.innerHTML = this.correspondingShip ? 'X' : String.fromCharCode(0x000B7);
  }

}

export default Cell;
