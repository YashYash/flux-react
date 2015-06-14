var React = require('react');
var RecipeActions = require('actions/RecipeAction');

module.exports = {
	Recipe: function() {
		var Recipe = React.createClass({
			getInitialState: function() {
				console.log(this.props);
				return null;
			},
			deleteRecipe: function(e) {
				console.log(e.target.id);
				RecipeActions.deleteRecipe({_id: e.target.id});
			},
			render: function() {
				return (
					<div className="individual-recipe">
						<h1>{this.props.recipe.name}</h1>
						<p>{this.props.recipe.description}</p>
						<div className="edit-delete">
							<span className="icon-edit"></span>
							<span className="icon-trash" id={this.props.recipe._id} onClick={this.deleteRecipe}></span>
						</div>
					</div>
				)
			}
		});
		return Recipe;
	}
}