const { User, Thought } = require('../models');


// CRUD oprations for thoughts/reactions 
module.exports = {
    async getThoughts(req,res) {
        try {
            const thoughts = await Thought.find();
            res.json(thoughts);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async getSingleThought(req, res) {
        try {
            const thought = await Thought.findOne({ _id: req.params.thoughtId });
            if (!thought) {
                return  res.status(404).json({message: 'No user with that ID!'})
            }
            res.json(thought);
    } catch (err) {
        res.status(500).json(err);
    }
},
    async createThought(req,res) {
        try{
        const thought = await Thought.create(req.body);
        const user = await User.findOneAndUpdate(
            { _id: req.body.userId},
            { $addToSet: { thoughts: thought._id }},
            { new: true }
        );
        if (!user) {
            return res.status(404).json({
                message: 'No user found with that ID.'
            })
        }
        res.status(200).json({message: 'Thought successfully created', user});
        } catch (err) {
            console.log(err);
            res.status(500).json(err);
        }
    },
    async updateThought(req, res) {
        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId},
                { $set: req.body },
                { runValidators: true, new: true }
            );
            if(!thought) {
                res.status(404).json({ message: 'No thought with that ID.'})
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteThought(req,res) {
        try {
            const thought = await Thought.findOneAndDelete({ _id: req.params.thoughtId });
            if (!thought) {
                res.status(404).json({ message: 'No thought with that ID'});
            }
            res.json({ message: 'Thought successfully deleted'});
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async addReaction(req,res) {
        console.log('You are adding a new reaction');
        console.log(req.body);

        try {
            const thought = await Thought.findOneAndUpdate(
                { _id: req.params.thoughtId },
                { $addToSet: { reactions: req.body }},
                { runValidators: true, new: true }
            );

            if( !thought) {
                return res.status(404).json({ message: 'No thought found with that Id'});
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },
    async deleteReaction(req,res) {
        try {
            const thought = await Thought.findByIdAndUpdate(
                req.params.thoughtId,
                { $pull: { reactions: {_id: req.body.reactionId } } },
                { runValidators: true, new: true }
            );

            if (!thought) {
                return res.status(404).json({ message: 'No thought found with that ID'});
            }
            res.json(thought);
        } catch (err) {
            res.status(500).json(err);
        }
    },

};