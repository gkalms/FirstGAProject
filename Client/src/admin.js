
import { async } from "regenerator-runtime";

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
  <button type="submit" id="create" class="btn btn-primary">Submit word</button>
  <button type="submit" id="update" class="btn btn-primary">Update word</button>
  <button type="submit" id="delete" class="btn btn-primary">Delete word</button>
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
  $(document).on("click", "#update", async (e) => {
    e.preventDefault();
    const requestBody = {
      name: $("#name").val(),
      categoryId: ($('#alphabet')).val()
    };
    const response = await $.ajax({
      type: "PATCH",
      url: "/api/alphabet/update-word/:id",
      contentType: "application/json",
      data: JSON.stringify(requestBody),
    });
    window.alert("Word updated!")
  });
  $(document).on("click", "#delete", async (e) => {
    e.preventDefault();
    const response = await $.ajax({
      type: "DELETE",
      url: "/api/alphabet/delete-word/:id",
      contentType: "application/json",
    });
    window.alert("Word deleted!")
  });
  return form;
};

export default Word;

