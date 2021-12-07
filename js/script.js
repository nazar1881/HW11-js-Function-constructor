const SIZE_SMALL = {size: 'small', price: 50, ccal: 20};
const SIZE_MEDIUM = {size: 'medium', price: 75, ccal: 30};
const SIZE_BIG = {size: 'big', price: 100, ccal: 40};
const POTATO = {type: 'potato', price: 15, ccal: 10};
const TOPPING_MAYO = {type: 'mayo', price: 20, ccal: 5};
const CHEESE = {type: 'cheese', price: 10, ccal: 20};
const SAlAT = {type: 'salat',price: 20, ccal: 5};
const PEREC = {type: 'perec',price: 15, ccal: 0};

function Burger (size) {
    this.price = size.price;
    this.ccal = size.ccal;
    this.addModifier = function (option) {
        this.price += option.price;
        this.ccal += option.ccal;
    }
    this.getPrice = function() {
        return this.price;
    };
    this.getCalories = function() {
        return this.ccal;
    };
}

const burger = new Burger(SIZE_BIG);
burger.addModifier(POTATO);
burger.addModifier(CHEESE);
burger.addModifier(SAlAT);

console.log('Price with supplements: ' + burger.getPrice() + ' tugr');
console.log('Price with supplements: ' + burger.getCalories() + ' ccal');
