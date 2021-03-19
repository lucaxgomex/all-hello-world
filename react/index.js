'use strict';

const e = React.createElement;

function Message() {
	return e(
		"Hello World"
	);
}

ReactDOM.render(e(Message), document.querySelector("#root"));