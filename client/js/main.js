console.log('#### Main.js Loaded');

var logger = require('./logger');
var React = require('react');
var $ = require('jquery');
var app = require('./components/AppComponent');
var landing = require('./components/LandingComponent');
var about = require('./components/AboutComponent');

var APP = app.AppComponent();
var Landing = landing.LandingComponent();
var About = about.AboutComponent();

var book = require('./components/recipe/RecipeBook');
var RecipeBook = book.RecipeBook();

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link
var RouteHandler = Router.RouteHandler;

/*** @jsx React.DOM */
console.log('#### Main.js');
// main.js is the file that bootstratps the application
// This is like your app.js in Angular
// You can pass in your initial set of data over here
// Like - user information and so forth

var user = {
	"name": {
		"first": "Yash",
		"last": "Saxena"
	},
	"_id": "fj235l2k2m12kn323n"
}


var routes = (
	<Route name="Landing" path="/" handler={Landing}>
		<DefaultRoute handler={APP}/>
		<Route path="/recipes" name="recipes" handler={APP}/>
		<Route path="/about" name="about" handler={About}/>
	</Route>
);

$(document).on('ready', function() {
	console.log('#### Document loaded');
	// React.render(<APP user={user}/>, document.getElementById('content'));
	Router.run(routes, function(Handler, state) {
		console.log('#### Redering shit');
		console.log(routes);
		console.log(Handler);
		console.log(state);
		var params = state.params;
		React.render(<Handler params={params}/>, document.body);
	})

});