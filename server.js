import express from 'express';
import bodyParser from 'body-parser';
import ejs from 'ejs';
import { fileURLToPath } from 'url';
import { dirname } from 'path';
import path from 'path';

const __filename = fileURLToPath(import.meta.url);
const __dirname = dirname(__filename);

const app = express();
const port = 3000;

app.use(express.static("public"));

app.get('/', (req, res) => {
    res.render('pages/index.ejs');
});

app.listen(port, () => {
    console.log(`Server running on port ${port}`);
});
