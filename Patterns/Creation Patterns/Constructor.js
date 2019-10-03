/* 
 * (en) The "Constructor" Pattern is used in JS to create objects, 
 * everything in this language is an object. By the common theory
 * "Constructor" used to initialize created object. It is a
 * special function.
 * 
 * This pattern is implemented “out of the box” in native JS / ES6 "Classes"
 * P.S.: Own description
 */

// Native JS (creation, define properties, inheritance)
const createObj = val => {
    this.val = val;
};
const obj1 = { val: 1 };
const obj2 = new createObj(1);
const obj3 = Object.create(Object.prototype, { val: { value: 3 } });
console.log(obj1.val, obj2.val, obj3.val);

obj1.bar = 1;
obj2['bar'] = 2;
Object.defineProperty(obj3, 'bar', { value: 3 });
Object.defineProperties(obj3, {
    'bar1' : { 
        value: 4,
        enumerable: true,
        configurable: false
    }, 'bar2' : { 
        value: 5,
        writable: true }})
console.log(obj1.bar, obj2.bar, obj3.bar, obj3.bar1, obj3.bar2);

const obj4 = Object.create(obj1, { baz: { value: 6 }});
console.log(obj4);


// ES6, classes (creation, define properties, inheritance)
class Car {
    constructor(maker, model) {
        this.maker = maker;
        this.model = model;
    }

    drive() {
        console.log(`'${this.maker} ${this.model}' do zoom - zoom!`);
    }
}

class Tesla {
    constructor(model, chargetime) {
        super('Tesla', model);
        this.chargetime = chargetime;
    }

    charge() {
        console.log(`'${this.maker} ${this.model}' charging ${this.chargetime} minutes.`);
    }
}

const car = new Car('Tesla', '3');
const tesla = new Car('2', 20);

car.drive();
tesla.drive();
tesla.charge();