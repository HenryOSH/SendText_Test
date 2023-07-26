const express = require('express');
const bodyParser = require('body-parser');

const app = express();
const port = 3000;
const cors = require('cors');

app.use(cors());


// Middleware
app.use(bodyParser.json());
app.use(express.static('public'));

app.post('/api/sendText', (req, res) => {
    console.log("API 호출됨.");
    const receivedText = req.body.text;

    console.log(`인식된 메시지: ${receivedText}`);
    res.json({ message: '텍스트가 성공적으로 인식되었습니다..' });
});

app.listen(port, () => {
    console.log(`http://localhost:${port}`);
});
