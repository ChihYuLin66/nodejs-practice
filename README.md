# Node.js 練習專案

這是一個 Node.js 練習專案，展示如何在 Docker 環境中連接 MongoDB。

## 快速開始

### 1. 安裝套件
```bash
# 在 Docker 容器中執行
docker exec -it my-nodejs bash -c "cd /var/www/nodejs-practice && npm install"
```

### 2. 執行程式
```bash
# 執行主程式
docker exec -it my-nodejs bash -c "cd /var/www/nodejs-practice && npm start"

# 或直接執行
docker exec -it my-nodejs bash -c "cd /var/www/nodejs-practice && node index.js"
```

## 連接資訊

- **MongoDB URI**: `mongodb://admin:secret@my-mongodb:27017/app?authSource=admin`
- **資料庫**: `app`
- **集合**: `test`

## 檔案說明

- `index.js` - 主程式，展示 MongoDB 連接和基本操作
- `package.json` - 專案配置和依賴套件
- `README.md` - 專案說明文件
