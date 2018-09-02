// Alex Brown's car
this.car = "Ford Fiesta w/ ugly spoiler";

// Matteo's car
var matteosGarage = {
    car: "Subaru Legacy",
    getCar: function() {
        return this.car;
    }
};

console.log(matteosGarage.getCar());

// I want to store the property in the object for later use
var storeCar = matteosGarage.getCar;

// I want to retrive the function
console.log(storeCar()); // This is retrieving the Fiesta!

var myActualGetCarFunction = matteosGarage.getCar.bind(matteosGarage);
// Check versus this example
var myActualGetCarFunction2 = matteosGarage.getCar.bind(this);
console.log(myActualGetCarFunction());
console.log(myActualGetCarFunction2());

