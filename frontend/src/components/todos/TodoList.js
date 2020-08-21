import { Link } from 'react-router-dom'; // added
import { getTodos, deleteTodo } from '../../actions/todos'; // added deleteTodo

class TodoList extends Component {
	// ...

	render() {
		return (
			<div className="ui relaxed divided list" style={{ marginTop: '2rem' }}>
				{this.props.todos.map((todo) => (
					<div className="item" key={todo.id}>
						<div className="right floated content">
							{' '}
							// added
							<Link to={`/delete/${todo.id}`} className="small ui negative basic button">
								Delete
							</Link>
						</div>
						<i className="large calendar outline middle aligned icon" />
						<div className="content">
							<Link to={`/edit/${todo.id}`} className="header">
								{todo.task}
							</Link>
							<div className="description">{todo.created_at}</div>
						</div>
					</div>
				))}
			</div>
		);
	}
}

// ...

export default connect(
	mapStateToProps,
	{ getTodos, deleteTodo } // added deleteTodo
)(TodoList);
