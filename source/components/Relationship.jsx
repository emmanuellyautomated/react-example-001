var React = require("react");
var createReactClass = require('create-react-class');

var Message = require('./Message');
var Button = require('./Button');
var HeartIcon = require('./HeartIcon');


var Relationship = createReactClass(
  {
    getInitialState: function() {
      return { isLoved: true };
    },
    toggleLove: function() {
      this.setState({ isLoved: !this.state.isLoved });
    },
    render: function() {
      var messageText = this.state.isLoved ? "Love me!" : "...or love me not."; 
      var buttonText = this.state.isLoved ? "Unlove" : "Love";
      return (
        <table>
          <tbody>
            <tr>
              <td><HeartIcon imagePath={ this.props.imagePath } isLoved={ this.state.isLoved }/></td>
              <td style={ {width:"150px"} }><Message text={ messageText }/></td>
              <td><Button text={ buttonText } onClick={ this.toggleLove }/></td>
            </tr>
          </tbody>
        </table>
      );
    }
  }
);


module.exports = Relationship;
