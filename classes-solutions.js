// // 1)

class Human {
  constructor(name, age) {
    this.name = name;
    this.age = age;
  }

  ageOneYear() {
    this.age++;
  }

  eating() {
    console.log("mmm, mmm, mmm, I'm love'n it");
  }
};

let deyvi = new Human('deyvi', 18);
// console.log(deyvi.age);
//
// deyvi.ageOneYear();
//
// console.log(deyvi.age);
//
// deyvi.eating();

// // 2)

class Vector {
  constructor (x, y) {
    this.x = x;
    this.y = y;
  }

  plus(vector) {
    return new Vector(this.x + vector.x, this.y + vector.y);
  }

  minus(vector) {
    return new Vector(this.x - vector.x, this.y - vector.y);
  }

  getLength(vector) {
    let length = Math.sqrt(Math.pow(this.x, 2) + Math.pow(this.y, 2))
    return length
  }
};

let v1 = new Vector(1, 2);
let v2 = new Vector(2, 3);
let v3 = new Vector(3, 4);

// console.log(v1.plus(v2));
// console.log(v1.minus(v2));
// console.log(v3.getLength());
