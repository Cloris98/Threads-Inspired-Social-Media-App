import mongoose from 'mongoose'

// varibale to check the connection status
let isConnected = false;

export const connectToDB = async () => {
    mongoose.set('strictQuery', true);

    if(!process.env.MONGODB_URL) return console.log('MONGODB_URL not found');
    if(isConnected) return console.log('Already connnected to MongoDB');

    try{
        await mongoose.connect(process.env.MONGODB_URL);

        isConnected = true;

        console.log('connected to MongoDB');
    } catch (error){
        console.log(error);
    }
}
