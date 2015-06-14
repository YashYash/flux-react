console.log('#### Recipe List');
var React = require('react');
var RecipeComponent = require('./Recipe');
var Recipe = RecipeComponent.Recipe();

module.exports = {
	RecipeList: function() {
		var RecipeList = React.createClass({
			getInitialState: function() {
				return null;
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
						<h1 className="no-recipe-in-list" id={(this.props.recipeList.length > 0) ? 'hide' : 'show' }>NO RECIPES IN LIST :(</h1>
					</div>
				);
			}
		});
		return RecipeList;
	}
}