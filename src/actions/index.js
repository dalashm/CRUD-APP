import axios from 'axios';
export const fetchPost = () => async (dispatch) => {
	const URL = '	http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=mo1234';
	const { data } = await axios.get(`${URL}/posts${API_KEY}`);

	dispatch({ type: 'Fetch_POST', payload: data });
};

export const addPost = (values, callback) => async (dispatch) => {
	const URL = '	http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=mo1234';
	const data = await axios.post(`${URL}/posts${API_KEY}`, values).then(() => callback());
	dispatch({ type: 'ADD_POST', payload: data });
};

export const fetchSinglePost = (id) => async (dispatch) => {
	const URL = '	http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=mo1234';
	const { data } = await axios.get(`${URL}/posts/${id}${API_KEY}`);

	dispatch({ type: 'Fetch_Single_POST', payload: data });
};

export const deletePost = (id,callback) => async (dispatch) => {
	const URL = '	http://reduxblog.herokuapp.com/api';
	const API_KEY = '?key=mo1234';
	const data = await axios.delete(`${URL}/posts/${id}${API_KEY}`).then(() => callback());;

	dispatch({ type: 'Delete_Post', payload: data });
};
