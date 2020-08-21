import _ from 'lodash'; // added
import { GET_TODOS, GET_TODO, ADD_TODO, DELETE_TODO } from '../actions/types'; // added GET_TODO and DELETE_TODO

import {
	GET_TODOS,
	GET_TODO,
	ADD_TODO,
	DELETE_TODO,
	EDIT_TODO, // added
} from '../actions/types';

export default (state = {}, action) => {
	switch (action.type) {
		// ...
		case GET_TODO:
		case ADD_TODO:
		case EDIT_TODO: // added
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		// ...
	}
};

export default (state = {}, action) => {
	switch (action.type) {
		// ...
		case GET_TODO: // added
		case ADD_TODO:
			return {
				...state,
				[action.payload.id]: action.payload,
			};
		case DELETE_TODO: // added
			return _.omit(state, action.payload);
		// ...
	}
};
