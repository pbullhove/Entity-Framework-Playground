import http from "./httpService";

const tokenKey = "token";

http.setJwt(getJwt());

async function loginUser(username, password) {
  const result = await http.get("https://jsonplaceholder.typicode.com/users");

  if (username === "user" && password === "pass") {
    const jwt = "jwt";
    localStorage.setItem(tokenKey, jwt);
    window.location = "/movies"; // forces reload which is preferable
    return jwt;
  }
  throw "Invalid username or password";
}

function getJwt() {
  localStorage.getItem(tokenKey);
}

async function logoutUser() {
  localStorage.removeItem(tokenKey);
}

function getCurrentUser() {
  try {
    const jwt = localStorage.getItem(tokenKey);
    // const user = jwtDecode(jwt);
    const user = jwt;
    return user;
  } catch (ex) {
    return null;
  }
}

export default {
  loginUser,
  logoutUser,
  getCurrentUser,
  getJwt,
};
