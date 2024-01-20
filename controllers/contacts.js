const mongodb = require('../db/connect');
const ObjectId = require('mongodb').ObjectId;

const getAll = async (req, res, next) => {
  try {
    await mongodb.connectDb();
    const result = await mongodb.getDb().collection('contacts').find().toArray();
    res.setHeader('Content-Type', 'application/json');
    res.status(200).json(result);
  } catch (error) {
    console.error('Error fetching all contacts:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

const getSingle = async (req, res, next) => {
  try {
    await mongodb.connectDb();
    const userId = new ObjectId(req.params.id);
    const result = await mongodb.getDb().collection('contacts').find({ _id: userId }).toArray();
    
    if (result.length === 0) {
      res.status(404).json({ error: 'Contact not found' });
    } else {
      res.setHeader('Content-Type', 'application/json');
      res.status(200).json(result[0]);
    }
  } catch (error) {
    console.error('Error fetching single contact:', error);
    res.status(500).json({ error: 'Internal Server Error' });
  }
};

module.exports = { getAll, getSingle };