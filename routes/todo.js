const express = require('express');
const router = express.Router();
const { MongoClient, ObjectId } = require('mongodb');

const uri = 'mongodb://admin:secret@my-mongodb:27017/app?authSource=admin';
const client = new MongoClient(uri);

/* GET users listing. */
router.get('/', async function(req, res, next) {
  const db = client.db('nodejs-practice');
  const collections = db.collection('tasks');

  const tasks = await collections.find({
    completed_at: null
  }).toArray();

  res.render('todo/index', {
    tasks: tasks
  });
});

// 新增
router.post('/', async function(req, res, next) {
  try {
    const db = client.db('nodejs-practice');
    const collections = db.collection('tasks');

    const result = await collections.insertOne({
      title: req.body.title,
      completed_at: null,
      created_at: new Date(), 
    });

    if (result.acknowledged) {
      res.json({success: true, id: result.insertedId});
    }
  } catch (error) {
    res.status(500).json({success: false, error: error.message});
  }
});

// 更新
router.put('/:id', function(req, res, next) {
  
});

// 刪除
router.delete('/:id', async function(req, res, next) {
  console.log('req.params.id:', req.params.id);

  try {
    const db = client.db('nodejs-practice');
    const collections = db.collection('tasks');

    const result = await collections.updateOne({
      _id: new ObjectId(req.params.id)  // 改用 _id 和 ObjectId
    }, {
      $set: {
        completed_at: new Date()
      }
    });

    console.log('Update result:', result);
    res.json({ success: true, modifiedCount: result.modifiedCount });
  } catch (error) {
    console.log('Error:', error);
    res.status(500).json({ error: error.message });
  }
});

module.exports = router;
