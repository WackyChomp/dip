import mongoose from 'mongoose';

const connectDB = (url) => {
    mongoose.set('strictQuery', true);

    mongoose.connect(url)
        .then(() => console.log('MongoDB just connected!!!'))
        .catch((err) => console.log('Error Message: ', err))
}

export default connectDB