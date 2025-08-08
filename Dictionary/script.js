

// selecting required tags
const searchButton = document.querySelector('.btn');
const searchInput = document.querySelector('input');
const wordDisplay = document.querySelector('.word');
const partsOfSpeech = document.querySelector('.part-of-speech');
const definition = document.querySelector('.definition');
const example = document.querySelector('.example');
// fetching data
const fetchMeaning = async (searchWord) => {
  try {
    const response = await fetch(`https://api.dictionaryapi.dev/api/v2/entries/en/${searchWord}`);
    const data = await response.json();

    const meaning = data[0].meanings[0];
    const definitionData = meaning.definitions[0];

    wordDisplay.textContent = data[0].word;
    partsOfSpeech.textContent = meaning.partOfSpeech;
    definition.textContent = definitionData.definition;
    example.textContent = definitionData.example || "No example available.";
  } catch (error) {
    console.log("Fetch error:", error);
    wordDisplay.textContent = "Word not found.";
    partsOfSpeech.textContent = "";
    definition.textContent = "";
    example.textContent = "";
  }
};
// event listener
searchButton.addEventListener("click", () => {
  const inputValue = searchInput.value.trim();
  if (inputValue) {
    fetchMeaning(inputValue);
  }
});


