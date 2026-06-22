import type { ApiQuery, ApiResponse, List } from "@/lib/axios/type"
import type { Paging } from "@/lib/axios/type"

export interface RepositoryRequest<R> {
  getAll: () => Promise<ApiResponse<List<R>>>
  getPaging: (query: ApiQuery) => Promise<ApiResponse<Paging<R>>>
  getDetail: (query: ApiQuery) => Promise<ApiResponse<R>>
  create: <P>(data: P) => Promise<ApiResponse<R>>
  update: <P>(query: ApiQuery, data: P) => Promise<ApiResponse<R>>
  remove: (query: ApiQuery) => Promise<ApiResponse<R>>
}
