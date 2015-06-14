console.log('##### Recipe Store');

var McFly = require('libraries/McFly');
var Flux = new McFly();

_recipes = [];

function addRecipe(recipe) {
	_recipes.push(recipe);
}

function deleteRecipe(id) {
	for(var i = 0; i < _recipes.length; i++) {
		if(_recipes[i]._id === Number(id)) {
			_recipes.splice(i, 1);
		}
	}
}
var RecipeStore = Flux.createStore({
	getRecipes: function() {
		return _recipes
	}
}, function(payload) {
	console.log('#### Recieved Payload');
	console.log(payload);
	if(payload.actionType === 'ADD_RECIPE') {
		addRecipe(payload.recipe);
		RecipeStore.emitChange();
	}
	if(payload.actionType === 'DELETE_RECIPE') {
		deleteRecipe(payload.recipeId._id);
		RecipeStore.emitChange();
	}
})

module.exports = RecipeStore;