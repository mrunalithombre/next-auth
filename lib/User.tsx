import mongoose, { models } from "mongoose";

const userSChema = new mongoose.Schema({
	name: String,
	email: String,
	image: String,
	password: String,
}, { timestamps: true })

const User = models.user || mongoose.model("user", userSChema)
export default User