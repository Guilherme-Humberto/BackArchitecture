module.exports = class LoginRouter {
    constructor(authUseCase) {
        this.authUseCase = authUseCase
    }
    
    route(httpRequest) {
        if(!httpRequest || !httpRequest.body) {
            return {
                statusCode: 500
            }
        }
        const { email, password } = httpRequest.body
        if(!email || !password) {
            return {
                statusCode: 400
            }
        }
        this.authUseCase.auth(email, password)
    }
}