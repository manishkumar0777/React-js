import React, {useState, useRef} from "react";


//components
import IngredientList from "./ingredientList";
import Chef from "./chef";

//functon import from the aicehf.js
import getRecipefromMistral from '../aichef';


export default function Main () {

    const [ingredientList, setIngredientList] = useState([]);
    const [recipeShown, setRecipeShown] = useState('');
    const recipeAvailable = useRef(null)
    console.log(recipeAvailable);

    //loading the recipe section using side effects 

    React.useEffect(() => {
        if(recipeShown.length !== 0 && recipeAvailable.current !== null) {
            recipeAvailable.current.scrollIntoView({behavior : "smooth"})
        }
    },[recipeShown])


    //add ingredient action
    function AddIngredient(formData) {
        const newIngredient = formData.get("ingredient");
        if(newIngredient) {

        setIngredientList(prevItem => ([
            ...prevItem,
            newIngredient,
        ]));
     }    
    }

    //getting recipe 
    async function getRecipe() {
        const airecipe = await getRecipefromMistral(ingredientList);
        console.log(airecipe);
        setRecipeShown(airecipe)
    }


    return (
        <main>
            <form action={AddIngredient}  className="add-ingredient-form">
                <input 
                    type="text"
                    aria-label="Add ingredient"
                    placeholder="e.g. oregano"
                    name="ingredient"
                />
                <button>+ Add ingredients</button>
            </form>

            {ingredientList.length > 0 ? <IngredientList ingredientList={ingredientList} recipeButton={getRecipe} ref={recipeAvailable}/>: null}
            

            { recipeShown && <Chef genRecipe={recipeShown}/>}
            
        </main>
    )
}

