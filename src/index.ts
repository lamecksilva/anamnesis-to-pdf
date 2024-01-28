require('dotenv').config();
import express, { Request, Response } from 'express';

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req: Request, res: Response) => {
	res.send(`Welcome to Anamnesis to PDF server :)`);
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
