const rewire = require("rewire")
const emails = rewire("./emails")
const sendEmail = emails.__get__("sendEmail")
// @ponicode
describe("sendEmail", () => {
    test("0", () => {
        let callFunction = () => {
            sendEmail("Subject: %s", "This is a Text", "https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("1", () => {
        let callFunction = () => {
            sendEmail("A sub-message", "Hello, world!", "https://croplands.org/app/a/reset?token=")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("2", () => {
        let callFunction = () => {
            sendEmail("A sub-message", "This is a Text", "https://api.telegram.org/")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("3", () => {
        let callFunction = () => {
            sendEmail("A sub-message", "foo bar", "https://accounts.google.com/o/oauth2/revoke?token=%s")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("4", () => {
        let callFunction = () => {
            sendEmail("dummy subject", "This is a Text", "www.google.com")
        }
    
        expect(callFunction).not.toThrow()
    })

    test("5", () => {
        let callFunction = () => {
            sendEmail("", undefined, undefined)
        }
    
        expect(callFunction).not.toThrow()
    })
})
