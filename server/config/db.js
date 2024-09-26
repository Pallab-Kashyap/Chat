import mongoose from "mongoose"
const connectDB = async () =>
   await mongoose.connect('mongodb://127.0.0.1:27017/PMChat')
        .then(() => console.log('DB Connected'))
        .catch(e => console.log(e))

export default connectDB