const dbRef = firebase.database().ref();
// for each object in firebase
// check what page it is
// print each card item out with proper classes
let contentLoader = (page) => {
    dbRef.on('value', (data) => {
        let itemCashe = []
        const allData = data.val();
        pageData = allData[page];
        // console.log(pageData);

        Object.keys(pageData).forEach(function(key){
            // console.log(key, pageData[key]);
            console.log(pageData[key].picture);
            $('main').append(`
                <div class="recipeCard">
                    <div class="recipeCard-ImageSection" aria-hidden="true">
                    <div class="recipeCard-ImageContainer" aria-hidden="true">
                        <img src="./styles/cocktailImages/svg/${pageData[key].picture}" class="mediumImage" alt="" aria-hidden="true">
                    </div>
                </div>
                </div>
            `)
        })
        console.log(itemCashe);
        if (page === 'index') {
            return
        } else if (page === 'recipes') {
            
            $('main').append('<h1>bla</h1>')
        } else if (page === 'tools' || page === 'ingredients') {

        } 
    })
};