
const  { userModel } = require('../model')

const userController = { 

    getUser   : async (req, res, next) => {
        try {
            const users= await userModel.getUser()
            res.status(200).json(users)
        } catch (error) {
            next(error);
        }
    },
    createUser: async(req, res, next) => {
        try {
            const reults= await userModel.createUser(req.headers, req.body)
            res.status(200).json(reults)
        } catch (error) {
            console.log(error.stack);
            next(error);
        }
    },
    updateUser: (req, res, next) => {
        try {
            
        } catch (error) {
            next(error);
        }
    },
    deleteUser: (req, res, next) => {
        try {
            
        } catch (error) {
            next(error);
        }
    },

}

module.exports = userController;