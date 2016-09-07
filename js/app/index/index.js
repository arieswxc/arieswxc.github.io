import '../../../view/index/index.css'
import ReactDom from 'react-dom'
import {Router, Route, hashHistory, indexRoute} from 'react-router'
const App = React.createClass({
	render() {
		return (
			<div>app</div>
		)
	}
})

ReactDom.render((
		<Router history={hashHistory}>
			<Route path="/" component={App}></Route>
		</Router>
	), document.getElementById('root'));


