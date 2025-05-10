/* eslint-disable @typescript-eslint/ban-ts-comment */
// @ts-nocheck
import jsPDF from 'jspdf';
import autoTable from 'jspdf-autotable';

export default function TicketDownload(userName, phoneNumber, amount, from, destination, seats) {
  const date = new Date();
  const formattedDate = date.toISOString().slice(0, 10);

  const doc = new jsPDF();

  // Header: Title and Passenger Information
  doc.setFont('helvetica', 'bold'); // Making title bolder
  doc.setFontSize(14); // Increasing title font size
  doc.text('North-Rift Shuttle', 15, 15);

  doc.setFont('helvetica', 'normal');
  doc.setFontSize(10);
  doc.text(userName, 15, 25);
  doc.text(phoneNumber, 15, 30);

  // Ticket Details
  doc.setFont('helvetica');
  doc.setFontSize(15);
  doc.text(`Ticket 2546`, 15, 45);

  const tableStyles = {
    font: 'helvetica',
    fontSize: 9,
    textColor: [50, 50, 50],
    fillColor: [237, 247, 255],
    halign: 'center',
    cellPadding: { top: 2, right: 2, bottom: 2, left: 2 },
  };

  // Ticket Table
  autoTable(doc, {
    startY: 60, // Adjusted startY position
    head: [['Date', 'From', 'Destination', 'Seats', 'Total Cost']],
    body: [[formattedDate, from, destination, seats, amount]],
    styles: tableStyles,
    theme: 'grid',
    bodyStyles: {
      fillColor: false,
      lineColor: [237, 247, 255],
    },
  });

  // Save the PDF
  doc.save('ticket');
}
