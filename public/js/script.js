const url = "https://randomuser.me/api/?results=9";

fetch(url)
  .then((response) => response.json())
  .then(
    (data) => (
      console.log(data.results[0]),
      (random.innerHTML = `
      <div class="random-body">
      <img src="${data.results[0].picture.large}" class="userPicture" />
      <h1 class="">${data.results[0].name.first} ${data.results[0].name.last}</h1>
      <h6 class="">${data.results[0].email}</h6>
      <p class="">${data.results[0].location.city}, ${data.results[0].location.country}</p>
      </div>
      `),
      (navEnd.innerHTML = `
      <div class="end-body">
      <img src="${data.results[0].picture.medium}" class="navPicture ms-3" />
      <p class="ms-2">Hola! ${data.results[0].name.first}</p>
      </div>
      `),
      (friends.innerHTML = `
      <div class="friends-item p-1 ps-0">
        <div class="friends-body my-2">
          <img src="${data.results[1].picture.medium}" class="friendsPicture" />
          <div class="friends-text ms-3">
            <p class="friends-name">${data.results[1].name.first} ${data.results[1].name.last}</p>
            <p class="friends-location">${data.results[1].location.city}, ${data.results[1].location.country}</p>
          </div>
        </div>
        <button class="btn btn-outline-primary">Mensaje</button>
      </div>
      <div class="friends-item p-1 ps-0">
        <div class="friends-body my-2">
          <img src="${data.results[2].picture.medium}" class="friendsPicture" />
          <div class="friends-text ms-3">
            <p class="friends-name">${data.results[2].name.first} ${data.results[2].name.last}</p>
            <p class="friends-location">${data.results[2].location.city}, ${data.results[2].location.country}</p>
          </div>
        </div>
        <button class="btn btn-outline-primary">Mensaje</button>
      </div>
      <div class="friends-item p-1 ps-0">
        <div class="friends-body my-2">
          <img src="${data.results[3].picture.medium}" class="friendsPicture" />
          <div class="friends-text ms-3">
            <p class="friends-name">${data.results[3].name.first} ${data.results[3].name.last}</p>
            <p class="friends-location">${data.results[3].location.city}, ${data.results[3].location.country}</p>
          </div>
        </div>
        <button class="btn btn-outline-primary">Mensaje</button>
      </div>
      <div class="friends-item p-1 ps-0">
        <div class="friends-body my-2">
          <img src="${data.results[4].picture.medium}" class="friendsPicture" />
          <div class="friends-text ms-3">
            <p class="friends-name">${data.results[4].name.first} ${data.results[4].name.last}</p>
            <p class="friends-location">${data.results[4].location.city}, ${data.results[4].location.country}</p>
          </div>
        </div>
        <button class="btn btn-outline-primary">Mensaje</button>
      </div>
      <div class="friends-item p-1 ps-0">
        <div class="friends-body my-2">
          <img src="${data.results[5].picture.medium}" class="friendsPicture" />
          <div class="friends-text ms-3">
            <p class="friends-name">${data.results[5].name.first} ${data.results[5].name.last}</p>
            <p class="friends-location">${data.results[5].location.city}, ${data.results[5].location.country}</p>
          </div>
        </div>
        <button class="btn btn-outline-primary">Mensaje</button>
      </div>
      <div class="friends-item p-1 ps-0">
        <div class="friends-body my-2">
          <img src="${data.results[6].picture.medium}" class="friendsPicture" />
          <div class="friends-text ms-3">
            <p class="friends-name">${data.results[6].name.first} ${data.results[6].name.last}</p>
            <p class="friends-location">${data.results[6].location.city}, ${data.results[6].location.country}</p>
          </div>
        </div>
        <button class="btn btn-outline-primary">Mensaje</button>
      </div>
      <div class="friends-item p-1 ps-0">
        <div class="friends-body my-2">
          <img src="${data.results[7].picture.medium}" class="friendsPicture" />
          <div class="friends-text ms-3">
            <p class="friends-name">${data.results[7].name.first} ${data.results[7].name.last}</p>
            <p class="friends-location">${data.results[7].location.city}, ${data.results[7].location.country}</p>
          </div>
        </div>
        <button class="btn btn-outline-primary">Mensaje</button>
      </div>
      <div class="friends-item p-1 ps-0">
        <div class="friends-body my-2">
          <img src="${data.results[8].picture.medium}" class="friendsPicture" />
          <div class="friends-text ms-3">
            <p class="friends-name">${data.results[8].name.first} ${data.results[8].name.last}</p>
            <p class="friends-location">${data.results[8].location.city}, ${data.results[8].location.country}</p>
          </div>
        </div>
        <button class="btn btn-outline-primary">Mensaje</button>
      </div>
      `)
    )
  )
  .catch((error) => console.log(error));

let random = document.getElementById("random");
let navEnd = document.getElementById("nav-end");
let friends = document.getElementById("friends");
