const express = require('express');
const cors = require('cors');
const applicationRoutes = require('./app/routes/applicationRoutes');


const app = express();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended: true}))
app.use('/', applicationRoutes);

app.get('/', (req, res) => {
    res.send('Hello World!');
});

const PORT = 9000;
app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
});
