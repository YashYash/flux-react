console.log('#### Recipe Book');

// This component is nested within the AppComponent
// Data can be passed down to it using the props

var React = require('react');

// Other components are nested within this component
// You can just require them:
var list = require('./RecipeList');
var form = require('./RecipeForm');
var recipeController = require('./RecipeController');

// Once you require the file, you can get the module by caling a funciton which return it
var RecipeList = list.RecipeList();
var RecipeForm = form.RecipeForm();
var RecipeController = recipeController.RecipeController();

module.exports = {
	RecipeBook: function() {
		var RecipeBook = React.createClass({
			getInitialState: function() {
				console.log("#### Props in RecipeBook");
				console.log(this.props);
				return null;
			},
			render: function() {
				return (
					<div className="recipe-book"> 
						<p>THIS IS THE RECIPE BOOK PARENT CONTAINER</p>
						<RecipeForm />
						<RecipeController recipeList={this.props.recipeList}/>
					</div>
				)
			}
		});
		return RecipeBook;
	}
}