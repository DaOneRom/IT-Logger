import {
	GET_LOGS,
	SET_LOADING,
	LOGS_ERROR,
	ADD_LOG,
	DELETE_LOG,
	UPDATE_LOG,
	SEARCH_LOGS,
	SET_CURRENT,
	CLEAR_CURRENT,
	GET_TECHS,
	ADD_TECH,
	TECHS_ERROR,
	DELETE_TECH,
} from '../actions/types';

const initialState = {
	techs: null,
	loading: false,
	error: null,
};

export default (state = initialState, action) => {
	switch (action.type) {
		case GET_TECHS:
			return {
				...state,
				techs: action.payload,
				loading: false,
			};
		case ADD_TECH:
			return {
				...state,
				techs: [...state.techs, action.payload],
				loading: false,
			};
		case DELETE_TECH:
			return {
				...state,
				techs: state.techs.filter(
					(tech) => tech.id !== action.payload
				),
				loading: false,
			};
		case SET_LOADING:
			return {
				...state,
				loading: true,
			};
		case TECHS_ERROR:
			console.error(action.payload);
			return {
				...state,
				error: action.payload,
				loading: false,
			};
		default:
			return state;
	}
};
