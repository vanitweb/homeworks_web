let state = {
	
	 dialogs: [
		{id: 1, name: 'Dima'},
		{id: 2, name: 'Nadia'},
		{id: 2, name: 'Asya'},
	],	
	 messages: [
		{id: 1, message: 'Hi'},
		{id: 2, message: 'Hello'},
		{id: 2, message: 'Yo'},
	],


	 posts: [
	    {id: 1, message: 'Dima', likesCount: 12},
	    {id: 2, message: 'Nadia', likesCount: 4},
	    {id: 2, message: 'Asya', likesCount: 1},
	] 
}
let addPost = (psotMessage) => {
		let newPost =  {
			id: 5,
			message: postMessage,
			likesCount: 0
		};
	state.profilePage.posts.push(newPost);	
}
export {addPost};
export {state};