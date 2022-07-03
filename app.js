const api = "https://api.github.com/users/";

async function getUser(user) {
  const resp = await fetch(api + user);

  const respData = await resp.json();
  createUserCard(respData);
}

function createUserCard(user) {
  const card = document.createElement("div");
  card.classList.add("card");
}
