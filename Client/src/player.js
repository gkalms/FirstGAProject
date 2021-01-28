// Alphabet form
const form = `
<form id="alpha-play">
      <div id="alphabox">
        <div class="row">
        <button class="btn btn-info" value="A">A</button>
        <button class="btn btn-info" value="B">B</button>
        <button class="btn btn-info" value="C">C</button>
        <button class="btn btn-info" value="D">D</button>
        <button class="btn btn-info" value="E">E</button>
        <button class="btn btn-info" value="F">F</button>
        <button class="btn btn-info" value="G">G</button>
        </div>
        <div class="row">
        <button class="btn btn-success" value="H">H</button>
        <button class="btn btn-success" value="I">I</button>
        <button class="btn btn-success" value="J">J</button>
        <button class="btn btn-success" value="K">K</button>
        <button class="btn btn-success" value="L">L</button>
        <button class="btn btn-success" value="M">M</button>
        <button class="btn btn-success" value="N">N</button>
        </div>
        <div class="row">
        <button class="btn btn-warning" value="O">O</button>
        <button class="btn btn-warning" value="P">P</button>
        <button class="btn btn-warning" value="Q">Q</button>
        <button class="btn btn-warning" value="R">R</button>
        <button class="btn btn-warning" value="S">S</button>
        <button class="btn btn-warning" value="T">T</button>
        <button class="btn btn-warning" value="U">U</button>
        </div>
        <div class="row">
        <button class="btn-secondary" id="freestyle">:-)</button>
        <button class="btn btn-danger" value="V">V</button>
        <button class="btn btn-danger" value="W">W</button>
        <button class="btn btn-danger" value="X">X</button>
        <button class="btn btn-danger" value="Y">Y</button>
        <button class="btn btn-danger" value="Z">Z</button>
        <button class="btn-secondary" id="clear">Reset</button>
        </div>
      </div>
      <div id="inputbox">
        <p></p>
      </div>
</form>
`;

console.log("form loaded");

const player = () => {
    $(document).on("submit", "#alpha-play", async (event) => {
        event.preventDefault();
        const response = await $.ajax({
            type: "GET",
            url: "/api/alphabet/words/random",
            contentType: "application/json",
            data: JSON.stringify(response),
        });
        console.log("response", response);
        //   Clear text when Reset button clicked
        $("document").on("click", "#clear", async (event) => {
            event.preventDefault();
            $("p").empty();
        });
    });
    return form;
};

export default player;





