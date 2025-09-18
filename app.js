const express = require('express');
const { MongoClient } = require('mongodb');

const app = express();
const port = 3000;

const uri = 'mongodb://admin:secret@my-mongodb:27017/app?authSource=admin';
const client = new MongoClient(uri);

app.get('/', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('app');
    const collection = db.collection('test');
    
    const data = await collection.find({}).toArray();
    
    res.send(`
      <h1>Node.js + Express + MongoDB</h1>
      <p>連接成功！</p>
      <h2>資料庫內容：</h2>
      <pre>${JSON.stringify(data, null, 2)}</pre>
    `);
  } catch (error) {
    res.send(`<h1>錯誤</h1><p>${error.message}</p>`);
  }
});

app.get('/add', async (req, res) => {
  try {
    await client.connect();
    const db = client.db('app');
    const collection = db.collection('test');
    
    await collection.insertOne({
      message: `新增資料 ${new Date().toLocaleString()}`,
      timestamp: new Date()
    });
    
    res.redirect('/');
  } catch (error) {
    res.send(`<h1>錯誤</h1><p>${error.message}</p>`);
  }
});

app.listen(port, '0.0.0.0', () => {
  console.log(`伺服器運行在 http://localhost:${port}`);
});
