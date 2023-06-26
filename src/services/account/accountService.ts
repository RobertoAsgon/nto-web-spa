import { IApiResponse, api } from '../api'
import { IAccount } from './accountModel'

const postNewAccount = async (body: IAccount): Promise<IApiResponse> => {
  const response = await api.post<IApiResponse>('createAccount', body)
  return response.data
}

export { postNewAccount }
