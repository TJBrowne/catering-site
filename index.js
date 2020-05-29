// const app = express();

// import { sideItems } from './sides.js';

const container = document.querySelector(".container")
const foodItems = [
  { name: "Rasta Pasta", image: "https://i.imgur.com/lYUWCee.jpg" },
  { name: "Jerk Chicken", image: "https://i.imgur.com/bQ9k9jU.jpg" },
  { name: "Stew Chicken", image: "https://i.imgur.com/CbzZJad.jpg" },
  { name: "BBQ Chicken", image: "https://i.imgur.com/a1oZ96h.jpg" },
  { name: "Curry Shrimp", image: "https://i.imgur.com/TjsNwT3.jpg" },
  { name: "Escovitch Fish", image: "https://i.imgur.com/uXiIuVq.jpg" },
  { name: "Stew Fish", image: "https://i.imgur.com/9FJv8cL.jpg" },
  { name: "Oxtail", image: "https://i.imgur.com/pAmQdVM.jpg" },
  { name: "Curry Goat", image: "https://i.imgur.com/RC6jS0m.jpg" },
  { name: "Curry Chicken", image: "https://i.imgur.com/Xfei0dp.jpg" },
  { name: "Stew Beef", image: "https://i.imgur.com/bQ9k9jU.jpg" },
  { name: "Baked Chicken", image: "https://i.imgur.com/aU3QhRW.jpg" },
  { name: "Pepper Steak", image: "https://i.imgur.com/2WL4e5O.jpg" },
  { name: "Stew Peas", image: "https://i.imgur.com/ePc6KcG.jpg" },
  { name: "Cow Foot", image: "https://i.imgur.com/nPuxYaW.jpg" },
  { name: "Fried Chicken", image: "https://i.imgur.com/st5lwVw.jpg" },
]

console.log(foodItems);

const showFoodItems = () => {
    let output = " "
    foodItems.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                  <img class="card--image" src=${image} />
                  <h1 class="card--title">${name}</h1>
                  <a class="card--link" href="/sides.html">Select</a>
                </div>
                `)
    )
    container.innerHTML = output
  }
  
  document.addEventListener("DOMContentLoaded", showFoodItems)












  // const foodItems = [
//     { name: "Rasta Pasta", image: "images/RP.jpg" },
//     { name: "Jerk Chicken", image: "images/JC.jpg" },
//     { name: "Stew Chicken", image: "images/SC.jpg" },
//     { name: "BBQ Chicken", image: "images/BBQC.jpg" },
//     { name: "Curry Shrimp", image: "images/CS.jpg" },
//     { name: "Escovitch Fish", image: "images/EF.jpg" },
//     { name: "Stew Fish", image: "images/SF.jpg" },
//     { name: "Oxtail", image: "images/OX.jpg" },
//     { name: "Curry Goat", image: "images/CG.jpg" },
//   ]