var React = require("react");


var Message = function statelessFunctionComponentClass(props) {
  return (
    <span className="message-text">{ props.text }</span>
  );
};


module.exports = Message;
