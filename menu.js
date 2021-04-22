// const app = express();

// import { sideItems } from './sides.js';

const container = document.querySelector(".container")
const foodItems = [
  { name: "Rasta Pasta", image: "https://i.imgur.com/T52rr9w.jpg" },
  { name: "Jerk Chicken", image: "https://i.imgur.com/yV2aWbl.jpg" },
  { name: "Stew Chicken", image: "https://i.imgur.com/50i2nhh.jpg" },
  { name: "BBQ Chicken", image: "https://i.imgur.com/f2RdPyr.png" },
  { name: "Curry Shrimp", image: "https://i.imgur.com/u6pWzqM.jpg" },
  { name: "Escovitch Fish", image: "https://i.imgur.com/2iMHd3c.jpg" },
  { name: "Stew Fish", image: "https://i.imgur.com/q2yC8zb.jpg" },
  { name: "Oxtail", image: "https://i.imgur.com/Bf1uI9u.jpg" },
  { name: "Curry Goat", image: "https://i.imgur.com/WBBOgdy.jpg" },
  { name: "Curry Chicken", image: "https://i.imgur.com/pzs09il.jpg" },
  { name: "Stew Beef", image: "https://i.imgur.com/nbbV8OX.jpg" },
  { name: "Baked Chicken", image: "https://i.imgur.com/PY4WQFB.jpg" },
  { name: "Pepper Steak", image: "https://i.imgur.com/UIrj6Vh.jpg" },
  { name: "Stew Peas", image: "https://i.imgur.com/r0aYXkZ.jpg" },
  { name: "Cow Foot", image: "https://i.imgur.com/0skprp6.jpg" },
  { name: "Fried Chicken", image: "https://i.imgur.com/FmSAmEu.jpg" },
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

