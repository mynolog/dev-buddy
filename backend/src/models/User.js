// import mongoose from 'mongoose'
// import bcrypt from 'bcrypt'

// const userSchema = mongoose.Schema({
//   email: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   username: {
//     type: String,
//     required: true,
//     unique: true,
//   },
//   name: {
//     type: String,
//     required: true,
//   },
//   password: {
//     type: String,
//   },
// })

// // mongoose middleware를 통한 비밀번호 암호화
// userSchema.pre('save', async function () {
//   this.password = await bcrypt.hash(this.password, 12)
// })

// const User = mongoose.model('User', userSchema)

// export default User
