const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors()); // Enable CORS
app.use(express.static(path.join(__dirname, 'public')));

app.get('/model', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/model.glb'));
});

app.get('/earth', (req, res) => {
  res.sendFile(path.join(__dirname, 'public/planet/scene.gltf'));
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
