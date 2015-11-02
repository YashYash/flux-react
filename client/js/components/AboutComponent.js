var React = require('react');

module.exports = {
	AboutComponent: function() {
		var AboutComponent = React.createClass({
			render: function() {
				return (
					<div>
						<h1 className="white-text">About Component</h1>
					</div>
				)
			}
		})
		return AboutComponent;
	}
}