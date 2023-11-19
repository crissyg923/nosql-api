const { Schema, model } = require('mongoose');

const reactionSchema = require('./Reaction');

// Schema to create thought
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
            getters: true
        },
    }
);

thoughtSchema  
    .virtual('getReactions')
    .get(function () {
        return this.reactions.length;
    });
thoughtSchema
    .path('createdAt')
    .get(function (createdAt) {
      return createdAt.toLocaleString(); 
    });

const Thought = model('thought', thoughtSchema);

module.exports = Thought;