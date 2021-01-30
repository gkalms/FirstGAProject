import "regenerator-runtime/runtime";

import loginUser from "./loginUser";
import player from "./player";
import homePage from "./homepage";
import Word from "./admin";

// $("body").prepend(loginUser());
// $("body").prepend(player());
$("body").prepend(homePage());
// $("body").prepend(Word());

// Establish session
const response = $.ajax({
    type: "GET",
    url: "/api/user/session/establish",
    contentType: "application/json",
});
  