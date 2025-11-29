export async function getRecipeFromMistral(ingredientsArr) {
  try {
    const response = await fetch("/api/recipe", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ ingredients: ingredientsArr }),
    });

    const data = await response.json();
    return data.recipe;
  } catch (err) {
    console.error("Chat error:", err);
    return "Oops! Something went wrong fetching the recipe.";
  }
}
