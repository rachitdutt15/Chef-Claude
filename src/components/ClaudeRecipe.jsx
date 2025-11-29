import React from "react";
import ReactMarkdown from "react-markdown";
import "./Recipe.css";

export default function ClaudeRecipe({ recipe }) {
  return (
    <section className="recipe-card">
      <h2 className="recipe-title">Your Recipe</h2>
      <div className="recipe-content">
        <ReactMarkdown>{recipe}</ReactMarkdown>
      </div>
    </section>
  );
}
