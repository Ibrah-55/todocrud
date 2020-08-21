import TodoCreate from './TodoCreate';

class Dashboard extends Component {
	render() {
		return (
			<div className="ui container">
				<TodoCreate /> // added
				<TodoList />
			</div>
		);
	}
}

export default Dashboard;
