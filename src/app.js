// APP.JS FILE

import page from "../node_modules/page/page.mjs"; // dont touch
import { render } from "../node_modules/lit-html/lit-html.js"; // dont touch
import { userUtil } from "./util/userUtil.js";
import { userService } from "./service/userService.js";

import { showHome } from "./view/showHome.js";
import { showCatalog } from "./view/showCatalog.js";
import { showLogin } from "./view/showLogin.js";
import { showReg } from "./view/showReg.js";
import { showDetails } from "./view/showDetails.js";
import { showEdit } from "./view/showEdit.js";
import { showCreate } from "./view/showCreate.js";
import { showSearch } from "./view/showSearch.js";




page(updateCtx); // dont touch
page('/',showHome);
page('/register',showReg);
page('/login',showLogin);
page('/logout',logOut);
page('/create',showCreate)
page('/catalog',showCatalog);
page('/search',showSearch)
page('/details/:id',showDetails);
page('/edit/:id',showEdit);
page.start();// dont touch
updateNav(); // dont touch

// don't touch this functions updateCtx, goTO, updateNav
function updateCtx(ctx, next) {
    ctx.updateNav = updateNav;
    ctx.goTo = goTo;
    ctx.render = render;
    next();
}

function goTo(path) {
    page.redirect(path);
}

// update nav if user logged in
function updateNav() {
    const user = userUtil.getUserData();
    const guestNav = document.querySelector('.guest');
    const userNav = document.querySelector('.user');
    if (user) {
        guestNav.style.display = 'none';
        userNav.style.display = 'inline-block';
       }else{
         guestNav.style.display = 'inline-block';
         userNav.style.display = 'none';
       }
}

// don't touch logout
async function logOut() {
    await userService.logout();
    updateNav();
    goTo("/");
}
// 