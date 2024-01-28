require('dotenv').config();
import express, { Request, Response } from 'express';
import { generatePDF } from './utils/pdf';

const app = express();
const port = process.env.PORT || 9000;

app.get('/', (req: Request, res: Response) => {
	res.send(`Welcome to Anamnesis to PDF server :)`);
});

app.get('/pdf', async (req: Request, res: Response) => {
	const pdfBinary = await generatePDF({});

	res.setHeader('Content-Type', 'application/pdf');
	return res.send(pdfBinary);
});

app.listen(port, () => {
	console.log(`Server running on port: ${port}`);
});
