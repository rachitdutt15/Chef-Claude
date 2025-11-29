// api/recipe.js  (at project root, NOT inside src/)

export default async function handler(req, res) {
  try {
    // Read the body (Vercel Node runtime)
    const chunks = [];
    for await (const chunk of req) {
      chunks.push(chunk);
    }

    const body = JSON.parse(Buffer.concat(chunks).toString() || "{}");
    const { ingredients } = body;

    if (!Array.isArray(ingredients) || ingredients.length === 0) {
      return res.status(400).json({ error: "Ingredients are required" });
    }

    const list = ingredients.join(", ");

    // 🧠 “Fake AI” – simple generated recipe using ingredients
    const recipe = `
## Simple Recipe using ${ingredients[0]}

### Ingredients
${ingredients.map(i => `- ${i}`).join("\n")}

### Instructions
1. Gather all the ingredients: ${list}.
2. Heat a pan with a little oil or butter.
3. Add ${ingredients[0]} and cook it well.
4. Add the remaining ingredients and cook until everything is well combined and seasoned.
5. Taste and adjust salt, spices, and herbs.
6. Serve hot and enjoy your homemade dish! 😋
`.trim();

    return res.status(200).json({ recipe });
  } catch (err) {
    console.error("Server error:", err);
    return res.status(500).json({ error: err.message || "Server error" });
  }
}
