import { Response } from 'express';
import { createWriteStream } from 'fs';
import PDFKit from 'pdfkit';

export const generatePDF = (res: Response) => {
	console.log('Generate PDF function');

	const doc = new PDFKit();

	doc.pipe(createWriteStream('anamnesis.pdf'));
	doc.pipe(res);

	doc.image('static/images/logo.png', {
		fit: [450, 100],
		align: 'center',
		valign: 'center',
	});

	doc.info.Title = 'Anamnesis';
	doc.info.Author = 'Lameck';
  doc.info.ModDate = new Date();
  
	doc
		.font('static/fonts/Quicksand/static/Quicksand-Regular.ttf')
		.fontSize(25)
		.text('Anamnesis results');

	doc
		.font('static/fonts/Quicksand/static/Quicksand-Bold.ttf')
		.text('Here will be added more informations.');

	doc.end();
};
