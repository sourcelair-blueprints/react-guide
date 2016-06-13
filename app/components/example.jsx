var React = require('react');
var ReactDOM = require('react-dom');

var ExampleComponent = React.createClass({
	render: function() {
		return (
			<div>
				Hello from {this.props.whom}
			</div>
		);
	}
});

module.exports = ExampleComponent;