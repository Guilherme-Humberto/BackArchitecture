const RegisterRouter = require('./register-router')

const makeSut = () => {
    return new RegisterRouter()
}

describe("Register router", () => {
    test('Should return 500 if httpRequest is no provided', () => {
        const sut = makeSut()
        const httpResponse = sut.route()
        expect(httpResponse.statusCode).toBe(500)
    })

    test('Should return 400 if name is no provided ', () => {
        const sut = makeSut()
        const httpRequest = {
            body: {
                email: "any_email@email.com",
                password: "any_password"
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
    
    test('Should return 400 if email is no provided ', () => {
        const sut = makeSut()
        const httpRequest = {
            body: {
                name: "any_people",
                password: "any_password"
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })

    test('Should return 400 if password is no provided ', () => {
        const sut = makeSut()
        const httpRequest = {
            body: {
                name: "any_people",
                email: "any_email@email.com",
            }
        }
        const httpResponse = sut.route(httpRequest)
        expect(httpResponse.statusCode).toBe(400)
    })
    
})