document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');
    const recipesContainer = document.getElementById('recipesContainer');
  
    // Event listener for form submission
    recipeForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Gather form data
      const formData = new FormData(recipeForm);
      const recipeObject = {
        name: formData.get('recipeName'),
        ingredients: formData.get('ingredients'),
        preparation: formData.get('preparation'),
        image: formData.get('image') ? formData.get('image').name : null
      };
  
      // Add recipe to local storage
      let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      recipes.push(recipeObject);
      localStorage.setItem('recipes', JSON.stringify(recipes));
  
      // Reset form
      recipeForm.reset();
  
      // Refresh recipes display
      displayRecipes();
    });
  
    // Function to display recipes
    function displayRecipes() {
      recipesContainer.innerHTML = '';
  
      // Retrieve recipes from local storage
      let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  
      recipes.forEach((recipe, index) => {
        const recipeCard = document.createElement('div');
        recipeCard.classList.add('recipeCard');
  
        // Construct HTML for recipe card
        let recipeHTML = `
          <h3>${recipe.name}</h3>
          <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
          <p><strong>Preparation:</strong><br>${recipe.preparation}</p>
        `;
  
        if (recipe.image) {
          recipeHTML += `<img src="${recipe.image}" alt="${recipe.name}">`;
        }
  
        recipeCard.innerHTML = recipeHTML;
        recipesContainer.appendChild(recipeCard);
      });
    }
  
    // Initial display of recipes
    displayRecipes();
  });
  document.addEventListener('DOMContentLoaded', () => {
    const recipeForm = document.getElementById('recipeForm');
    const recipesContainer = document.getElementById('recipesContainer');
    const searchInput = document.getElementById('searchInput');
    const searchButton = document.getElementById('searchButton');
    const searchResultsContainer = document.getElementById('searchResultsContainer');
  
    // Event listener for form submission
    recipeForm.addEventListener('submit', function(event) {
      event.preventDefault();
  
      // Gather form data
      const formData = new FormData(recipeForm);
      const recipeObject = {
        name: formData.get('recipeName'),
        ingredients: formData.get('ingredients'),
        preparation: formData.get('preparation'),
        image: formData.get('image') ? formData.get('image').name : null
      };
  
      // Add recipe to local storage
      let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      recipes.push(recipeObject);
      localStorage.setItem('recipes', JSON.stringify(recipes));
  
      // Reset form
      recipeForm.reset();
  
      // Refresh recipes display
      displayRecipes();
    });
  
    // Function to display recipes
    function displayRecipes() {
      recipesContainer.innerHTML = '';
  
      // Retrieve recipes from local storage
      let recipes = JSON.parse(localStorage.getItem('recipes')) || [];
  
      recipes.forEach((recipe, index) => {
        const recipeCard = createRecipeCard(recipe);
        recipesContainer.appendChild(recipeCard);
      });
    }
  
    // Function to create a recipe card
    function createRecipeCard(recipe) {
      const recipeCard = document.createElement('div');
      recipeCard.classList.add('recipeCard');
  
      // Construct HTML for recipe card
      let recipeHTML = `
        <h3>${recipe.name}</h3>
        <p><strong>Ingredients:</strong><br>${recipe.ingredients}</p>
        <p><strong>Preparation:</strong><br>${recipe.preparation}</p>
      `;
  
      if (recipe.image) {
        recipeHTML += `<img src="${recipe.image}" alt="${recipe.name}">`;
      }
  
      recipeCard.innerHTML = recipeHTML;
      return recipeCard;
    }
  
    // Event listener for search button click
    searchButton.addEventListener('click', () => {
      const searchTerm = searchInput.value.trim().toLowerCase();
  
      if (searchTerm === '') {
        displayRecipes();
        searchResultsContainer.innerHTML = '';
        return;
      }
  
      const filteredRecipes = filterRecipes(searchTerm);
  
      displaySearchResults(filteredRecipes);
    });
  
    // Function to filter recipes based on search term
    function filterRecipes(searchTerm) {
      const recipes = JSON.parse(localStorage.getItem('recipes')) || [];
      const filteredRecipes = recipes.filter(recipe => {
        return (
          recipe.name.toLowerCase().includes(searchTerm) ||
          recipe.ingredients.toLowerCase().includes(searchTerm)
        );
      });
  
      return filteredRecipes;
    }
  
    // display search results
    function displaySearchResults(results) {
      searchResultsContainer.innerHTML = '';
  
      if (results.length === 0) {
        searchResultsContainer.innerHTML = '<p>No recipes found.</p>';
        return;
      }
  
      results.forEach(recipe => {
        const recipeCard = createRecipeCard(recipe);
        searchResultsContainer.appendChild(recipeCard);
      });
    }
  
    // Initial display of recipes
    displayRecipes();
  });
  