import { Router, Route, Switch } from 'react-router-dom'; // added

import history from '../history'; // added
import TodoDelete from './todos/TodoDelete'; // added
import TodoEdit from './todos/TodoEdit';

class App extends Component {
	render() {
		return (
			<Provider store={store}>
				<Router history={history}>
					<Header />
					<Switch>
						<Route exact path="/" component={Dashboard} />
						<Route exact path="/delete/:id" component={TodoDelete} />
						<Route exact path="/edit/:id" component={TodoEdit} /> // added
					</Switch>
				</Router>
			</Provider>
		);
	}
}
