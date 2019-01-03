class ApiError extends Error {
  constructor() {
    super()
  }

  static get NotFoundError() {
    return {
      name: 'NOT FOUND',
      message: 'Object not found with this id',
      status: 404
    }
  }

  static get ServerError() {
    return {
      name: 'SERVER ERROR',
      message: 'Server encountered an internal error',
      status: 500
    }
  }
}

module.exports = ApiError;