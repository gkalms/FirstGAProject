const words = {
  A: ["apple", "ant", "ape", "antelope", "animals"],
  B: ["boy", "bee", "biscuit", "bat", "bath", "ball"],
  C: ["cat", "chicken", "cheese", "cow", "crayon", "car"],
  D: ["dog", "dinosaur", "doll", "daddy", "dragon", "drink"],
  E: ["emu", "eye", "eskimo", "elephant", "egg"],
  F: ["father", "fly", "fun", "fish”,fox”,”fur"],
  G: ["grandma", "granddad", "goat", "gorrila", "girl", "goose"],
  H: ["happy", "hen", "hat", "hug", "ham", "hot"],
  I: ["ice", "icecream", "Iceland", "idea", "inside"],
  J: ["jump", "juice”,”jack”, ”join”, ”jeans”, ”judge"],
  K: ["kite", "kick", "king", "knee", "kind", "kettle"],
  L: ["Lemon", "lizard", "lion", "lily", "leaf", "look"],
  M: ["moose", "mouse", "milk", "middle", "maple", "mine"],
  N: ["news", "nine", "near", "neck", "nose", "nice"],
  O: ["owl", "open", "oh oh", "ouch", "orange", "over"],
  P: ["please", "plant", "peace", "pour", "play", "park"],
  Q: ["Queen", "Quail", "quasimodo", "quarter"],
  R: ["rose", "rice", "rain", "rabbit", "read", "roof"],
  S: ["snake", "snail", "snow", "shoe", "sugar", "sweet"],
  T: ["tiger", "teddy bear", "tea", "tom", "tail", "tall"],
  U: ["umbrella", "uncle", "under", "use", "uruguay", "ugly"],
  V: ["very", "volvo", "volkswagen", "velvet", "virginia"],
  W: ["whale", "why", "where", "what", "walk", "wash"],
  X: ["xavier", "xylophone", "xanadu"],
  Y: ["yellow", "y.o.l.o", "yes", "yeah", "year", "your"],
  Z: ["zero", "zoo", "zebra", "zebu cow", "zimbambwe", "zack"]
};

// Alphabet form
const form = `
<form id="alpha-play">
<h1>Alphabet</h1>
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
        <button class="btn btn-danger" value="V">V</button>
        <button class="btn btn-danger" value="W">W</button>
        <button class="btn btn-danger" value="X">X</button>
        <button class="btn btn-danger" value="Y">Y</button>
        <button class="btn btn-danger" value="Z">Z</button>
        <button class="btn-secondary" id="clear">Clear</button>
        <button class="btn-secondary" id="quit">Quit</button>
        </div>
      </div>
        <p></p>
      </div>
</form>
`;

export const renderForm = () => {
  return form;
}

const getWordsByLetter = (letter) => {
  // make API call using letter that is passed into this function
  console.log(letter);
  // $(document).on("submit", "#login-user", async (event) => {
  //     event.preventDefault();
  //     const formData = {
  //         name: $("input[name='username']").val(),
  //         password: $("input[name='password']").val(),
  //     };
  //     try {
  //         const response = await $.ajax({
  //             type: "POST",
  //             url: "/api/user/login",
  //             contentType: "application/json",
  //             data: JSON.stringify(formData),
  //         });
  //         $("body").empty();
  //         $("body").append(Word());
  //     } catch (err) {
  //         window.alert("Unable to log you in!");
  //         $("body").empty();
  //         $("body").append(homePage());
  //     }
  // });
  // return form;
};

const player = () => {
  const handleButtonClick = $(".btn").on("click", (e) => {
    e.preventDefault();
    // $("p").html("");
    let input = e.target.innerHTML;
    getWordsByLetter(input)

    // const randomWords = words[input];
    // const randomIndex = Math.floor(Math.random() * Math.floor(randomWords.length));
    // const randomWord = randomWords[randomIndex];
    // $("p").append(`${randomWord} `);
  });
  return handleButtonClick;
  //Get words from alphabet object
  //   Clear the text
  // $("#clear").on("click", () => {
  //   $("p").html("");
  // });
  //  // Exit
  //  $(document).on("click", () => {
  //   // $("body").empty();
  //   $("body").prepend((homePage));
// });
  // return form;
};

export default player;





