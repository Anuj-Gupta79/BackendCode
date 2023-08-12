import express from 'express';

const app = express();

app.use(express.json());
const PORT = 3003

app.get('/', (req, res)=>{
    res.send("Server is running fine!!");
})

app.listen(PORT, ()=>{
    console.log(`Server is listening on http://localhost:${PORT}`);
})