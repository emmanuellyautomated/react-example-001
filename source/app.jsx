var React = require("react");
var ReactDOM = require("react-dom");

var Relationship = require('./components/Relationship');


var imagePath = "../source/images/";
document.addEventListener('DOMContentLoaded', function() {
  ReactDOM.render(
    <Relationship imagePath={ imagePath }/>,
    document.getElementById('mount')
  );
});
