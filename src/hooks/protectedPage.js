import { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';

const useProtectedPage = () => {
	const navigate = useNavigate();

	useEffect(() => {
		const token = localStorage.getItem('labeddit-token');

		if (!token) {
			navigate('/');
		}
	}, [navigate]);
};

export default useProtectedPage;
