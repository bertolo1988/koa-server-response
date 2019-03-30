const should = require('should')
const KoaServerResponse = require('../KoaServerResponse')

describe('ServerResponse class', function() {
  it('should receive default HTTP 200', () => {
    let ctx = {}
    KoaServerResponse.success(ctx)
    ctx.status.should.be.eql(200)
    ctx.message.should.be.eql('OK')
    ctx.createdAt.should.be.a.Date()
    should.not.exist(ctx.body)
  })

  it('should receive default HTTP 500', () => {
    let ctx = {}
    KoaServerResponse.serverError(ctx)
    ctx.status.should.be.eql(500)
    ctx.message.should.be.eql('Server Error')
    ctx.createdAt.should.be.a.Date()
    should.not.exist(ctx.body)
  })
})
