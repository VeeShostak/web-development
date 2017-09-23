// ===
class OldSyntax {
  constructor() {
    this.name = 'john';
  }
  getGreeting() {
    return `Hi my name is ${this.name}.`;
  }
}

const tempOld = new OldSyntax();
console.log(tempOld);

// bind works
console.log(tempOld.getGreeting());

// broke binding, context changed.
// (can fix by this.getGreting = this.getGreeting.bind(this))
const getGreeting = tempOld.getGreeting;
console.log(getGreeting());

// =====

// can setuo key value pairs inline
class NewSyntax {
  name = 'Jen';
  getGreeting = () => {
    return `Hi my name is ${this.name}.`;
  }
}

const tempNew = new NewSyntax();
console.log(tempNew);

const newGetGreeting = tempNew.getGreeting;
console.log(newGetGreeting());
