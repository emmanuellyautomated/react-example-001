var React = require("react");


var HeartIcon = function statelessFunctionComponentClass(props) {
  var iconImagePath = props.imagePath + (props.isLoved ? "loved.png" : "not-loved.png");
  return (
    <img src={ iconImagePath } alt="Love status"/>
  );
};


module.exports = HeartIcon;
