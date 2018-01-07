import Point from 'Point';

class Ship {

  constructor(size, anchor, direction){
    this.size = size;
    this.anchor = anchor;
    this.direction = direction;
    this.attemptes = 0;
    this.destroyed = false;
  }

  getCompartments() {
    let compartments = [this.anchor];
    for (let i = 1; i < this.size; i++) {
      compartments.push(compartments[compartments.length - 1].add(this.direction));
    }
    return compartments;
  }

  getSurroundings() {
    let ship = this.getCompartments(),
      surroundings = [],  surroundingsString = [],
      surroundPoints = [new Point(-1, -1), new Point(-1, 0), new Point(-1, 1),
        new Point(0, -1), new Point(0, 1),
        new Point(1, -1), new Point(1, 0), new Point(1 ,1)],
      shipString = ship.map((compartment) => {
        return compartment.toString();
      });
    ship.map((compartment) => {
      surroundPoints.map((surPoint) => {
        let p = compartment.add(surPoint);
        if (surroundingsString.indexOf(p.toString()) === -1 && shipString.indexOf(p.toString()) === -1 && p.isOnField()) {
          surroundingsString.push((p).toString());
          surroundings.push(p);
        }
      })
    });
    return surroundings;
  }

  isOnField() {
    let acceptable = true;
    this.getCompartments().map((compartment)=> {
      if (!compartment.isOnField())
        acceptable = false;
      return acceptable;
    });
    this.getSurroundings().map((surPoint)=>{
      if (!surPoint.isOnField())
        acceptable = false;
      return acceptable;
    });
    return acceptable
  }

  shipWasAttempted() {
    if (this.attemptes < this.size - 1)
      this.attemptes++;
    else
      this.shipWasDestroyed();
  }

  shipWasDestroyed() {
    this.attemptes++;
    this.destroyed = true;
  }

}

export default Ship;
