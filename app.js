const express = require('express');
const path = require('path');
const cors = require('cors');

const app = express();

// middlewares
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(cors())

// routes
app.get('*', (req, res) => {
    res.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
});

const PORT = process.env.PORT || 5152;

app.listen(PORT, () => {
    console.log('server is running 🔥🔥')
})
