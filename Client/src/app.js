import "regenerator-runtime/runtime";
// import { async } from "regenerator-runtime";

import homePage from "./homepage";
$("body").prepend(homePage());

  // Establish session
$(document).ready(function () {
    const response = $.ajax({
        type: "GET",
        url: "/api/user/session/establish",
        contentType: "application/json",
    });
    window.alert("Session started!");
});