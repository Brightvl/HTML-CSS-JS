function checkParams(schema) {
    return (request, response, next) => {
        const validationResult = schema.validate(request.params);
        if (validationResult.error) {
            return response.status(400).send(validationResult.error.details);
        }
        next();
    };
}

function checkBody(schema) {
    return (request, response, next) => {
        const validationResult = schema.validate(request.body);
        if (validationResult.error) {
            return response.status(400).send(validationResult.error.details);
        }
        next();
    };
}

module.exports = {checkParams, checkBody}