import mongoose from 'mongoose'

const connectDB = async () => {
    try {
        await mongoose.connect(process.env.MONGODB_CONNECT, {
            useNewUrlParser: true,
            useCreateIndex: true,
            useUnifiedTopology: true
        })

        console.log('MongoDB Connected');
    } catch (error) {
        console.log(`Error: ${error.message}`);
    }
}

export default connectDB