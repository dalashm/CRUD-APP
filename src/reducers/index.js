import { combineReducers } from 'redux';
import _ from 'lodash';
import { reducer as fromReducer } from 'redux-form';

const fetchPost = (state = {}, action) => {
	switch (action.type) {
	
		case 'Fetch_POST':
			return _.mapKeys(action.payload, 'id');
			
			case 'Fetch_Single_POST':
				return { ...state, [action.payload.id]: action.payload };
				case 'Delete_Post':
					return _.omit(state,action.payload)
		default:
			return state;
	}
};

export default combineReducers({
	fetchedPosts: fetchPost,
	form: fromReducer
});
