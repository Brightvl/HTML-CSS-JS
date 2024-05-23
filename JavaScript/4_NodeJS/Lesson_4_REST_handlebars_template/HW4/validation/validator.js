function checkUser(scheme) {
    return (req, res, next) => {
        const validationResult = scheme.validate(req.body);
        if (validationResult.error) {
            return res.status(400).send(validationResult.error.details);
        }
        next();
    };
}

module.exports = checkUser;
