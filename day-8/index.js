var name = "tom";

function sayName() {
  console.log(this.name);
}

sayName();

console.log(this.name);
