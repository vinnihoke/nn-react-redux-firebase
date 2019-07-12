const initState = {
	projects: [
		{id: '1', title: 'Help me find Peach', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit totam molestias enim, dolorem deserunt placeat, velit rerum eligendi explicabo et ad consequatur eos magni harum exercitationem beatae vero possimus cumque!'},
		{id: '2', title: 'Collect all the stars', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit totam molestias enim, dolorem deserunt placeat, velit rerum eligendi explicabo et ad consequatur eos magni harum exercitationem beatae vero possimus cumque!'},
		{id: '3', title: 'Egg hunt with Yoshi', content: 'Lorem ipsum dolor, sit amet consectetur adipisicing elit. Sit totam molestias enim, dolorem deserunt placeat, velit rerum eligendi explicabo et ad consequatur eos magni harum exercitationem beatae vero possimus cumque!'}
	]
};

const projectReducer = (state = initState, action) => {
	switch (action.type) {
		case 'CREATE_PROJECT': console.log("Created Project", action.project)
	}
	return state
}

export default projectReducer;