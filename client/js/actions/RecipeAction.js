console.log('#### Recipe Action');

var McFly = require('libraries/McFly');
var Flux = new McFly();
var RecipeStore = require('stores/RecipeStore');

var RecipeActions = Flux.createActions({
	addRecipe: function(recipe) {
		return {
			actionType: "ADD_RECIPE",
			recipe: recipe
		}
	},
	deleteRecipe: function(id) {
		return {
			actionType: "DELETE_RECIPE",
			recipeId: id
		}
	}
})

module.exports = RecipeActions;

