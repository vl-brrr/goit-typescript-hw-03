class Key {
  private signature: number = Math.random();

  getSignature() {
    return this.signature;
  }
}

class Person {
  constructor(private key: Key) {}

  getKey() {
    return this.key;
  }
}

abstract class House {
  private tenants: Person[] = [];
  public door: boolean = false;
  constructor(protected key: Key) {}

  comeIn(tenant: Person) {
    if (this.door) {
      this.tenants.push(tenant);
      console.log("Come in ...");
    } else {
      console.log("The door is closed.");
    }
  }

  abstract openDoor(key: Key): void;
}

class MyHouse extends House {
  constructor(key: Key) {
    super(key);
  }
  openDoor(key: Key): void {
    if (key === this.key) {
      this.door = true;
      console.log("The door is opened.");
    } else {
      console.log("Can`t open the house with this key.");
    }
  }
}

const key = new Key();

const house = new MyHouse(key);
const person = new Person(key);

house.openDoor(person.getKey());

house.comeIn(person);

export {};
