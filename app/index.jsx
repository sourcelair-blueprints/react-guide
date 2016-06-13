var React = require('react');
var ReactDOM = require('react-dom');

var ExampleComponent = require('./components/example');
/*Require more of your components here */

ReactDOM.render(
	<ExampleComponent whom="React"/>, 
	document.getElementById('app')
);