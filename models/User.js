const { Schema, model } = require('mongoose');

// Schema for creating user 
const userSchema = new Schema(
    {
        username: {
            type: String,
            required: true,
            max_length: 20,
        },
        
        email: {
                type: String,
                required: true,
                unique: true,
                match: [/.+@.+\..+/, 'Must match an email address!'],
        },

        thoughts: [
            {
                type: Schema.Types.ObjectId,
                ref: 'thought',
            },
        ],
        friends: [
            {
                type: Schema.Types.ObjectId,
                ref: 'User',
            },
        ],
        
    },
    {
        toJSON: {
            virtuals: true,
        },
        id: false,
    }
);
// Sets list of friends
userSchema
    .virtual('friendlist')
    .get(function () {
        return this.friends.length;
    });

const User = model('User', userSchema);

module.exports = User;