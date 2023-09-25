const Customer = require('../../model/customer.model');

const loginController = (req, res, next) => {

}

const signupController = (req, res, next) => {
    try {
        const { password } = req.body;
        const newUser = new Customer(req.body);

        newUser.save();
    } catch (e) {

    }
}