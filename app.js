const api = "https://api.github.com/users/";

const main = document.getElementById("main");
const form = document.getElementById("form");
const search = document.getElementById("search");

getUser("domchu");

async function getUser(user) {
  const resp = await fetch(api + user);

  const respData = await resp.json();
  createUserCard(respData);
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  const cardHTML = `
<div class="card">
     <div class="img-container">
     <img class="avatar" src ="${user.avatar_url}" alt="${user.name}" />
     </div>
     <div class="user-info">
     <h2>${user.name}</h2>
     <p>${user.bio}</p>

     <ul class="info">
     <li>Followers: ${user.followers}</li>
     <li>Following: ${user.following}</li>
     <li>GitHub Respository: ${user.public_repos}</li>
     </ul>
     </div>
     </div>
    `;
  main.innerHTML = cardHTML;
}

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const user = search.value;
  if (user) {
    getUser(user);
    search.value = "";
  }
});
