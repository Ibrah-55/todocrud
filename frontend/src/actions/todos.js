import { reset } from 'redux-form';
import { GET_TODOS, ADD_TODO } from './types';

export const addTodo = (formValues) => async (dispatch) => {
	const res = await axios.post('/api/todos/', { ...formValues });
	dispatch({
		type: ADD_TODO,
		payload: res.data,
	});
	dispatch(reset('todoForm'));
};

import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO, EDIT_TODO } from './types'; // added EDIT_TODO

// EDIT TODO
export const editTodo = (id, formValues) => async (dispatch) => {
	const res = await axios.patch(`/api/todos/${id}/`, formValues);
	dispatch({
		type: EDIT_TODO,
		payload: res.data,
	});
	history.push('/');
};
