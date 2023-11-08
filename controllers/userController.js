const { User, Thought } = require('../models');

// get all users, user by id, post new user
module.exports = {
    async getUsers(req, res) {
        try {
            const users = await User.find();
            res.json(users);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleUser(req,res) {
        try {
            const user = await User.findOne({ _id: req.params.userId})
            .populate({ path: 'thoughts', select: '-__v'})
            .populate({ path: 'friends', select: '-__v'});
            if (!user) {
                return res.status(404).json({ message: 'No user found with that ID'})
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async createUser(req,res) {
        try {
            const user = await User.create(req.body);
            res.json(user)
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteUser(req, res) {
        try {
            const user = await User.findOneAndDelete({ _id: request.params.userId});
            if (!user) {
                return res.status(404).json({ message: 'User not found.'})
            }
            res.json({ message: 'User successfully deleted'});
        } catch (err) {
            res.status(500).json(err);
        }
    }
};