class CreateError extends Error {
    constructor(message, statusCode) {
        if (!Number.isInteger(statusCode) || statusCode < 400 || statusCode > 599) {
            throw new Error('Invalid status code');
        }

        super(message);

        this.statusCode = statusCode;
        this.status = statusCode >= 500 ? 'error' : 'fail';
    }
}

module.exports = CreateError;