console.log('#### Recipe List');
var React = require('react');
var RecipeComponent = require('./Recipe');
var Recipe = RecipeComponent.Recipe();
var RecipeActions = require('actions/RecipeAction');
module.exports = {
	RecipeList: function() {
		var RecipeList = React.createClass({
			getInitialState: function() {
				return null;
			},
			nukeRecipes: function() {
				RecipeActions.nukeRecipes();
			},
			render: function() {
				var recipeRepeat;
				var noRecipesCopy;
				recipeRepeat = this.props.recipeList.map(function(recipe, index) {
					return (
						<Recipe 
							key={index}
							recipe={recipe}/>
					)
				})
				return (
					<div>
						{recipeRepeat}
						<div onClick={this.nukeRecipes} className="delete-all-recipes" id={(this.props.recipeList.length > 0) ? 'show' : 'hide' }>DELETE ALL RECIPES</div>
						<h1 className="no-recipe-in-list" id={(this.props.recipeList.length > 0) ? 'hide' : 'show' }>NO RECIPES IN LIST :(</h1>
					</div>
				);
			}
		});
		return RecipeList;
	}
}