class Cell {

  constructor (correspondingShip, attempted, cellAttempt, fieldType, activeField) {
    this.htmlNode = document.createElement('div');
    this.attempted = attempted;
    this.correspondingShip = correspondingShip;

    this.htmlNode.className = 'cell';
    this.htmlNode.append(String.fromCharCode(0x000A0));
    if (fieldType === 'computer' && activeField) {
      this.htmlNode.addEventListener('click', this.attemptCell.bind(this));
    }
  }

  attemptCell () {
    this.attempted = true;
    this.htmlNode.innerHTML = this.correspondingShip ? 'X' : String.fromCharCode(0x000B7);
  }

}

export default Cell;
