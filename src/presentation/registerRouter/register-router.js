module.exports = class RegisterRouter {
    route(httpRequest) {
        if(!httpRequest || !httpRequest.body) {
            return { statusCode: 500 }
        }
        const { name, email, password } = httpRequest.body
        if(!name || !email || !password) {
            return { statusCode: 400 }
        }
    }
} 