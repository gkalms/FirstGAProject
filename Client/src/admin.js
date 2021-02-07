// Import dependent forms
import homePage from "./homepage";

// Form to create, update or delete words
const form = `
<form id="form-admin">
<h1>Shape words</h1>
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
    <select name="categoryId" id="alphabet-list"></select>
  </div>
  <div>
  <button type="submit" id="create" class="btn btn-primary">Submit word</button>
  </div>
  <div>
  <button type="submit" id="update" class="btn btn-primary">Update word</button>
  </div>
  <div>
  <button type="submit" id="delete" class="btn btn-danger">Delete word</button>
  </div>
  <div>
<button type="button" id="exit" class="btn btn-primary">Exit</button>
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
    $('#alphabet-list').append(optionsHtml);
  });

  // Create words
  $(document).on("click", "#create", async (e) => {
    e.preventDefault();
    const requestBody = {
      name: $("#name").val(),
      alphabetId: $('#alphabet-list').val(),
    };
    console.log(requestBody);
    const response = await $.ajax({
      type: "POST",
      url: "/api/alphabet/words",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    window.alert("Word created!");
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
    window.alert("Word updated!");
  });

  // Delete words
  $(document).on("click", "#delete", async (e) => {
    e.preventDefault();
    const response = await $.ajax({
      type: "DELETE",
      url: `/api/alphabet/delete-word/${$("#word-Id").val()}`,
      contentType: "application/json",
    });
    window.alert("Word deleted!");
  });

  // Exit
  $(document).on("click", "#exit", async (event) => {
    event.preventDefault();
    $("body").empty();
    $("body").prepend((homePage));
  });
  return form;
};

export default Word;

