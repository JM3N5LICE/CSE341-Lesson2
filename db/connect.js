const dotenv = require('dotenv');
dotenv.config();
const { MongoClient } = require('mongodb');

let _db;

const connectDb = async () => {
  if (_db) {
    console.log('Db is already initialized!');
    return _db;
  }

  try {
    const client = await MongoClient.connect(process.env.MONGODB_URI);

    _db = client.db();
    console.log('Database connected successfully!');
    return _db;
  } catch (error) {
    throw error;
  }
};

const getDb = () => {
  if (!_db) {
    throw Error('Db not initialized');
  }
  return _db;
};

module.exports = {
  connectDb,
  getDb,
};