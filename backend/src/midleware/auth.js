const UsetModel = require("../models/UserModel");

module.exports = async (request, response, next) => {
    let email = request.headers.email;
    let password = request.headers.password;

    let user = await UsetModel.findOne({
        where: {
            email, password: btoa(password)
        }
    });

    if(!user) {
        return response.json({
            message: "Você não tem autorização para acessar este recurso"
        });
    }

    next();
}