const api = "https://api.github.com/users/";

async function getUser(user) {
  const resp = await fetch(api + user);
}
