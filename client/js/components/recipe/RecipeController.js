console.log('#### Recipe Controller');

var React = require('react');
var RecipeStore = require('stores/RecipeStore');
var recipeList = require('./RecipeList');

var RecipeList = recipeList.RecipeList();

function getRecipes() {
	return {
		recipes: RecipeStore.getRecipes()
	}
}

module.exports = {
	RecipeController: function() {
		var RecipeController = React.createClass({
			mixins: [RecipeStore.mixin],
			getInitialState: function() {
				return getRecipes();
			},
			storeDidChange: function() {
				this.setState(getRecipes());
			},
			render: function() {
				return (
					<RecipeList recipeList={this.state.recipes} />
				)
			}
		});
		return RecipeController;
	}
}