import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LoginPage from '../pages/loginPage/loginPage';
import SignUpPage from '../pages/signUpPage/signUpPage';
import PostsPage from '../pages/postsPage/postsPage';
import CommentPage from '../pages/commentsPage/commentsPage';

export default function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/labeddit-frontend/" element={<LoginPage />} />
				<Route path="/signUp" element={<SignUpPage />} />
				<Route path="/posts" element={<PostsPage />} />
				<Route path="/comments" element={<CommentPage />} />
			</Routes>
		</BrowserRouter>
	);
}
