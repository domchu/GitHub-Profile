const api = "https://api.github.com/users/";

async function getUser(user) {
  const resp = await fetch(api + user);

  const respData = await resp.json();
  createUserCard(respData);
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");

  card.innerHTML = `
     <div>
     <img src ="${user.avatar_url}" alt="${user.name}" />
     </div>
     <div>
     <h2>${user.name}</h2>
     <p>${user.bio}</p>
     </div>
    `;
}
