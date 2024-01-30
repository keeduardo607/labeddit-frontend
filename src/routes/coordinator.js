export const goToLoginPage = (navigate) => {
	navigate('/labeddit-frontend/');
};

export const goToSignUpPage = (navigate) => {
	navigate('/signUp');
};

export const goToPostsPage = (navigate) => {
	navigate('/posts');
};

export const goToCommentsPage = (navigate, postId, userId) => {
	navigate('/comments', {
		state: { postId, userId },
	});
};
