const express = require('express');
const cors = require('cors');
const applicationRoutes = require('./app/routes/applicationRoutes');


const multer = require('multer');
const storage = multer.memoryStorage();
const upload = multer({ storage: storage });


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', applicationRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});
app.post('/applications', upload.single('resume'), (req, res) => {
    // Здесь req.file содержит информацию о загруженном файле
    // req.body содержит остальные данные формы
});
const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
