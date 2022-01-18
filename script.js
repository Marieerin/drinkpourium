const dbRef = firebase.database().ref();
const pageId = document.activeElement.id

// for each object in firebase
// check what page it is
// print each card item out with proper classes
let contentLoader = (page) => {
    dbRef.on('value', (data) => {
        const allData = data.val();
        pageData = allData[page];

        Object.keys(pageData).forEach(function(key){
            const name = pageData[key].name;
            const picture = pageData[key].picture;
            const description = pageData[key].description;
            const source = pageData[key].source;

            if (page === 'index') {
                return
            } else if (page === 'recipes') {
                const ingredients = pageData[key].ingredients;
                const ingredientArray = ingredients.map((ingredient) => `<li>${ingredient}</li>`);
                const ingredientsJoined = ingredientArray.join(` `);
                const instructions = pageData[key].instructions;
                const instructionArray = instructions.map((instruction) => `<li>${instruction}</li>`);
                const instructionsJoined = instructionArray.join(` `);

                $('.mainZone').append(`
                <div class="recipeCard">
                    <div class="recipeCard-ImageSection" aria-hidden="true">
                        <div class="recipeCard-ImageContainer" aria-hidden="true">
                            <img src="./styles/cocktailImages/svg/${picture}" class="mediumImage" alt="" aria-hidden="true">
                        </div>
                    </div>
                    <div class="recipeCard-TextContainer">
                        <h2>${name}</h2>
                        <p>${description}</p>
                        <h3>Ingredients</h3>
                        <ul>
                            ${ingredientsJoined}
                        </ul>
                        <h3>Steps</h3>
                        <ol>
                            ${instructionsJoined}
                        </ol>
                        <span><a href="${source}">Link to source</a></span>
                    </div>
                </div>
            `)
            } else if (page === 'tools') {
                $('.mainZone').append(`
                    <div class="toolCard">
                        <div class="toolCard-ImageSection" aria-hidden="true">
                            <div class="toolCard-ImageContainer" aria-hidden="true">
                                <img src="./styles/fruitImages/${picture}" class="mediumImage" alt="" aria-hidden="true">
                            </div>
                        </div>
                        <div class="toolCard-TextContainer">
                            <h2>${name}</h2>
                            <p>${description}</p>
                            <span><a href="${source}">Link to source</a></span>
                        </div>
                    </div>
                `)
            } else if (page === 'ingredients'){
                $('.mainZone').append(`
                    <div class="ingredientCard">
                        <div class="ingredientCard-ImageSection" aria-hidden="true">
                            <div class="ingredientCard-ImageContainer" aria-hidden="true">
                                <img src="./styles/fruitImages/${picture}" class="mediumImage" alt="" aria-hidden="true">
                            </div>
                        </div>
                        <div class="ingredientCard-TextContainer">
                            <h2>${name}</h2>
                            <p>${description}</p>
                            <span><a href="${source}">Link to source</a></span>
                        </div>
                    </div>
                `)
            }
        });
    });
};