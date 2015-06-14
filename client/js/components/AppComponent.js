// A Component
// React Class
// Define Methods
// Return a tree
// Tree used to constrcut a DOM
// Written in JSX
// JSX ---> JS ---> Virtual DOM ---> DIFFING ENGINE ---> FINAL DOM
// Compare Virtual DOM to Real DOM
// The Diffs them
// Constantly re rendering

// I believe that the routing will be done in this file or main.js

// CSS - app-component.css

console.log('#### App Component');
var React = require('react');

var book = require('./recipe/RecipeBook');

var RecipeBook = book.RecipeBook();

module.exports = {
	AppComponent: function() {
		var AppComponent = React.createClass({
			getInitialState: function() {
				// You set the intial state of this component here
				console.log('#### Props in App Component');
				console.log(this.props);
				return null;
			},
			render: function() {
				return (
					<div className="app-component"> 
						<h1 className="heading">REACT RECIPE BOOK</h1>
						<p className="sub-heading">LEARNING REACT</p>
						<div className="sub-line"></div>
						<RecipeBook />
					</div>
				)
			}
		});
		return AppComponent;
	},
}