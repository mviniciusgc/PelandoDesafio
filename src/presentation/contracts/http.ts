export type HttpResponse<T = any> = {
  statusCode: number
  body: T
}

export const serverError = (error: Error): HttpResponse => ({
  statusCode: 500,
  body: error.stack
})

export const ok = (body: any): HttpResponse => ({
  statusCode: 200,
  body
})
