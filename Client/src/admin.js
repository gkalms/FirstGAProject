// Import dependent forms
import { async } from "regenerator-runtime";
import homePage from "./homepage";
import player from "./player"

// Build homepage
const form = `
<form id="form-admin">
<div class="form-group">
    <label for="wordId">(Update or delete word by Word ID)</label>
    <input type="text" class="form-control" id="word-Id" placeholder="Enter word Id" name="wordId">
  </div>
  <div class="form-group">
    <label for="name">Name</label>
    <input type="text" class="form-control" id="name" placeholder="Enter new word" name="word">
  </div>
  <div class="form-group">
    <label for="alphaCategoryId">Category</label>
    <select name="categoryId" id="alphabet"></select>
  </div>
  <div>
  <button type="submit" id="create" class="btn btn-primary">Submit word</button>
  <button type="submit" id="update" class="btn btn-primary">Update word</button>
  <button type="submit" id="delete" class="btn btn-danger">Delete word</button>
  </div>
  <div>
  <button type="submit" id="logout" class="btn btn-danger">Logout</button>
  <button type="submit" id="play" class="btn btn-primary">Play</button>

  </div>
</form>
`;

const Word = () => {
  const categoryResponse = $.ajax({
    type: "GET",
    url: "api/alphabet/alphabet/all",
  }).done((alphaCategories) => {
    let optionsHtml = "";
    alphaCategories.forEach((wordEl) => {
      optionsHtml += `<option value=${wordEl._id}>${wordEl.name}</option>`;
    })
    $('#alphabet').append(optionsHtml);
  });
  // Create
  $(document).on("click", "#create", async (e) => {
    e.preventDefault();
    const requestBody = {
      name: $("#name").val(),
      categoryId: ($('#alphabet')).val()
    };
    const response = await $.ajax({
      type: "POST",
      url: "/api/alphabet/words",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    window.alert("Word created!")
  });
  // Update words
  $(document).on("click", "#update", async (e) => {
    e.preventDefault();
    const requestBody = {
      name: $("#name").val(),
      categoryId: ($('#alphabet')).val(),
    };
    const response = await $.ajax({
      type: "PATCH",
      url: `/api/alphabet/update-word/${$("#word-Id").val()}`,
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    window.alert("Word updated!")
  });
  // Delete
  $(document).on("click", "#delete", async (e) => {
    e.preventDefault();
    const response = await $.ajax({
      type: "DELETE",
      url: `/api/alphabet/delete-word/${$("#word-Id").val()}`,
      contentType: "application/json",
    });
    window.alert("Word deleted!")
  });
  // Logout
    $(document).on("click", "#logout", async (event) => {
        event.preventDefault();
        const response = await $.ajax({
            type: "GET",
            url: "/api/user/logout",
            contentType: "application/json",
        });
        $("body").empty();
        $("body").prepend((homePage));
      });
  // Go direct to play
  $(document).on("click", "#play", async (event) => {
    event.preventDefault();
    $("body").empty();
    $("body").prepend(player());
});
  return form;
};

export default Word;

