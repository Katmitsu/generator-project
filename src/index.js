function displayPoem(response) {
  console.log("Poem generated");

  new Typewriter("#poem", {
    strings: response.data.answer,
    autoStart: true,
    delay: 1,
    cursor: "",
  });
}

function generatePoem(event) {
  event.preventDefault();

  let instructionsInput = document.querySelector("#user-instructions");
  let apiKey = "224f23t3b08b6cab3df63781o3c48aaf";
  let prompt = `Write a poem about romance ${instructionsInput.value}`;
  let context =
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line short poem based on the user's input. Just use tags like <p> and <br> to format the poem. Sign the poem with `SheCodes AI` at the end of the poem, inside a <strong> element. Do not use any other tags or HTML elements. Also use cute emojis to make the poem more engaging. Do not use any other text or explanation, just the poem itself.";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  console.log("Generating poem");
  console.log("#user-instructions", instructionsInput.value);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
