import { model, models, Schema } from "mongoose";


const UserSchema = new Schema({
    email: {
        type: String,
        required: [true, 'Email is required'],
        unique: [true, 'Email already exists']
    },
    userName: {
        type: String,
        required: [true, 'Email is required'],
        match: [/^(?=.{8,20}$)(?![_.])(?!.*[_.]{2})[a-zA-Z0-9._]+(?<![_.])$/, "Username invalid, it should contain 8-20 alphanumeric letters and be unique!"]
    },
    image: {
        type: String,
    },
    id: {
        type: String,
    }
})

const User = models.User || model("User", UserSchema);

export default User;