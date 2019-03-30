function setResponse(ctx, status, message, data) {
  ctx.status = status
  ctx.body = {
    message,
    data,
    createdAt: new Date()
  }
  return ctx.body
}

module.exports = class KoaServerResponse {
  // 2XX
  static success(ctx, message = 'OK', data) {
    return setResponse(ctx, 200, message, data)
  }

  static successCreated(ctx, message = 'Created', data) {
    return setResponse(ctx, 201, message, data)
  }

  static successAccepted(ctx, message = 'Accepted', data) {
    return setResponse(ctx, 202, message, data)
  }

  static successNoContent(ctx, message = 'No Content', data) {
    return setResponse(ctx, 204, message, data)
  }

  //3XX
  static redirectionNotModified(ctx, message = 'Not Modified', data) {
    return setResponse(ctx, 304, message, data)
  }

  //4XX
  static clientErrorBadRequest(ctx, message = 'Bad Request', data) {
    return setResponse(ctx, 400, message, data)
  }

  static clientErrorUnauthorized(ctx, message = 'Unauthorized', data) {
    return setResponse(ctx, 401, message, data)
  }

  static clientErrorPaymentRequired(ctx, message = 'Payment Required', data) {
    return setResponse(ctx, 402, message, data)
  }

  static clientErrorForbidden(ctx, message = 'Forbidden', data) {
    return setResponse(ctx, 403, message, data)
  }

  static clientErrorNotFound(ctx, message = 'Not Found', data) {
    return setResponse(ctx, 404, message, data)
  }

  static clientErrorMethodNotAllowed(ctx, message = 'Method Not Allowed', data) {
    return setResponse(ctx, 405, message, data)
  }

  static clientErrorNotAcceptable(ctx, message = 'Not Acceptable', data) {
    return setResponse(ctx, 406, message, data)
  }

  static clientErrorRequestTimeout(ctx, message = 'Request Timeout', data) {
    return setResponse(ctx, 408, message, data)
  }

  static clientErrorConflict(ctx, message = 'Conflict', data) {
    return setResponse(ctx, 409, message, data)
  }

  //5XX
  static serverError(ctx, message = 'Server Error', data) {
    return setResponse(ctx, 500, message, data)
  }

  static serverErrorNotImplemented(ctx, message = 'Not Implemented', data) {
    return setResponse(ctx, 501, message, data)
  }

  static serverErrorServiceUnavailable(ctx, message = 'Service Unavailable', data) {
    return setResponse(ctx, 503, message, data)
  }
}
