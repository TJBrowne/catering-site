// export const sideItems = document.querySelector('.sideItems');
// console.log('sides');

const sideContainer = document.querySelector(".sideContainer")
const sideItems = [
    {name: "White Rice", image:"https://i.imgur.com/FbGJPc5.jpg" },
    {name: "Brown Rice", image:"https://i.imgur.com/NjALbMb.jpg" },
    {name: "Rice & Peas", image:"https://i.imgur.com/k6aZuSc.jpg" },
    {name: "Mac & Cheese", image:"https://i.imgur.com/KlcbOFJ.jpg" },
    {name: "Mashed Potatoes", image:"https://i.imgur.com/X0TlsAo.jpg" },
    {name: "Salad", image:"https://i.imgur.com/6fCYMNu.png" },
    {name: "Provisions", image:"https://i.imgur.com/PmtyCDE.jpg" },
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