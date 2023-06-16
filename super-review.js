//create a function for main html
function main () {
    const superReviewContainer = document.getElementById("super-review-container"); //grab div from html
    const headingOne = document.createElement("h1");
    headingOne.innerHTML = ` <h1 class="firstHeading">Super Review Javascript</h1>`;
 
    superReviewContainer.appendChild(headingOne);

   //creating a paragraph
    const firstParagraph = document.createElement("p");
    firstParagraph.innerHTML = `<p class="para">See Console Log For Details</p> `;

    superReviewContainer.appendChild(firstParagraph); //append first paragraph to super-review-container on html

    //creating an image 
    const myImage = document.createElement("img");
    myImage.src = "..//images/pinkKeyboard.jpg";

    myImage.style.maxWidth = "900px";
    myImage.style.marginLeft = "auto";
    myImage.style.marginRight = "auto";
    myImage.style.display = "block";
    myImage.style.borderRadius = "8px";

    superReviewContainer.appendChild(myImage);
}

main();


//Review 

//Constructor Functions With EXTEND AND SUPER
class Cinema {
    constructor(title, rated, genre) {
        this.title = title;
        this.rated = rated;
        this.genre = genre;
    }
}

class Movie extends Cinema {
    constructor(title, rated, genre, price) {    //add the new one you want
        super(title, rated, genre)   //super the old one, from the first class
         this.price = price;  //add the new one
    }
    getInfo() {
        return `The Movie ${this.title} is a ${this.genre} with Jim Carey`;
    }
}

let myMovie = new Movie("Bruce Almighty", "PG-13", "Comedy", 10);
console.log(myMovie);
console.log(myMovie.getInfo());

//

class Monuments {
    constructor(name, location, height, weight, material) {
        this.name = name;
        this.location = location;
        this.height = height;
        this.weight = weight;
        this.material = material;
}
    }      

class Statues extends Monuments {
    constructor(name, location, height, weight, material, purpose) {
        super(name, location, height, weight, material);
        this.purpose = purpose;
    }
    getFact() {
        return `${this.name} is the 16th President of the USA and his statue is made out of ${this.material}`;
    }
}

const popularMonument = new Statues("Abraham Lincoln", "Washington DC", 19, 120, "Georgia Marble", "Ended Civil War, and Emancipation Proclamation");
console.log(popularMonument);
console.log("Fact:", popularMonument.getFact());

//

//Other ways to do the above....
  //break it down into functions

function IceCream(flavor, topping, size, price) {
    this.flavor = flavor;
    this.topping = topping;
    this.size = size;
    this.price = price;
}

function AmazingIceCream (flavor, topping, size, price, container) {  //function adds the new property 
    IceCream.call(this, flavor, topping, size, price); //calls Ice Cream with its og properties
    this.container = container;  //adds the new one
}

AmazingIceCream.prototype = Object.create(IceCream.prototype); // now set your prototype chain to establish inheritance relationship

AmazingIceCream.prototype.getMyIceCream = function () {
    console.log(`My Favorite Ice Cream is ${this.flavor} with ${this.topping} on the top`);
}

let myIceCream = new AmazingIceCream("Vanilla", "Chocolate", "24", 15, "cone");
console.log(myIceCream);
myIceCream.getMyIceCream();

//
//created a constructor function, that takes 4 parameters
function getMovie (title, rated, price, targetAudience) {
    this.title = title; //and assign value
    this.rated = rated;
    this.price = price;
    this.targetAudience = targetAudience
}

//create another function
function favoriteMovie (title, rated, price, targetAudience, genre) {
    getMovie.call(this, title, rated, price, targetAudience);
    this.genre = genre;
}

favoriteMovie.prototype.showFavMovie = function () {
    console.log(`My favorite movie is ${this.title} and it is rated ${this.genre}`);
}

let myFavoriteMovie = new favoriteMovie("The Wizard of OZ", "G", 5, "children and adults", "fantasy");
console.log(myFavoriteMovie);
myFavoriteMovie.showFavMovie();  


//

//setTimeout() 

setTimeout(function ()  {
    console.log("I will run in 3 seconds");

}, 3000);

//
setTimeout(function () {
    console.log("I will run in 2 seconds, before the setTimeout above, I mean below haha you know what I mean, I will also run after all the other code that runs in one second.");
}, 2000);

//

//Create an object with a method
let hopper = {
    firstName: "Hopper",
    movie: "Bugs Life",
    size: 4,
    rank: "Leader of the Grasshoppers",
    getHoppersQuote: function () {
        console.log("Lets fly!");
    }
};

hopper.getHoppersQuote();

//
let ramanNoodles = {
    flavor: "Chicken",
    container: "Package",
    company: "Maruchan",
    price: 2,
    showCompany: function () {
        console.log(`My favorite noddles is the ${this.flavor} flavor, and in a ${this.container} by the ${this.company} Company`);
    }
};

ramanNoodles.showCompany();

//you could have more then one function (method) in an object
let me = {
    firstName: "Davonne",
    lastInitial: "V",
    favQuote: function () {
        console.log("All you have to do is what something and let yourself have it");  
    }, 
   getAge: function (year) {
     return year - 1993;
   }, 
   getDogsName(name) {
     console.log("My oldest dog name is " + name);
    }
}   

me.favQuote();
console.log(me.getAge(2022));
me.getDogsName("Maryjane");


//

//For Each Method
const favoriteNumber = [15, 7, 11, 29, 50];

function myFunction(item, index, array) {  //this shows the arrays item, index and array
    console.log(item, index, array);
}

favoriteNumber.forEach(myFunction);

//
let bookNames = ["Twlight", "Harry Potter", "HungerGames", "Fifty Shade Grey"];
bookNames.forEach(book => {
    console.log(book + " is a popular book");
});

//Grabs the items from the array dwarfs, and what index they are at
let dwarfs = ["Sleepy", "Happy", "Grumpy", "Sneezy", "bashful", "Doc", "Dopey"];

function sevenDwarfs (item, index) {
    console.log(item, index);
}

dwarfs.forEach(sevenDwarfs);

//Random Questions
 

// Write a function that takes the base and height of a triangle and return its area.

function areaTriangle(base, height) {
    let area = (base * height) / 2;
    return area;
}

console.log(areaTriangle(10, 20));



// review if statements and ternary 
 
//This is if statements

// if (condition) {
//     do something
// } else {
//     do something else
// }

// condition ? do something : do something else       


const classArray = [1, 2, 3, 4];

function logIfOddAndEven(array) {
    for (let i = 0; i < array.length; i++) {
        const ele =classArray[i];
        if(ele % 2 === 1) {
            console.log("Odd:", ele);
        } else {
            console.log("Even:", ele);
        }
   }
}

logIfOddAndEven(classArray);


//Ternary Example of the same one from above 



//