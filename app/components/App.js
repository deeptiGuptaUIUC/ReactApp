import React from 'react';
import ReactDOM from 'react-dom'; 

class App  extends React.Component {
    render () {
	return <h1>My name is bah!</h1>;
    }
}

ReactDOM.render(<App />, document.getElementById('app'));

module.exports = App;
