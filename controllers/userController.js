const { User } = require('../models');

// CRUD operations for users
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
            const user = await User.findOneAndDelete({ _id: req.params.userId});
            if (!user) {
                return res.status(404).json({ message: 'User not found.'})
            }
            res.json({ message: 'User successfully deleted'});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async updateUser(req,res) {
        try {
            const user = await User.findOneAndUpdate(
                {_id: req.params.userId},
                {$set: req.body},
                {runValidators: true, new: true}
            );

        if(!user) {
            res.status(404).json({ message: 'No user with this transaction' });
        }

        res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addFriend(req,res) {
        console.log('You are adding a new friend');
        console.log(req.body);

        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId },
                { $addToSet: { friends: req.params.friendId} },
                { runValidators: true, new: true }
            );

            if (!user) {
                return res.status(404).json({ message: 'No student found with that ID' });
            }
            res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async removeFriend(req,res) {
        // console.log('You are deleting a friend');
        
        try {
            const user = await User.findOneAndUpdate(
                { _id: req.params.userId},
                { $pull: { friends: { friendId: req.params.friendId } } },
                { runValidators: true, new: true}
                );
                
                if (!user) {
                    return res.status(404).json({ message: 'No user found with that ID.'});
                }
                res.json(user);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    
};