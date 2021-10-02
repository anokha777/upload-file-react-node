const express = require('express');
const multer = require('multer');
const cors = require('cors');
const path = require('path');

const app = express();
app.use(cors());

app.use(express.static(path.join(__dirname, 'build')));
app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'build', 'index.html'));
});

const fileStorageEngine = multer.diskStorage({
    destination: (req, file, callback) => {
        callback(null, './csv-uploaded');
    },
    filename: (req, file, callback) => {
        callback(null, `${Date.now()}-${file.originalname}`);
    }
});
const upload = multer({storage: fileStorageEngine});

app.post('/upload', upload.single('file'), (req, res) => {
    console.log('req.file---', req.file);
    // await new Promise(resolve => setTimeout(resolve, 5000));
    res.status(201).send({msg: 'file uploaded successfully.'})
});

app.listen(5000, () => {
    console.log("upload server up on 5000");
})
  