import type { RepositoryRequest } from "../type"
import type { ApiQuery, List, Paging } from "@/lib/axios/type"
import type { User } from "@/models/user/user.type"
import { httpRequest } from "@/lib/axios/http"
import { userRoutes } from "./user.routes"
import { getApiQuery } from "@/lib/axios/helper"

class UserRepository implements RepositoryRequest<User> {
  async getAll() {
    const response = await httpRequest.Get<List<User>>(userRoutes.list)
    return response
  }

  async getPaging(query: ApiQuery) {
    const response = await httpRequest.Get<Paging<User>>(userRoutes.list + getApiQuery(query))
    return response
  }

  async getDetail(query: ApiQuery) {
    const response = await httpRequest.Get<User>(userRoutes.detail + getApiQuery(query))
    return response
  }

  async create<FormData>(data: FormData) {
    const response = await httpRequest.Post<FormData, User>(userRoutes.create, data)
    return response
  }

  async update<FormData>(query: ApiQuery, data: FormData) {
    const response = await httpRequest.Put<FormData, any>(userRoutes.update + getApiQuery(query), data)
    return response
  }

  async remove(query: ApiQuery) {
    const response = await httpRequest.Delete<any, any>(userRoutes.remove + getApiQuery(query))
    return response
  }
}

export const userRepository = new UserRepository()
