//TODO remove those imports after testing
// import * as api from "./data/events.js";
// import * as userApi from "./data/users.js";
import { page } from "./lib.js";
import { showHome } from "./views/home.js";
import { showMarket } from "./views/market.js";
import { showLogin } from "./views/login.js";
import { showRegister } from "./views/register.js";
import { logout } from "./data/users.js";
import { updateNav } from "./util.js";
import { showDetails } from "./views/details.js";
import { showEdit } from "./views/edit.js";
import { showCreate } from "./views/sellView.js";

updateNav();

page("/", showHome);
page("/market", showMarket);
page("/details/:id", showDetails);
page("/login", showLogin);
page("/register", showRegister);
page("/sell", showCreate);
page("/edit/:id", showEdit);
page.start();

document.getElementById("logoutBtn").addEventListener("click", async () => {
  await logout();
  updateNav();
  page.redirect("/");
});
//TODO remove those imports after testing
// window.api = api;
// window.userApi = userApi;
