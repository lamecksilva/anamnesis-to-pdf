import { createWriteStream } from 'fs';
import PDFKit from 'pdfkit';
import { promisify } from 'util';

export const generatePDF = promisify(function (pdfDoc: any, callback: any) {
	console.log('Generate PDF function');

	const doc = new PDFKit();

	doc.pipe(createWriteStream('anamnesis.pdf'));

	doc
		.font('fonts/Quicksand/static/Quicksand-Regular.ttf')
		.fontSize(25)
		.text('Workout Anamnesis');

	doc
		.font('fonts/Quicksand/static/Quicksand-Bold.ttf')
		.text('Here will be added more informations.');

	const chunks: any = [];
	let result;

	doc.on('data', function (chunk: any) {
		chunks.push(chunk);
	});
	doc.on('end', function () {
		result = Buffer.concat(chunks);
		callback?.(null, Buffer.from(result.toString('base64'), 'base64'));
	});
	doc.end();
});
