var React = require('react');
var app = require('./AppComponent');

var Router = require('react-router');
var Route = Router.Route;
var DefaultRoute = Router.DefaultRoute;
var Link = Router.Link
var RouteHandler = Router.RouteHandler;

module.exports = {
	LandingComponent: function() {
		var LandingComponent = React.createClass({
			render: function() {
				return (
					<div>
						<h1 className="white-text">Put Nav up here</h1>
						<div>
							<Link to="recipes"> Main App </Link>
							<Link to="about"> About </Link>
						</div>
						<RouteHandler {...this.props}/>
					</div>
				)
			}
		})
		return LandingComponent;
	}
}