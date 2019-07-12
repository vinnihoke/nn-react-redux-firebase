export const createProject = (project) => {
	return (dispatch, getState) => {
		//Make an async call to the database, then dispatch.

		dispatch({type: 'CREATE_PROJECT', project});
	}
}