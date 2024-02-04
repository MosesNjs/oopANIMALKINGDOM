// This is the base class from which subclasses will inherit. It's an abstract class, it cannot be instantiated. 
class KingdomAnimalia {
    constructor (name, kingdom = 'Animalia'){
        if(this.constructor === KingdomAnimalia){
        throw new Error ('Class: AnimalKingdom cannot be instantiated. Consider instantiating a child class instead');
        }
        this.name = name;
        this.kingdom = kingdom;
    }

    // This method is private, it cannot be used directly. 
    // This shows Encapsulation, some code is hidden to the public and cannot be accessed directly.
    #identify(){
        console.log(`Animals classified under ${this.name} are ${this.bloodtemperature} and ${this.backbone}.`);
        console.log(this); 
    }
       
    // This method is used as a mediator to allow the private method be used.
    // This shows Abstraction, a method is declarted but it's implementation details are hidden.
    identifyself(){
        this.#identify();
    }
    animals(){
        console.log(`These animals are in the ${this.name} category`);
    }
}

// Creation of subclasses to inherit from AnimalKingdom.

class HasBackbone extends KingdomAnimalia {
    constructor(name){
        super (name);
    if(this.constructor === HasBackbone){
        throw new Error ('this Class cannot be instantiated.');
    }
    this.backbone = ('have a backbone');
    }
}

// These subclasses inherit from the Parent class. 
// This shows Inheritance.  

class NoBackbone extends KingdomAnimalia {
    constructor(name){
        super (name);
    if(this.constructor === NoBackbone){
        throw new Error ('this Class cannot be instantiated.');
    }
    this.backbone = ('have no backbone');
    }
}

// Creation of subclasses to inherit from HasBonebone and NoBackbone
class Arthropoda extends NoBackbone {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('cold blooded');
        this.summary = (`${this.name} are ${this.bloodtemperature} and ${this.backbone}. Examples include Spiders and Scorpions.`);
    }
    // This method is being overriden here and it's made to function different from when it was first declared above.
    // This shows polymorphism.
    animals(){
        console.log('These are some animals under: Insects, Spiders and Scorpions.');
    }
}

class Fish extends HasBackbone {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('cold blooded');
        this.summary = (`${this.name} are ${this.bloodtemperature} and ${this.backbone}. Examples include Sharks and Eels.`);
    }
    animals(){
        console.log('These are some animals under Fish: Sharks, Eels and Seahorses.');
    }
}

class Amphibia extends HasBackbone  {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('cold blooded');
        this.summary = (`${this.name}s are ${this.bloodtemperature} and ${this.backbone}. Examples include Newts and Toads.`);
    }
    animals(){
        console.log('These are some animals under Amphibians: Toads, Newts and Salamandas.');
    }
}
  
class Reptile extends HasBackbone  {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('cold blooded');
        this.summary = (`${this.name}s are ${this.bloodtemperature} and ${this.backbone}. Examples include Crocodiles and Turtles.`);
    }
    animals(){
        console.log('These are some animals under Reptiles: Lizards, Crocodiles, Turtles.');
    }
}

class AVES extends HasBackbone  {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('warm blooded');
        this.summary = (`${this.name} are ${this.bloodtemperature} and ${this.backbone}. Examples include Ducks and Pigeons.`);
    }
    animals(){
        console.log('These are some animals under Aves: Chickens, Ducks and Pigeons.');
    }
}

class Mammal extends HasBackbone  {
    constructor (name) {
        super (name);
        this.bloodtemperature = ('warm blooded');
        this.summary = (`${this.name}s are ${this.bloodtemperature} and ${this.backbone}. Examples include Sheep and Humans.`);
    }
    animals(){
        console.log('These are some animals under Mammal: Sheep, Humans and Goats.');
    }
}

// Instantiating Objects from the child/sub classes above.
const arthropoda = new Arthropoda ('Arthropoda');
const fish = new Fish ('Fish');
const amphibia = new Amphibia('Amphibia');
const reptile = new Reptile('Reptile');
const aves = new AVES('AVES');
const mammal = new Mammal('Mammal');
const animalia = [arthropoda, fish, amphibia, reptile, aves, mammal];

// This method will show all of our objects and explain the animal kingdom.
console.log(`This is a simple classification for Kingdom Animalia:`);
console.log(animalia);

// Use the methods below to get the attributes of any class. Eg:
mammal.identifyself()
// aves.identifyself()
// fish.identifyself()
// amphibia.identifyself()
// reptile.identifyself()
// arthropoda.identifyself()

// Use the below methods to get examples of animals under any class. Eg:
mammal.animals()
// amphibia.animals()
// aves.animals()
// fish.animals()
// reptile.animals()
// arthropoda.animals()