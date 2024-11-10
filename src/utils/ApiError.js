class ApiErrors extends Error {
    constructor(
        statusCode,
        message = 'somwthing went to wrong !',
        errors = [],
    ){
        super(message);
        this.statusCode = statusCode
        this.data = null
        this.message = message
        this.success = false
        this.error = this.errors

    }
}
export {ApiErrors}