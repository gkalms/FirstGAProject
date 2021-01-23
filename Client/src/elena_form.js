



console.log("hello");

//Object to store words for alphabet

const image1 = "https://images.unsplash.com/photo-1502899845910-573a1d1c390d?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MXx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
const image2 = "https://images.unsplash.com/photo-1536427824649-fbf2e4a33d40?ixid=MXwxMjA3fDB8MHxzZWFyY2h8MTd8fHNtYWxsJTIwaW1hZ2VzfGVufDB8fDB8&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
const image3 = "https://images.unsplash.com/photo-1502234036632-89501d54f8fe?ixid=MXwxMjA3fDB8MHxzZWFyY2h8N3x8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
const image4 = "https://images.unsplash.com/photo-1502321660926-350b34618f79?ixid=MXwxMjA3fDB8MHxzZWFyY2h8OXx8c21hbGwlMjBpbWFnZXN8ZW58MHx8MHw%3D&ixlib=rb-1.2.1&auto=format&fit=crop&w=800&q=60";
console.log(image2)
const savedImages = [image1,image2,image3,image4];

const words = {
    A: ["apple","ant","ape","antelope","animals"],
    B: ["boy","bee","biscuit","bat","bath","ball"],
    C: ["cat", "chicken", "cheese", "cow", "crayon","car"],
    D: ["dog", "dinosaur", "doll","daddy","dragon","drink"],
    E: ["emu","eye","eskimo","elephant","egg"],
    F: ["father","fly","fun","fish”,fox”,”fur"],
    G: ["grandma","granddad","goat","gorrila","girl","goose"],
    H: ["happy","hen","hat","hug","ham","hot"],
    I: ["ice","icecream","Iceland","idea","inside"],
    J: ["jump","juice”,”jack”, ”join”, ”jeans”, ”judge"],
    K: ["kite","kick","king","knee","kind","kettle"],
    L: ["Lemon","lizard","lion","lily","leaf","look"],
    M: ["moose","mouse","milk","middle","maple","mine"],
    N: ["news","nine","near","neck","nose","nice"],
    O: ["owl","open","oh oh","ouch","orange","over"],
    P: ["please","plant","peace","pour","play","park"],
    Q: ["Queen", "Quail","quasimodo","quarter"],
    R: ["rose","rice","rain","rabbit","read", "roof"],
    S: ["snake","snail","snow","shoe","sugar","sweet"],
    T: ["tiger","teddy bear", "tea","tom","tail","tall"],
    U: ["umbrella","uncle","under","use","uruguay","ugly"],
    V: ["very","volvo","volkswagen","velvet","virginia"],
    W: ["whale","why","where","what","walk","wash"],
    X: ["xavier","xylophone","xanadu"],
    Y: ["yellow","y.o.l.o","yes","yeah","year","your"],
    Z: ["zero","zoo","zebra","zebu cow","zimbambwe", "zack"]
}


//Day of the week
const d = new Date();
$("h2").html("Today is the " + d.toLocaleDateString());  

//Get words from alphabet object
$(".btn").on("click", (e) => {
    console.log("button clicked")
        //Clear pre-existing text
        $("p").html("");
        console.log("all clear!");
    let input = e.target.innerHTML;
    console.log(input);
    const randomWords = words[input]; 
    console.log("random words", randomWords);
    const randomIndex = Math.floor(Math.random() * Math.floor(randomWords.length));
    console.log(randomIndex);
    const randomWord = randomWords[randomIndex];
    console.log(randomWord)
    $("p").append(`${randomWord} `);

    // console.log(randomWords[randomIndex]);
});

// Can i use frestyle button to add happy picture to paragraph
$("#freestyle").on("click", () => {
    $("p").html("");
    const imageChoice = Math.floor(Math.random() * Math.floor(savedImages.length));
    $("p").append(imageChoice);
});

// $("#freestyle").on("click", () => {
//         $("p").html("");
//         $("p").append(image2);
//     });

//   Clear the text
$("#clear").on("click", () => {
    console.log("clear this field!");
    $("p").html("");
});


