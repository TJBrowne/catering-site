// export const sideItems = document.querySelector('.sideItems');
// console.log('sides');

const sideContainer = document.querySelector(".sideContainer")
const sideItems = [
    {name: "White Rice", image:"https://i.imgur.com/TBpz2j3.jpg" },
    {name: "Brown Rice", image:"https://i.imgur.com/5ACLJR0.jpg" },
    {name: "Rice & Peas", image:"https://i.imgur.com/65r8Omt.jpg" },
    {name: "Mac & Cheese", image:"https://i.imgur.com/b5XgGDR.jpg" },
    {name: "Mashed Potatoes", image:"https://i.imgur.com/Gp70GY8.jpg" },
    {name: "Salad", image:"https://i.imgur.com/Uaqd6vK.png" },
    {name: "Provisions", image:"https://i.imgur.com/iY726AK.jpg" },
]
console.log(sideItems);

const showSideItems = () => {
    let output = " "
    sideItems.forEach(
      ({ name, image }) =>
        (output += `
                <div class="card">
                <img class="card--image" src=${image} />
                <h1 class="card--title">${name}</h1>
                <a class="card--link" href="#">Select</a>
                </div>
                `)
    )
    sideContainer.innerHTML = output
  }

document.addEventListener("DOMContentLoaded", showSideItems)