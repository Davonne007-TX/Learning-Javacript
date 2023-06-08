//Promises
    //I promise to do something
    //Promise is either completed....
    //Promises is resolved or ....
    //Promises are rejected - - promises failed 


// let myPromise = new Promise((resolve, reject) => {  
//     let myAddition = 1 + 1
//     if (myAddition === 3) {
//         resolve("Success");
//     } else {
//         reject("Failed");
//     }
// })

// //then resolves. I promise, then ....
// myPromise.then((message) => {   //this is the resolve, the message is from line 11, what we passes to resolve
//     console.log("This is in the then " + message);
// }).catch((message) => {   //takes the reject, the message is from line 13
//     console.log("This is in the catch " + message);
// })

//

//Make a promise, that takes a resolve, and a reject
// declare a variable with an addition statement
// if the statement is true, console log resolve, else console log reject
//after promise, do then this happens

//if its resolved, then console log message, 
  //or if it failed catch the reject and console log it 

let myPromise = new Promise ((resolve, reject) => {
    let mySubtraction = 2 - 2;
    if (mySubtraction === 5) {
        resolve("true");
    } else {
        reject("false");
    }
});

myPromise.then((message) => {
    console.log("Yes you are correct, this is " + message);
}).catch((message) => {
    console.log("Sorry, you are " + message);
});


//async functions 

//Get One Pokemon 

//Take a async function with an arrow function
//in a try and catch...
//declare a variable that awaits and fetches the pokemon api
//make another variable that take the variable that fetches the api, and formats it into json
// console.log the json format
//call the async function either now, or after you rendered to the browser

// const getPokemon = async () => {
//     try {
//         const pokemon = await fetch (" https://pokeapi.co/api/v2/pokemon/ditto");
//         const data = await pokemon.json();
//         console.log(data);
//         renderPokemon(data);  //Renders the renderPokemon function
//     } catch (error) {
//         console.log("Error", error);
//     }
// };

// //Render to browser

// //take an async function that passes a pokemon
// //declare a variable that grabs the pokemon container from the div in html
// //take that variable and make the innerHTML an empty string
// //declare another variable that creates a new element div
// //set that variables innerHTML to what you want to display, use template literals ${}, 
// //append pokemonContainer to the newly created div

// const renderPokemon = async (pokemon) => {
//     const pokemonContainer = document.getElementById("pokemon-container");
//     pokemonContainer.innerHTML = "";
    
//     const getContainer = document.createElement("div");
//     getContainer.innerHTML = `
//         <h1>Pokemon</h1>
//         <h2>Name: ${pokemon.name}</h2>
//         <p>Height: ${pokemon.height}</p>
//         <p>Weight: ${pokemon.weight}</p>
//         <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
//         <img src="${pokemon.sprites.back_shiny}">
//         <img src="${pokemon.sprites.front_shiny}">
//     `
//         pokemonContainer.appendChild(getContainer);
//     }

// getPokemon();


//Get and Render All Pokemon

const getAllPokemon = async () => {
    try {
      const response = await fetch("https://pokeapi.co/api/v2/pokemon?limit=1000");
      const data = await response.json();
      const pokemonList = data.results;
      for (const pokemon of pokemonList) {
        await displayPokemon(pokemon.url);
      }
    } catch (error) {
      console.log("Error", error);
    }
  };
  
  const displayPokemon = async (url) => {
    try {
      const response = await fetch(url);
      const data = await response.json();
      renderPokemon(data);
    } catch (error) {
      console.log("Error", error);
    }
  };
  
  const renderPokemon = (pokemon) => {
    const pokemonContainer = document.getElementById("pokemon-container");
  
    const pokemonDiv = document.createElement("div");
    pokemonDiv.innerHTML = `
      <h1>Pokemon</h1>
      <h2>Name: ${pokemon.name}</h2>
      <p>Height: ${pokemon.height}</p>
      <p>Weight: ${pokemon.weight}</p>
      <img src="${pokemon.sprites.front_default}" alt="${pokemon.name}">
      <img src="${pokemon.sprites.back_shiny}">
      <img src="${pokemon.sprites.front_shiny}">
    `;
  
    pokemonContainer.appendChild(pokemonDiv);
  };
  
  getAllPokemon();


  