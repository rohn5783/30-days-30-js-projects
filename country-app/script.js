const searchBtn = document.getElementById("searchBtn");
const countryInput = document.getElementById("countryInput");
const resultCard = document.getElementById("result");

const flag = document.getElementById("flag");
const name = document.getElementById("name");
const capital = document.getElementById("capital");
const region = document.getElementById("region");
const population = document.getElementById("population");
const languages = document.getElementById("languages");

const fetchCountryData = async (countryName) => {
  try {
    const res = await fetch(`https://restcountries.com/v3.1/name/${countryName}?fullText=true`);

    if (!res.ok) {
      throw new Error("Country not found");
    }

    const data = await res.json();
    const country = data[0];

    // Fill in UI
    flag.src = country.flags.svg;
    name.textContent = country.name.common;
    capital.textContent = country.capital ? country.capital[0] : "N/A";
    region.textContent = country.region;
    population.textContent = country.population.toLocaleString();

    const langs = Object.values(country.languages || {}).join(", ");
    languages.textContent = langs || "N/A";

    resultCard.classList.remove("hidden");

  } catch (error) {
    alert("Error: " + error.message);
    resultCard.classList.add("hidden");
  }
};

searchBtn.addEventListener("click", () => {
  const input = countryInput.value.trim();
  if (input) {
    fetchCountryData(input);
  }
});
