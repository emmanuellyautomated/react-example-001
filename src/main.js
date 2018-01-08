var React = require("react");
var ReactDOM = require("react-dom");

var Relationship = require('./components/Relationship');


document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    React.createElement(Relationship),
    document.getElementById('mount')
  );
});
