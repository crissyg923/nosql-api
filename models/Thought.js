const { Schema, model } = require('mongoose');
const Reaction = require('./Reaction');
const reactionSchema = require('./Reaction');

const thoughtSchema = new Schema(
    {
        thoughtText: {
            type: String,
            required: true,
            min_length: 0,
            max_length: 280,
        },
        createdAt: {
            type: Date,
            default: Date.now
            // Implement getter method to format timestamp
        },
        username: {
            type: String,
            required: true,
        },
        reactions: [reactionSchema]
    },
    {
        toJSON: {
            virtuals: true,
        },
        // id: false,
    }
);

thoughtSchema  
    .virtual('getReactions')
    .get(function () {
        return this.reactions.length;
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;