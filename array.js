const dataAraay = [
  {
    userId: 1,
    userName: "სახელი 1",
    userLastName: "გვარი 1",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 20,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 2,
    userName: "სახელი 2",
    userLastName: "გვარი 2",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 30,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 3,
    userName: "სახელი 3",
    userLastName: "გვარი 3",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 35,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 4,
    userName: "სახელი 4",
    userLastName: "გვარი 4",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 29,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 5,
    userName: "სახელი 5",
    userLastName: "გვარი 5",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 49,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 6,
    userName: "სახელი 6",
    userLastName: "გვარი 6",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
  {
    userId: 7,
    userName: "სახელი 7",
    userLastName: "გვარი 7",
    userImage: "https://cdn-icons-png.flaticon.com/512/149/149071.png",
    userAge: 31,
    userAddresses: ["address 1", "address 2", "address 3"],
  },
];

let cardsContainer = document.getElementById("cardsContainer");

function createCards(array, container) {
  for (let i = 0; i < array.length(); i++) {
    let eachCard = document.createElement("div");

    let id = document.createElement("p");
    id.innerText = "id: " + array[i].id;
    id.classList.add("id");

    let img = document.createElement("img");
    img.setAttribute("src", array[i].userImage);
    img.classList.add("profile");

    let name = document.createElement("h3");
    name.innerText = array[i].userName + " " + array[i].userLastName;
    name.classList.add("nameLname");

    let age = document.createElement("p");
    age.innerText = "age: " + array[i].userAge;
    age.classList.add("age");
    let adressNames = "";
    let addressContainer = document.createElement("div");
    for (let j = 0; j < array[i].userAddresses.length; j++) {
      let eachAddress = document.createElement("div");
      eachAddress.innerText(array[i].userAddresses[j]);
      addressContainer.appendChild(eachAddress);
    }
    let address = document.createElement("p");
    address.innerText = "adress : " + adressNames;
    address.classList.add("address");

    eachCard.appendChild(id);
    eachCard.appendChild(img);
    eachCard.appendChild(name);
    eachCard.appendChild(age);
    eachCard.appendChild(addressContainer);
    container.appendChild(eachCard);
  }
}

createCards(dataAraay);
