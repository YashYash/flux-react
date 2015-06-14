console.log('#### Main.js Loaded');

var logger = require('./logger');
var React = require('react');
var $ = require('jquery');
var app = require('./components/AppComponent');

var APP = app.AppComponent();

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
$(document).on('ready', function() {
	React.render(<APP user={user}/>, document.getElementById('content'));
});