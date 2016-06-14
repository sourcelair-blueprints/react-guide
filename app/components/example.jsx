var React = require('react');

var ExampleComponent = function ExampleComponent(props) {
	return (
		<div>
			Hello from {props.whom}
		</div>
	);
};

module.exports = ExampleComponent;