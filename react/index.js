'use strict';

const e = React.createElement;

class LikeButton extends React.Component {
  render() {
  	return "Hello World";
  }
}

const domContainer = document.querySelector('#root');
ReactDOM.render(e(LikeButton), domContainer);