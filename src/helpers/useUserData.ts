import { useQuery } from 'react-query';

/**
 * function to fetch users data from api
 * @param {string} userId
 * @returns
 */
export function useUserData(userId) {
	const usersData = useQuery(['users', userId], () =>
		fetch(`/api/users/${userId}`).then((res) => res.json())
	);

	return usersData;
}
