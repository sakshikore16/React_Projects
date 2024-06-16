import React from 'react';
import { Link } from 'react-router-dom';
import styles from './RecipeList.module.css';

const RecipeList = ({ recipes }) => {
  return (
    <div className={styles.recipeList}>
      {recipes.map((recipe) => (
        <Link to={`/recipe/${recipe.idMeal}`} key={recipe.idMeal} className={styles.recipeLink}>
          <div className={styles.recipeCard}>
            <h2>{recipe.strMeal}</h2>
            <img src={recipe.strMealThumb} alt={recipe.strMeal} className={styles.recipeImage} />
          </div>
        </Link>
      ))}
    </div>
  );
};

export default RecipeList;
