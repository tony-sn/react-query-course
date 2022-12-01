import { useQuery } from 'react-query'

export function useUserData(userId: string) {
  const usersData = useQuery(
    ['users', userId],
    ({ signal }) =>
      fetch(`/api/users/${userId}`, { signal }).then(res => res.json()),
    {
      staleTime: 1000 * 60 * 5,
    },
  )
  return usersData
}
