import { useQuery, UseQueryOptions } from 'react-query'
import { User } from '../../types/User'
import { api } from '../api'

type GetUsersResponse = {
  totalCount: number,
  users: User[]
}

export async function getUsers(page: number): Promise<GetUsersResponse> {
  const { data, headers } = await api.get('/users', {
    params: {
      page,
    }
  })
  const totalCount = Number(headers['x-total-count'])
  const users =  data.users.map(user => {

    return new User(
      user.id,
      user.name,
      user.email,
      user.createdAt
    )
  })
  return {users, totalCount}
}

// export function useUsers(page: number, options: UseQueryOptions) {
  export function useUsers(page: number) {
  return useQuery(['users', page], () => getUsers(page), {
    staleTime: 1000 * 5, // 5 segundos
    // staleTime: 1000 * 60 * 10, // 10 minutos
    // ...options
  })
}
