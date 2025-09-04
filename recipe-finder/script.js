// STEP 1: Get references to important elements
const searchInput = document.getElementById("searchInput");
const searchBtn = document.getElementById("searchBtn");
const resultsDiv = document.getElementById("results");

// STEP 2: Add click event to search button
searchBtn.addEventListener("click", getRecipes);

// STEP 3: Define the main function
function getRecipes() {
  // Get the ingredient from the input box
  const ingredient = searchInput.value.trim();

  // If input is empty, show an alert and stop
  if (!ingredient) {
    alert("Please enter an ingredient!");
    return;
  }

  // Build the API URL
  const url = `https://www.themealdb.com/api/json/v1/1/filter.php?i=${ingredient}`;

  // Show a loading message
  resultsDiv.innerHTML = "<p>Loading recipes...</p>";

  // STEP 4: Fetch data from the API
  fetch(url)
    .then(response => response.json())
    .then(data => {
      // Clear old results
      resultsDiv.innerHTML = "";

      // Check if any recipes are found
      if (data.meals) {
        data.meals.forEach(meal => {
          // Create a recipe card
          const recipeCard = document.createElement("div");
          recipeCard.classList.add("recipe");

          // Fill recipe card with meal info
          recipeCard.innerHTML = `
            <img src="${meal.strMealThumb}" alt="${meal.strMeal}">
            <div class="recipe-info">
              <h3>${meal.strMeal}</h3>
              <a href="https://www.themealdb.com/meal.php?c=${meal.idMeal}" target="_blank">View Recipe</a>
            </div>
          `;

          // Add card to the results section
          resultsDiv.appendChild(recipeCard);
        });
      } else {
        // If no meals are found
        resultsDiv.innerHTML = "<p>No recipes found. Try another ingredient!</p>";
      }
    })
    .catch(error => {
      console.error("Error fetching recipes:", error);
      resultsDiv.innerHTML = "<p>Something went wrong. Please try again later.</p>";
    });
}
