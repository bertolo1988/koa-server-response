function successData(data) {
  return { data, created: new Date() }
}

function successMessage(message) {
  return { message, created: new Date() }
}

function errorMessage(message) {
  return { error: message, created: new Date() }
}

function setResponse(ctx, data, status) {
  ctx.status = status
  ctx.body = data
}

class ServerResponse {
  static successCreate(ctx, data) {
    setResponse(ctx, successData(data), 201)
  }

  static successData(ctx, data) {
    setResponse(ctx, successData(data), 200)
  }

  static success(ctx) {
    setResponse(ctx, successMessage('ok'), 200)
  }

  static successMessage(ctx, message) {
    setResponse(ctx, successMessage(message), 200)
  }

  static clientError(ctx, message = 'Client error') {
    setResponse(ctx, errorMessage(message), 400)
  }

  static unauthorizedError(ctx, message = 'Not authorized') {
    setResponse(ctx, errorMessage(message), 401)
  }

  static notFoundError(ctx, message = 'Not found') {
    setResponse(ctx, errorMessage(message), 404)
  }

  static methodNotAllowed(ctx, message = 'Method not allowed') {
    setResponse(ctx, errorMessage(message), 405)
  }

  static criticalError(ctx) {
    ctx.status = 500
  }
}

module.exports = ServerResponse
