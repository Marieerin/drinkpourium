const dbRef = firebase.database().ref();
const pageId = document.activeElement.id

// for each object in firebase
// check what page it is
// print each card item out with proper classes
let contentLoader = (page) => {
    dbRef.on('value', (data) => {
        const allData = data.val();
        pageData = allData[page];
        console.log(pageData);
        console.log(allData);
        Object.keys(pageData).forEach(function(key){
            // console.log(key, pageData[key]);
            const name = pageData[key].name;
            const picture = pageData[key].picture;
            const description = pageData[key].description;
            const source = pageData[key].source;
            const ingredients = pageData[key].ingredients
            const steps = pageData[key].steps

            if (page === 'index') {
                return
            } else if (page === 'recipes') {
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
                            <li>Ice cubes</li>
                            <li>2 1/2 ounces gin</li>
                            <li>1/2 ounce dry vermouth</li>
                            <li>Optional: ​1 dash orange or aromatic bitters</li>
                            <li>Garnish: lemon twist or 1 or 3 olives</li>
                        </ul>
                        <h3>Steps</h3>
                        <ol>
                            <li>In a mixing glass filled with ice cubes, combine the gin and vermouth, pouring more or less vermouth to your taste.
                            
                            Stir for 30 seconds.</li>
                            <li>Strain into a chilled cocktail glass.</li>
                            <li>Add a dash of bitters, if desired.
                            Garnish with olives or a lemon twist.</li>
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