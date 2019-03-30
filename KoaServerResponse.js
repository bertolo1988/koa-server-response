function setResponse(ctx, message, data, status) {
  ctx.status = status
  ctx.message = message
  ctx.body = data
  ctx.createdAt = new Date()
}

module.exports = class KoaServerResponse {
  // 2XX
  static success(ctx, message = 'OK', data) {
    setResponse(ctx, message, data, 200)
  }

  static successCreated(ctx, message = 'Created', data) {
    setResponse(ctx, message, data, 201)
  }

  static successAccepted(ctx, message = 'Accepted', data) {
    setResponse(ctx, message, data, 202)
  }

  static successNoContent(ctx, message = 'No Content', data) {
    setResponse(ctx, message, data, 204)
  }

  //3XX
  static redirectionNotModified(ctx, message = 'Not Modified', data) {
    setResponse(ctx, message, data, 304)
  }

  //4XX
  static clientErrorBadRequest(ctx, message = 'Bad Request', data) {
    setResponse(ctx, message, data, 400)
  }

  static clientErrorUnauthorized(ctx, message = 'Unauthorized', data) {
    setResponse(ctx, message, data, 401)
  }

  static clientErrorPaymentRequired(ctx, message = 'Payment Required', data) {
    setResponse(ctx, message, data, 402)
  }

  static clientErrorForbidden(ctx, message = 'Forbidden', data) {
    setResponse(ctx, message, data, 403)
  }

  static clientErrorNotFound(ctx, message = 'Not Found', data) {
    setResponse(ctx, message, data, 404)
  }

  static clientErrorMethodNotAllowed(ctx, message = 'Method Not Allowed', data) {
    setResponse(ctx, message, data, 405)
  }

  static clientErrorNotAcceptable(ctx, message = 'Not Acceptable', data) {
    setResponse(ctx, message, data, 406)
  }

  static clientErrorRequestTimeout(ctx, message = 'Request Timeout', data) {
    setResponse(ctx, message, data, 408)
  }

  static clientErrorConflict(ctx, message = 'Conflict', data) {
    setResponse(ctx, message, data, 409)
  }

  //5XX
  static serverError(ctx, message = 'Server Error', data) {
    setResponse(ctx, message, data, 500)
  }

  static serverErrorNotImplemented(ctx, message = 'Not Implemented', data) {
    setResponse(ctx, message, data, 501)
  }

  static serverErrorServiceUnavailable(ctx, message = 'Service Unavailable', data) {
    setResponse(ctx, message, data, 503)
  }
}
