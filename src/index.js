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
    "You are a romantic Poem expert and love to write short poems. Your mission is to generate a 4 line short poem based on the user's input. Just use tags like <p> and <br> to format the poem. Sign the poem with `SheCodes AI` at the end of the poem, inside a <strong> element. Do not use any other tags or HTML elements. Also use cute emojis to make the poem more engaging. Do not use any other text or explanation, just the poem itself. Also you can do it in any language, but make sure to use the language of the user's input. If the user input is in English, write the poem in English, if it is in French, write it in French, and so on in any language. So make sure that you recognize the language of the user's input and write the poem in that language. Recognize which language does that world belongs to and write the poem in that language. ";
  let apiUrl = `https://api.shecodes.io/ai/v1/generate?prompt=${prompt}&context=${context}&key=${apiKey}`;

  let poemElement = document.querySelector("#poem");
  poemElement.classList.remove("hidden");
  poemElement.innerHTML = `<div class="generating">⏳ Generating a romantic poem about ${instructionsInput.value}...`;

  console.log("Generating poem");
  console.log("#user-instructions", instructionsInput.value);

  axios.get(apiUrl).then(displayPoem);
}

let poemFormElement = document.querySelector("#poem-generator-form");
poemFormElement.addEventListener("submit", generatePoem);
