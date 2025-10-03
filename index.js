const express = require('express')
const { MongoClient } = require('mongodb');

const app = express();

const uri = 'mongodb://admin:secret@my-mongodb:27017/app?authSource=admin';
const client = new MongoClient(uri);

async function connect() {
  try {
    await client.connect();
    console.log('MongoDB 連接成功');
    
    const db = client.db('nodejs-practice');
    const collection = db.collection('test');
    
    // 插入測試資料
    await collection.insertOne({ 
      message: 'Hello MongoDB!', 
      timestamp: new Date() 
    });
    
    // 查詢資料
    const result = await collection.findOne({});
    console.log('查詢結果:', result);
    
  } catch (error) {
    console.error('連接錯誤:', error);
  } finally {
    await client.close();
  }
}

connect();


app.listen(3000)



