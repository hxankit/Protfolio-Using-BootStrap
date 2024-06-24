import  express  from "express";

const app = express();


app.use(express.static('public'));


app.get('/', (req, res) => {
    res.sendFile('index.html', { root: 'public' });
});


const port = 3000;
app.listen(port, () => {
    console.log(`Server is running on http://localhost:${port}`);
});