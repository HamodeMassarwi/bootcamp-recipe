const renderData = new Renderer();
const fetchRecipe = function () {
    let input = $('#input').val().toLowerCase();
    console.log(input)
    $.get(`/recipes/${input}`, function (recipe) {
        renderData.render(recipe)
    })
}



