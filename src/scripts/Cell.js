class Cell {

  constructor () {
    this.htmlNode = document.createElement('div');
    this.attempted = false;
    this.correspondingShip = null;

    this.htmlNode.className = 'cell';
    this.htmlNode.append(String.fromCharCode(0x000A0));
    this.htmlNode.addEventListener('click', this.attemptCell.bind(this));
  }

  attemptCell () {
    this.attempted = true;
    this.htmlNode.innerHTML = this.correspondingShip ? 'X' : String.fromCharCode(0x000B7);
  }

}

export default Cell;
