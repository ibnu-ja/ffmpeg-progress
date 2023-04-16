const express = require('express');
const app = express();
const fs = require('fs');
require('dotenv').config();


// Define the route handler for the progress API
app.get('/api/ffmpeg/progress', function(req, res) {
  const progressFilePath = process.env.PROGRESS_OUTPUT;
  const progressData = fs.readFileSync(progressFilePath, 'utf-8');
  const progressLines = progressData.trim().split('\n');
  const progress = {};
  for (const line of progressLines) {
    const [key, value] = line.split('=');
    progress[key.trim()] = value.trim();
  }
  res.json(progress);
});

app.get('/api/ffmpeg/fileinfo', function(req, res) {
  const fileInfoPath = process.env.FILE_INFORMATION;
  const fileInfo = fs.readFileSync(fileInfoPath, 'utf-8');
  const data = JSON.parse(fileInfo);
  res.json(data);
});

// Start the server
app.listen(2345, function() {
  console.log('Server listening on port 2345');
});